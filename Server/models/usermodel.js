const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
    },
    profileImage: {
        originalName: String,
        mimeType: String,
        filename: String,
        size: Number
    }
});

module.exports = mongoose.model('User', userSchema);
