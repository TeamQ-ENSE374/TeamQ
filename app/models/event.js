const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose")

const eventSchema = new mongoose.Schema({
    date: String,
    eventName: String,
    eventDetails: String,
    creatorUname: String
})

const Event = new mongoose.model("Event", eventSchema)

module.exports = Event