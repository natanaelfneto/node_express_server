
const mongoose = require('mongoose');

// import schemas from mongoose
const { Schema } = mongoose;

/*
* User Schema to manage user instances
*/
const userSchema = new Schema({
    googleID: String
})

// set schema
mongoose.model('user', userSchema);