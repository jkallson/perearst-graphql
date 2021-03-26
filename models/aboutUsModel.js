const mongoose = require("mongoose");

const aboutUsText = mongoose.Schema({
    text: {
        type: String,
        required: true
    }
},{
    collection: "AboutUs"
});

module.exports = mongoose.model('AboutUs',aboutUsText);