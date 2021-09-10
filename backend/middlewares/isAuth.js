const jwt = require('jsonwebtoken');
const dotent = require('dotenv');
dotent.config();

const isAuth = (req, res, next) => {

    const token = req.headers['x-auth-token'];

    if (!token) {
        res.status(400).json({ msg: 'Invalid token. Authorization denied' });
        return;
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRET);

        req.user = decoded.payload;

        next();

    } catch (err) {
        console.log(`${err}`.red.bold);
        res.status(500).json({ msg: 'Server Error' })
    }

};

module.exports = isAuth;