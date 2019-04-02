// OK
const db = require("../models");

module.exports = {
    getUserName: function (req, res) {
        console.log(req.params.user)
        db.User
        .findOne({userName: req.params.user})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));

    },
    userProjects: function (req, res) {
        db.User
        .findById(req.params.id)
        .populate(Projects)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
}