const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
    title: String,
    description: String,
    location: String,
    datetime: Date,
});

module.exports = mongoose.model('Activity', activitySchema);