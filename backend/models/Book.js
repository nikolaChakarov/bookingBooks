const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },

    title: {
        type: String,
        required: true
    },

    author: {
        type: String
    },

    price: {
        type: Number
    },

    comments: [{
        comment: String,
        id: String
    }]
}, {
    timestamps: true
});

const Book = mongoose.model('book', BookSchema);

module.exports = Book;