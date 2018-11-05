//project keys
const settings = require('../../settings');

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

// get user model
// should be change to function for psql, sqlite, mongo, etc...
const mongoose = require('mongoose');
const User = mongoose.model('user');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
    .then(user => {
        done(null, user);
    })
});

/*
use the google authentication strategy within passport
https://console.developers.google.com
*/
passport.use(
    new GoogleStrategy(

        // paramenters for google strategy
        {
        clientID: settings.keys.googleClientID,
        clientSecret: settings.keys.googleClientSecret,
        callbackURL: settings.keys.googleCallbackURL
        },

        // arrow function handler response data
        (accessToken, refreshToken, profile, done) => {

            // check if user already exist
            User.findOne({ googleID: profile.id })
                
            // promisse handler
            .then(user => {

                // if user exist
                if (user) {
                    done(null, user);
                }

                // if user does not exist
                else {
                    new User({ googleID: profile.id })
                    .save()
                    .then(user => { done(null, user) });
                }
            });
        }
    )
);