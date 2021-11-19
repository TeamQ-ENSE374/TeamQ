const authService = require('../services/authService')

const signup = (req, res) => {
    console.log("authController: User " + req.body.username + " is attempting to register")
    
    const successPath = '/'
    const failurePath = '/auth'

    authService.signup(req, res, successPath, failurePath)
}

const login = (req, res) => {
    console.log("authController: User " + req.body.username + " is attempting to log in")

    const successPath = '/'
    const failurePath = '/auth'

    authService.login(req, res, successPath, failurePath)
}

const logout = (req, res) => {
    console.log("authController: User " + req.session.uname + " is logging out")

    //According to passport, .logout() never fails, so we only have a success path
    const path = '/auth'

    authService.logout(req, res, path)
}

module.exports = {
    signup,
    login,
    logout
}