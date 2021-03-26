const mongoose = require("mongoose");

const links = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    orderIndex: {
        type: Number
    }
},{
    collection: "Links"
});

module.exports = mongoose.model('Links',links);