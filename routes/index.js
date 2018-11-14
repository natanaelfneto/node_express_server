/*
* passport import
* handles oauth authentication strategies
*/
const passport = require('passport');

/*
* exporting routes
*/
module.exports = (app) => {

    //
    app.get('/', (req, res) => { res.send('nothing yet') });

    //
    app.get(
        '/auth/google',
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );

    //
    app.get('/auth/google/callback', passport.authenticate('google'));

    //
    app.get('/api/logout', (req, res) => {
        req.logout();
        res.send('logged out');
    });

    //
    app.get('/api/user/logged', (req, res) => {
        res.send(req.user);
    })
}