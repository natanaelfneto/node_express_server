/*
express import
handles http requests for nodejs
*/
const express = require('express');

/*
require passport auth service
*/
require('./services/auth');


// expresss app instance
const app = express();

/*
require routes
passing express app to routes function
*/
require('./routes')(app);


// check if there is an environment process value for port
const PORT = process.env.PORT || 5000;

// set server to listen a port
app.listen(PORT);
