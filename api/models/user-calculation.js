const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let UserCalculation = new Schema({
    _id: {
        type: Number
    },
    username: {
        type: String
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
            },
            created: {
                type: Date,
                default: Date.now()
            }
        }
    ]
});

module.exports = mongoose.model('UserCalculation', UserCalculation);