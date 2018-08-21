let mongoose = require('mongoose');

let userCalculationsSchema = new mongoose.Schema({
    userId: {
        type: String
    },
    calculations: [
        {
            superAnnuation: {
                type: Number
            },
            gross: {
                type: Number
            },
            tax: {
                type: Number
            },
            net: {
                type: Number
            },
            netSuperannuation: {
                type: Number
            },
            year:{
                type: Number
            },
            created: {
                type: Date,
                default: function(){
                    let date = new Date();
                    return date.getTime();
                }
            }
        }
    ]
});

mongoose.model('UserCalculations', userCalculationsSchema);