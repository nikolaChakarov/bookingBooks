const jwt = require('jsonwebtoken');

const notAuth = (req, res, next) => {

    const token = req.header['x-auth-token'];

    if (token) {
        res.status(400).json({ msg: 'Already logged in' });
        return;
    }

    next();

};

module.exports = notAuth;