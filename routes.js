const express = require('express');
const router = express.Router();

const UserCalculation = require('./models/user-calculation');

router.route('/usercalculations').get((req, res) => {
    UserCalculation.find((err, userCalculations) => {
        if (err) {
            console.log(err);
            return;
        }
        res.json(userCalculations);
    });
});

router.route('/usercalculations/:id').get((req, res) => {
    UserCalculation.findById(req.params.id, (err, userCalculation) => {
        if (err) {
            console.log(err);
            return;
        }
        res.json(userCalculation);
    })
});

router.route('/usercalculations/add').post((req, res) => {
    let userCalculations = new UserCalculation(req.body);
    userCalculations.save()
        .then(() => {
            res.status(200).json({'userCalculation': 'Added successfully'});
        })
        .catch(() => {
            res.status(400).send('Failed to create new record');
        });
});

router.route('/usercalculations/update/:id').post((req, res) => {
    UserCalculation.findById(req.params.id, (err, userCalculation) => {
        if (!userCalculation) {
            return next(new Error('Could not load Document'));
        }
        userCalculation.superannuation = req.body.superannuation;
        userCalculation.gross = req.body.gross;
        userCalculation.gross_superannuation = req.body.gross_superannuation;
        userCalculation.tax = req.body.tax;
        userCalculation.net = req.body.net;
        userCalculation.net_superannuation = req.body.net_superannuation;
        userCalculation.save().then(() => {
            res.json('Update done');
        }).catch(() => {
            res.status(400).send('Update failed');
        });
    });
});

router.route('/usercalculations/delete/:id').delete((req, res) => {
    UserCalculation.findByIdAndRemove({_id: req.params.id}, (err) => {
        if (err) {
            return res.json(err);
        }
        res.json('Removed successfully');
    });
});

router.route('/usercalculations/deletecalculation').put((req, res) => {
    UserCalculation.findById(req.body.userCalculationId, (err, userCalculation) => {
        if (!userCalculation) {
            return res.json('Could not load Document');
        }

        const indexOfCalculation = userCalculation.calculations.findIndex(x => x._id.toString() === req.body.calculationId);
        if (indexOfCalculation < 0) {
            return res.json('calculation does not exist');
        }
        userCalculation.calculations.splice(indexOfCalculation, 1);
        userCalculation.save().then(() => {
            res.json('Successfully added calculation to user');
        }).catch(() => {
            res.status(400).send('Adding calculation failed');
        });
    });
});

router.route('/usercalculations/addcalculation/:id').put((req, res, next) => {
    UserCalculation.findById(req.params.id, (err, userCalculation) => {
        if (!userCalculation) {
            return next(new Error('Could not load Document'));
        }
        userCalculation.calculations.push(req.body);
        userCalculation.save().then(() => {
            res.json('Successfully added calculation to user');
        }).catch(() => {
            res.status(400).send('Adding calculation failed');
        });
    });
});

module.exports.router = router;