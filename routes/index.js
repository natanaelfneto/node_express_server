/*
passport import
handles oauth authentication strategies
*/
const passport = require('passport');

/*
exporting routes
*/
module.exports = (app) => {
    app.get(
        '/auth/google',
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );

    app.get('/auth/google/callback', passport.authenticate('google'));
}