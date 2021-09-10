const express = require('express');
const router = require('../routes');

const expressConfig = (app) => {

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }))

    app.use(router);
};

module.exports = expressConfig;