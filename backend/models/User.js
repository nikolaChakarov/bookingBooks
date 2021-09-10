const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    books: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'book'
    }],

    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            comment: String
        }
    ]
});

const User = mongoose.model('user', UserSchema);

module.exports = User;