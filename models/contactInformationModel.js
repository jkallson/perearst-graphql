const mongoose = require("mongoose");

const contactInformation = mongoose.Schema({
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
},{
    collection: "ContactInfo"
});

module.exports = mongoose.model('ContactInfo',contactInformation);