const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose")

const eventSchema = new mongoose.Schema({
    eventName: String,
    eventDetails: String,
    creatorUname: String,
    creationDay: Number,
    creationMonth: String,
    creationYear: Number
})

const Event = new mongoose.model("Event", eventSchema);

module.exports = Event;