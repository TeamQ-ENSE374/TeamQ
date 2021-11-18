

const main = (req, res) => {

    const successPath = "main"
    const failurePath = "/auth"

    if (req.isAuthenticated()){
        res.render(successPath, {username: req.session.uname})
    } else {
        console.log("mainController: User is not authenticated")
        res.redirect(failurePath)
    }
}

const addEvent = (req, res) => {

}

module.exports = { 
    main,
    addEvent
}