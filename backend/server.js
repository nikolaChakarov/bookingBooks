const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');

const expressConfig = require('./config/express');
const mongooseConfig = require('./config/mongoose');

dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();
expressConfig(app);

mongooseConfig()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is listening at port ${PORT}`.yellow);
        });
    });
