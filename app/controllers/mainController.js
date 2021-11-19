

const main = (req, res) => {

    const successPath = "calendar"
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

const updateEvent = (req, res) => {

}

const deleteEvent = (req, res) => {

}

const fetchEvents = (req, res) => {

}

const inviteFriendsToEvent = (req, res) => {

}

module.exports = { 
    main,
    addEvent, 
    updateEvent,
    deleteEvent,
    fetchEvents,
    inviteFriendsToEvent
}