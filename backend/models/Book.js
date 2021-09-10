const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({

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

    // comments: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User'
    // }]
}, {
    timestamps: true
});

const Book = mongoose.model('book', BookSchema);

module.exports = Book;