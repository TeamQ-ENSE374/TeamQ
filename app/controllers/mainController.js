

const main = (req, res) => {

    const successPath = "calendar"
    const failurePath = "/auth"

    if (req.isAuthenticated()){
        //After user is authenticated, we need to:
        //  1. Fetch all events for that user
        //  2. render the calendar view and add the events as input
        //  3. If the fetch fails, we will render the calendar view without the events
        //      and ask the user to reload the page
        
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