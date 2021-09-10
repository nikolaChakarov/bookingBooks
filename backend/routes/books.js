const router = require('express').Router();
const Book = require('../models/Book');
const User = require('../models/User');

const isAuth = require('../middlewares/isAuth');

router.get('/', (req, res, next) => {

    res.send('Hello from Node.js');
});

router.post('/api/create', isAuth, async (req, res, next) => {


    try {

        const formData = req.body;
        formData.creator = req.user._id;

        const currentUser = await User.findById(req.user._id);

        let book = new Book(formData);
        const dbCreateBookRes = await book.save();

        currentUser.books.push(book._id);
        await currentUser.save();

        // test populate :). Getting the user with his movies. With all the information.
        let test = await User.findById(req.user._id).populate('books');
        console.log(test);

        res.status(200).json({
            book: dbCreateBookRes._doc
        });

    } catch (err) {
        console.error(`${err.message}`.red.bold);
        res.status(500).json({
            msg: err.message
        });
    }

});


router.put('/api/edit/:id', isAuth, async (req, res, next) => {

    let data = req.body;

    try {

        const editedBook = await Book.findByIdAndUpdate(req.params.id, { author: data.author }, { new: true });

        res.status(200).json({ editedBook });

    } catch (err) {
        console.error(`${err.message}`.red.bold);
        res.status(500).json({
            msg: err.message
        });
    }

});

router.delete('/api/del/:id', isAuth, async (req, res, next) => {

    let data = req.body;

    try {

        const delResult = await Book.findByIdAndDelete(req.params.id);

        res.status(200).json({ msg: `The book with id:${req.params.id} has been deleted` });

    } catch (err) {
        console.error(`${err.message}`.red.bold);
        res.status(500).json({
            msg: err.message
        });
    }

});

router.post('/api/comment/:bookId', isAuth, async (req, res, next) => {

    let { comment } = req.body;
    let currentUserId = req.user._id;

    try {

        const currentBook = await Book.findById(req.params.bookId);
        currentBook.comments.push({ comment, id: currentUserId });
        await currentBook.save();

        const comments = currentBook.comments;

        res.status(200).json({ comments });

    } catch (err) {
        console.error(`${err.message}`.red.bold);
        res.status(500).json({
            msg: err.message
        });
    }
});

module.exports = router;