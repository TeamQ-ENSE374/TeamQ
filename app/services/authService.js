const passport = require('passport')
const User = require('../models/user')

const signup = (req, res, successPath, errorPath) => {
    const {
        username,
        password
    } = req.body

    try {
        validateSignup(username, password)

        User.register({
            username: req.body.username
        }, req.body.password, (err, user) => {
            if (err) {
                throw err
            } else {
                req.session.uname = req.body.username
                passport.authenticate("local")(req, res, () => {
                    res.redirect(successPath)
                })
            }
        })
    } catch (err) {
        console.log('authService-Error: ' + err)
        res.redirect(errorPath)
    }
}

const login = (req, res, successPath, errorPath, next) => {
    const {
        username,
        password
    } = req.body

    try {
        validateLogin(username, password)

        const user = new User({
            username: username,
            password: password
        })
        req.login(user, (err) => {
            if (err) {
                console.log('authService-error: ' + err)
                console.redirect(errorPath)
            } else {
                req.session.uname = username
                passport.authenticate("local")(req, res, () => {
                    res.redirect(successPath)
                })
            }
        })
    } catch (err) {
        console.log('authService-Error: ' + err)
        res.redirect(errorPath)
    }
}

const logout = (req, res, successPath) => {
    //According to passport, .logout() never fails, so we only have a success path
    req.logout()
    res.redirect(successPath)
}

module.exports = {
    signup,
    login,
    logout
}

function validateLogin(username, pword) {
    if (username.length > 3 && pword.length > 2) {
        return
    } else {
        throw 'Email and password must be more than 2 characters'
    }
}

function validateSignup(username, pword, auth) {
    if (username.length > 2 && pword.length > 2) {
        return
    } else {
        throw 'Email and password must be more than 2 characters'
    }
}