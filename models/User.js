// OK
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;


const UserSchema = new Schema({
  userName: { type: String, required: true },
  password: { type: String, required: true },
  isDeleted:  { type: Boolean, default: false },
  // notes:{ type:String, required: false }
  _project: [
    {
      // Store ObjectIds in the array
      type: mongoose.Schema.Types.ObjectId,
      // The ObjectIds will refer to the ids in the project model
      ref: "Project"
    }
  ]
});


UserSchema.methods.generateHash = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};


UserSchema.methods.validPassword = (password, storedPW) => {
  return bcrypt.compareSync(password, storedPW);
};


module.exports = mongoose.model("User", UserSchema);
