const express = require('express');
const router = require('../routes');

const cors = require('cors');

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // For legacy browser support
}

const expressConfig = (app) => {

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use(cors(corsOptions));

    app.use(router);
};

module.exports = expressConfig;