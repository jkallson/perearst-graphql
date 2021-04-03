const mongoose = require('mongoose');

const regulationsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
}, {
    collection: "Regulations"
});

module.exports = mongoose.model('Regulations', regulationsSchema);