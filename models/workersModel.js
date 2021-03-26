const mongoose = require("mongoose");

const workerInformation = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    receptionTimes: {
        type: Array,
        required: true
    },
    mobileTimes: {
        type: Array,
        required: true
    }
},{
    collection: "Workers"
});

module.exports = mongoose.model('Workers',workerInformation);