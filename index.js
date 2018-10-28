/*
express import
handles http requests for nodejs
*/
const express = require('express');

/*
passport import
handles oauth authentication strategies
*/
const passport = require('passport');

/*
google oauth 2.0 strategy import
specific strategy for google oauth authentication
*/
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// import project secrect keys
const keys = require('./config/keys');

// expresss app instance
const app = express();

/*
use the google authentication strategy within passport
https://console.developers.google.com
*/
passport.use(

    // set google keys and callback url
    new GoogleStrategy({
        ClientID: keys.GoogleClientID,
        ClientSecrect: keys.GoogleClientSecret,
        callbackURL: '/auth/google/callback'
    },
    
    // 
    (accessToken) => {
        console.log(accessToken)
    })
);

// check if there is an environment process value for port
const PORT = process.env.PORT || 5000;

// set server to listen a port
app.listen(PORT);