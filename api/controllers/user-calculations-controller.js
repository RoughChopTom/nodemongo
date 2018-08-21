let mongoose = require('mongoose');
let UserCalculations = mongoose.model('UserCalculations');

module.exports.addCalculations = function (req, res) {
    UserCalculations.findOne({userId: req.params.id}, (err, userCalculations) => {
        if (!userCalculations) {
            userCalculations = new UserCalculations();
            userCalculations.userId = req.params.id;
        }
        userCalculations.calculations.push(req.body);
        userCalculations.save().then(() => {
            res.status(200).json(200);
        }).catch(() => {
            res.status(400).json(400);
        });
    });
};

module.exports.getCalculations = function (req, res) {
    UserCalculations.findOne({userId: req.params.id}, (err, userCalculations) => {
        if (err) {
            res.status(404).json(err);
            return;
        }
        if (userCalculations == null) {
            return res.json([]);
        }
        res.json(userCalculations.calculations);
    });
};

module.exports.deleteCalculations = function (req, res) {
    UserCalculations.findOne({userId: req.params.id}, (err, userCalculations) => {
        if (err) {
            res.status(404).json(err);
            return;
        }
        if (userCalculations == null) {
            return;
        }
        userCalculations.calculations = userCalculations.calculations.filter(x => req.body.indexOf(x._id.toString()) === -1);
        userCalculations.save().then(() => {
            res.status(200).json(200);
        }).catch(() => {
            res.status(400).json(400);
        });
    });
};