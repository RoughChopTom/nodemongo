const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let UserCalculations = new Schema({
    _id: {
        type: Number
    },
    username: {
        type: Number
    },
    calculations: [
        {
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
        }
    ]
});

module.exports = mongoose.model('UserCalculations', UserCalculations);