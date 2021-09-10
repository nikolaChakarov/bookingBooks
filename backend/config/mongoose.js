const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const mongooseConfig = () => {

    return mongoose.connect(process.env.URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then((res) => {
            console.log('DB connected'.cyan.underline);
        })
        .catch(err => console.error(err));

};

module.exports = mongooseConfig;