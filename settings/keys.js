if (process.env.NODE_ENV == "production") {
    module.exports = {
        cookieKey: COOKIE_KEY,
        googleClientID: process.env.GOOGLE_CLIENT_ID,
        googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
        mongoURI: process.env.MONGO_URI
    };
}
else {
    // will not be present in repository
    module.exports = require('./dev.js')
}
  