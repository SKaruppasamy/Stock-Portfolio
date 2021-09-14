var mongoose = require('mongoose');

//schema
var bioSchema = mongoose.Schema({
    StockHoldlerName: {
        type: String,
        required: true
    },
    ClientID: {
        type: String,
        required: true
    },
    StockName: {
        type: String,
        required: true
    },
    Exchange: {
        type: String,
        required: true
    },
    Date: {
        type: String,
        required: true
    },
    Quantity: {
        type: String,
        required: true
    },
    StockAmount: {
        type: String,
        required: true
    },
    TotalAmount: {

        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

// Export Stock Model
var Bio = module.exports = mongoose.model('bio', bioSchema);

module.exports.get = function (callback, limit) {
    Bio.find(callback).limit(limit); 
}