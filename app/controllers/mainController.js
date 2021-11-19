const eventService = require('../services/eventService');

const main = async (req, res) => {

    const successPath = "calendar"
    const failurePath = "/auth"

    if (req.isAuthenticated()) {
        //After user is authenticated, we need to:
        //  1. Fetch all events for that user
        //  2. render the calendar view and add the events as input
        //  3. If the fetch fails, we will render the calendar view without the events
        //      and ask the user to reload the page
        try {
            const events = await eventService.fetchEvents(req.session.uname)
            res.render(successPath, {
                username: req.session.uname,
                events: events
            })
        } catch (err) {
            console.log('mainController-error: ' + err)
            res.render(successPath, {
                username: req.session.uname,
                events: events
            })
        }
    } else {
        console.log("mainController: User is not authenticated")
        res.redirect(failurePath)
    }
}

const addEvent = async (req, res) => {
    const {
        date,
        eventName,
        eventDetails
    } = req.body

    let event = new Event({
        date: date,
        eventName: eventName,
        eventDetails: eventDetails,
        creatorUname: req.session.uname
    })

    //Whether this operation fails or succeeds, we will redirect to '/'
    const path = '/'

    try {
        await eventService.addEvent(event)
        res.redirect(path)
    } catch (err) {
        console.log('mainController-error: ' + err)
        res.redirect(path)
    }
}

const updateEvent = async (req, res) => {
    const {
        date,
        eventName,
        eventDetails,
        eventID
    } = req.body

    let event = new Event({
        date: date,
        eventName: eventName,
        eventDetails: eventDetails,
        creatorUname: req.session.uname
    })

    //Whether this operation fails or succeeds, we will redirect to '/'
    const path = '/'

    try {
        await eventService.updateEvent(eventID, event)
        res.redirect(path)
    } catch (err) {
        console.log('mainController-error: ' + err)
        res.redirect(path)
    }
}

const deleteEvent = async (req, res) => {
    const eventID = req.body

    //Whether this operation fails or succeeds, we will redirect to '/'
    const path = '/'

    try {
        await eventService.deleteEvent(eventID)
        res.redirect(path)
    } catch (err) {
        console.log('mainController-error: ' + err)
        res.redirect(path)
    }
}

const inviteFriendsToEvent = (req, res) => {

}

module.exports = {
    main,
    addEvent,
    updateEvent,
    deleteEvent,
    inviteFriendsToEvent
}