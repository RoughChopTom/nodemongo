const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let UserRate = new Schema({
    userId: {
        type: String,
        unique: true,
        required: true
    },
    rates: [
        {
            superPercent: {
                type: Number
            },
            incomeType: {
                type: Number
            },
            income: {
                type: Number
            },
            year: {
                type: Number
            },
            created: {
                type: Date,
                default: Date.now()
            }
        }
    ]
});

module.exports = mongoose.model('UserRate', UserRate);