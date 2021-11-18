const User = require('../models/user')

module.exports = function (passport) {

    passport.use(User.createStrategy())

    passport.serializeUser(User.serializeUser())
    passport.deserializeUser(User.deserializeUser())
}