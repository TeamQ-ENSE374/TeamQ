const Event = require('../models/event')

const addEvent = async (event) => {
    try {
        await event.save()
    } catch (e) {
        console.log('eventService-Error: ' + e)
        throw e
    }
}

const fetchEvents = async (uname) => {

    const filter =  {username: uname}

    try {
        const events = await Event.find(filter)
        return events
    } catch (e) {
        console.log('eventService-Error: ' + e)
        throw e
    }
}

const updateEvent = async (eventID, event) => {


    try {

    } catch (e) {

    }
}

const deleteEvent = async (eventID) => {
    
    try {

    } catch (e) {

    }
}

module.exports = {
    addEvent,
    fetchEvents,
    updateEvent,
    deleteEvent
}