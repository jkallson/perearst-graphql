const mongoose = require("mongoose");

const prices = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    class: {
        type: String,
        required: true
    }
},{
    collection: "Prices"
});

module.exports = mongoose.model('Prices',prices);