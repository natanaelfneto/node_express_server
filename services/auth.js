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
const keys = require('../config/keys');

/*
use the google authentication strategy within passport
https://console.developers.google.com
*/
passport.use(
    new GoogleStrategy(
      {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
      },
      (accessToken, refreshToken, profile, done) => {
        console.log('access token', accessToken);
        console.log('refresh token', refreshToken);
        console.log('profile:', profile);
      }
    )
);