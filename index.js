/*
* express import
* handles http requests for nodejs
*/
const express = require('express');

const cookieSession = require('cookie-session');
const passport = require('passport');

// project settings import
const settings = require('./settings');

// user app import
require('./apps/user');

// require passport auth service
require('./middlewares/auth');

// expresss app instance
const app = express();

app.use(
    cookieSession({
        // age of a cookie
        maxAge: settings.MAX_AGE,
        // cookies encript keys
        keys: [settings.KEYS.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());

/*
* require routes
* passing express app to routes function
*/
require('./routes')(app);

// check if there is an environment process value for port
const PORT = process.env.PORT || settings.PORT;

// set server to listen a port
app.listen(PORT);
