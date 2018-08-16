const express = require('express');
const router = express.Router();

const Calculation = require('./models/calculation');

router.route('/calculations').get((req, res) => {
    Calculation.find((err, calculations) => {
        if (err)
            console.log(err);
        else
            res.json(calculations);
    });
});

router.route('/calculations/:id').get((req, res) => {
    Calculation.findById(req.params.id, (err, calculation) => {
        if (err)
            console.log(err);
        else
            res.json(calculation);
    })
});

router.route('/calculations/add').post((req, res) => {
    let calculation = new Calculation(req.body);
    calculation.save()
        .then(() => {
            res.status(200).json({'calculation': 'Added successfully'});
        })
        .catch(() => {
            res.status(400).send('Failed to create new record');
        });
});

router.route('/calculations/update/:id').post((req, res) => {
    Calculation.findById(req.params.id, (err, calculation) => {
        if (!calculation)
            return next(new Error('Could not load Document'));
        else {
            calculation.superannuation = req.body.superannuation;
            calculation.gross = req.body.gross;
            calculation.gross_superannuation = req.body.gross_superannuation;
            calculation.tax = req.body.tax;
            calculation.net = req.body.net;
            calculation.net_superannuation = req.body.net_superannuation;
            calculation.save().then(() => {
                res.json('Update done');
            }).catch(() => {
                res.status(400).send('Update failed');
            });
        }
    });
});

router.route('/calculations/delete/:id').get((req, res) => {
    Calculation.findByIdAndRemove({_id: req.params.id}, (err) => {
        if (err)
            res.json(err);
        else
            res.json('Removed successfully');
    });
});

module.exports.router = router;