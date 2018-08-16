const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let Calculation = new Schema({
    superannuation: {
        type: Number
    },
    gross: {
        type: Number
    },
    gross_superannuation: {
        type: Number
    },
    tax: {
        type: Number
    },
    net: {
        type: Number
    },
    net_superannuation: {
        type: Number
    }
});

module.exports = mongoose.model('Calculation', Calculation);