const Event = require('../models/event')

const addEvent = async (eventName, eventDetails, creatorUname, creationDay, creationMonth, creationYear) => {
    
    try {
        console.log(creationYear);
        var ev = new Event({
            eventName: eventName,
            eventDetails: eventDetails,
            creatorUname: creatorUname,
            creationDay : creationDay,
            creationMonth: creationMonth,
            creationYear: creationYear
        });
        ev.save();
        console.log("eventService: Successfully added a new event")
    } catch (e) {
        console.log("eventService-error: failed to add new event")
        console.log('eventService-error: ' + e)
        throw e
    }
}

const fetchEvents = async (uname) => {

    const filter =  { username: uname }

    try {
        const events = await Event.find(filter)
        return events
    } catch (e) {
        console.log('eventService-error: ' + e)
        throw e
    }
}

const updateEvent = async (eventID, updatedEvent) => {

    const filter = { _id: eventID }

    try {
        const event = await Event.find(filter)
        event = updatedEvent 
        await event.save()
        console.log('eventService: Successfully updated event with id: ' + eventID)
    } catch (e) {
        console.log('eventService-error: Failed to updated event with id: ' + eventID)
        console.log("eventService-error: " + e)
        throw e
    }
}

const deleteEvent = async (eventID) => {

    const filter = { _id: eventID }
    
    try {
        await Event.deleteOne(filter);
        console.log("eventService: Succesfully deleted event with id: " + e)
    } catch (e) {   
        console.log("eventService-error: Failed to delete event with id: " + eventID)
        console.log("eventService-error: " + e)
        throw e
    }
}

module.exports = {
    addEvent,
    fetchEvents,
    updateEvent,
    deleteEvent
}