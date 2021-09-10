const router = require('express').Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const isAuth = require('../middlewares/isAuth');


dotenv.config();

router.post('/api/register', async (req, res, next) => {

    try {
        const { username, password } = req.body;

        let currentUser = await User.findOne({ username });

        if (currentUser) {
            res.status(400).json({ msg: 'User name is already taken' });
            return;
        }

        const hashed = await bcrypt.hash(password, Number(process.env.SALT));

        currentUser = new User({ username, password: hashed });
        await currentUser.save();

        // json web token
        const token = jwt.sign({
            payload: currentUser
        }, process.env.SECRET, { expiresIn: 36000 });

        res.status(200).json({ msg: 'Successfully registration', token });

    } catch (err) {
        console.log(`${err.message}`.red.bold);
        res.status(500).json({ msg: err.message });
    }

});

router.post('/api/login', async (req, res, next) => {

    try {
        const { username, password } = req.body;

        let currentUser = await User.findOne({ username });
        if (!currentUser) {
            res.status(400).json({ msg: 'invalid credentials ' });
            return;
        }

        const isPassOk = await bcrypt.compare(password, currentUser.password);

        if (!isPassOk) {
            res.status(400).json({ msg: 'invalid credentials ' });
            return;
        }

        const token = jwt.sign({
            payload: currentUser
        }, process.env.SECRET, { expiresIn: 36000 });

        res.status(200).json({ msg: 'Successjully log in', token })

    } catch (err) {
        console.log(`${err}`.red.bold);
        res.status(500).json({ msg: err.message });
    }

});

router.get('/api/collection/:id', isAuth, async (req, res, next) => {

    try {

        let { books } = await User.findById(req.params.id).populate('books');

        res.status(200).json({ books });

    } catch (err) {
        console.log(`${err}`.red.bold);
        res.status(500).json({ msg: err.message });
    }

});



module.exports = router;