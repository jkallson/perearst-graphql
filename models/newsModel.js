const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
}, {
    collection: "News"
});

module.exports = mongoose.model('News', newsSchema);