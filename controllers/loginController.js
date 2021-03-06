// OK
const db = require("../models");
const User = require("../models/User");
const UserSession = require("../models/UserSession");

//*************************************************************************/
//* This is a basic library to handle user authentication.  It uses a 
//* MongoDB backend and requires both mongoose ODM and the bcryptjs npm 
//* package.  
//*************************************************************************/


// Defining methods for the loginController
module.exports = {

  //************************************************************/
  //* Handling User Data
  //************************************************************/
  findAll: function(req, res) {
    db.User
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //************************************************************/
  //* Allow users to self register
  //************************************************************/
  signUp: (req, res) => {
    const { body } = req;
  
    const {
      password
    } = body;
    let { userName } = body;

    console.log("body=" + JSON.stringify(req.body));
    if (!userName) {
      return res.send({
        success: false,
        message: 'ERROR: You must create a user name.'
      });
    };
    if (!password) {
      return res.send({
        success: false,
        message: 'ERROR: You must specify a password.'
      });
    };
    userName = userName.toLowerCase();

console.log(userName);
console.log(db.User);
// console.log(db);

    db.User.find({
      userName: userName
    }, (err, exists) => {
      if (err) {
        return res.send({
          success: false,
          message: 'ERROR:  Server error'
        });
      } else if (exists.length > 0) {
        return res.send({
          success: false,
          message: 'ERROR:  Account requested does not meet requriements'
        });
      };
    });


    const newUser = new User();
    newUser.userName = userName;
    newUser.password = newUser.generateHash(password);
    newUser.save((err, user) => {
      if (err) {
        return res.send({
          success: false,
          message: 'ERROR:  Server error'
        });
      } else {
      return res.send({
        success: true,
        message: 'Account Created!'
      });
      }
    }
  )
  },



  //************************************************************/
  //* Process user Sign-in and create auth token for them
  //************************************************************/
  signIn: (req, res) => {
    // console.log(`${JSON.stringify(req.body)}`);
    const { body } = req;
    const { password } = body;
    let { userName } = body;

// console.log("body=" + JSON.stringify(req.body));
    if (!userName) {
      return res.send({
        success: false,
        message: 'ERROR: You must specify a userName.'
      });
    };
    if (!password) {
      return res.send({ 
        success: false,
        message: 'ERROR: You must specify a password.'
      });
    };
    userName = userName.toLowerCase();

    /*Let's see if we can find the user */
    User.find({
      userName: userName
    }, 
    (err, users) => {
      if (err) {
        return res.send({
          success: false,
          message: 'ERROR:  Server error'
        });
      };
      
      console.log(users.length + users);

      if (users.length != 1) {
        return res.send({
          success: false,
          message: 'ERROR:  Unable to process login, cannot find User.'
        });
      };

      

      /*Having found the user, let's compare the password*/
      const user = users[0];
      if (!user.validPassword(password, user.password)) {
        return res.send({
          success: false,
          message: 'ERROR:  Invalid login.'
        });
      };


      /*Record a user session inthe session table*/
      const userSession = new UserSession();
      userSession.userId = user._id;
      userSession.save((err, doc) => {
        if (err) {
          return res.send({
            success: false,
            message: 'ERROR:  Server error'
          });
        };


        /*Return success and the token from the user session*/
        return res.send({
          success: true,
          message: "User login is complete",
          token: doc._id,
          userName: userName
        });
      });
      // localStorage.setItem("SMC_authkey", token);
    });
  },



  //************************************************************/
  //* Verify validity of a user's token if presented 
  //************************************************************/
  verify: (req, res) => {
    const { body } = req;
    const { token } = body;
    // body was query


    /*Let's see if we can find the user */
    UserSession.find({
      _id: token,
      isDeleted: false
    }, (err, sessions) => {
      if (err) {
        return res.send({
          success: false,
          message: "ERROR:  Unable to obtain user token."
        });
      };

      /*If you can't find the session or find too many */
      if (sessions.length != 1) {
        return res.send({
          success: false,
          message: "ERROR:  Unable to verify session."
        });
      } else {
        return res.send({
          success: true,
          message: "Successfully verified session token."
        });
      };
    });
  },



  //************************************************************/
  //* Process logout and invalidate user token in DB 
  //************************************************************/
  logout: (req, res) => {
    const { query } = req;
    const { token } = query;

    /*When the user elects to logout, invalidate the session token */
    UserSession.findOneAndUpdate({
      _id: token,
      isDeleted: false
    }, {
        $set: { isDeleted: true }
      }, null, (err, sessions) => {
        if (err) {
          return res.send({
            success: false,
            message: "ERROR:  Unable to obtain user token."
          });
        };

        /*Send the logout message when successful */
        return res.send({
          success: true,
          message: "Successfully logged out."
        });
      });
  },
};


