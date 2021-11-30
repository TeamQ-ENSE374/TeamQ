const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const monthSchema = new mongoose.Schema({
    //_id should be of the format : monthNumber + monthYear
    //eg: Jan 2022 should have _id = 012022
    // For startDay - We start counting the week from monday
    //So if Jan 2022 has a start day of saturday, we should pass 6 into the startDayOfWeek
    _id : Number,
    startDayOfWeek: Number,
    endOfMonthDate: Number,
    monthName: String,
    monthYear: Number
});

const Month = new mongoose.model("Month", monthSchema);

module.exports = Month;