const db = require("../models");

module.exports = {
    create: function(req, res) {
        db.Project
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).JSON(err));

        console.log(`proContoller: made it`);
    },
    findAll: function(req, res) {
        db.Project
        .find(req.query)
        .sort({ date: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));

    }
}