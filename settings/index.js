/*
mongoose import
make it easy to work with mongodb
*/
const mongoose = require('mongoose');

// get project keys
const keys = require('./keys');

//set mongodb database url
mongoose.connect(keys.mongoURI);

module.exports = {
    keys
}