/*
* mongoose import
* make it easy to work with mongodb
*/
const mongoose = require('mongoose');

// get project keys
const KEYS = require('./keys');
const MAX_AGE = 30 * 24 * 60 * 60 * 1000;
const PORT = 5000;

// set mongodb database url
mongoose.connect(KEYS.mongoURI);

module.exports = {
    KEYS,
    MAX_AGE,
    PORT
}