module.exports = function (mongoose) {
    mongoose.connect("mongodb://localhost:27017/CalendarApp", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}