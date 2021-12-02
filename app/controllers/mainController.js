const eventService = require('../services/eventService');
const monthService = require('../services/monthService');

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

            /* The following addMonth service calls are for one time use
            comment them out once the database is created and there is 2 month data 
            pre-fetched in it
            */

            // await monthService.addMonth(122021, 3, 31, "December", 2021);
            // await monthService.addMonth(12022, 6, 31, "January", 2022);

            const month = await monthService.fetchAll();

            res.render(successPath, {
                username: req.session.uname,
                events: events,
                months: month,
            })
        } catch (err) {
            console.log('mainController-error: ' + err)
            res.render(successPath, {
                username: req.session.uname,
                events: events,
                months: month
            })
        }
    } else {
        console.log("mainController: User is not authenticated")
        res.redirect(failurePath)
    }
}

const weekly = async (req, res) => {
    const successPath = "weeklyCalendar"
    const failurePath = "/auth"

    console.log("month: " + req.query.month)
    console.log("year: " + req.query.year)
    console.log("dayNumber: " + req.query.dayNumber)

    if (req.isAuthenticated()) {
        //After user is authenticated, we need to:
        //  1. Fetch all events for that user
        //  2. render the calendar view and add the events as input
        //  3. If the fetch fails, we will render the calendar view without the events
        //      and ask the user to reload the page
        try {
            const events = await eventService.fetchEvents(req.session.uname)

            /* The following addMonth service calls are for one time use
            comment them out once the database is created and there is 2 month data 
            pre-fetched in it
            */

            // await monthService.addMonth(122021, 3, 31, "December", 2021);
            // await monthService.addMonth(12022, 6, 31, "January", 2022);

            const month = await monthService.fetchAll();
            const dateString = req.query.month + " " + req.query.dayNumber + ", " + req.query.year
            var date = new Date(dateString)
            console.log("Date: " + date)
            console.log("Day of week: " + date.getDay())


            // <a href="/weekly?month=<%=month.monthName%>&year=<%=month.monthYear%>&dayNumber=<%=count%>">
            //                     <button class='dot'></button>
            //                 </a>

            var startDay = parseInt(req.query.dayNumber)
            var endDay = startDay + 6
           
            const dayNumber = parseInt(req.query.dayNumber)

            if (date.getDate() == 0) { //Sunday
                startDay = dayNumber - 6
                endDay = dayNumber

            } else if (date.getDay() == 1) { //Monday
                startDay = dayNumber
                endDay = dayNumber + 6

            } else if (date.getDay() == 2) { //Tuesday
                startDay = dayNumber - 1
                endDay = dayNumber + 5

            } else if (date.getDay() == 3) { // Wednesday
                startDay = dayNumber - 2
                endDay = dayNumber + 4

            } else if (date.getDay() == 4) { //Thursday
                startDay = dayNumber - 3
                endDay = dayNumber + 3

            } else if (date.getDay() == 5) { //Friday
                startDay = dayNumber - 4
                endDay = dayNumber + 2

            } else if (date.getDay() == 6) { //Saturday
                startDay = dayNumber - 5
                endDay = dayNumber + 1
            }

            console.log('weekStart: ' + startDay)
            console.log('weekEnd: ' + endDay)

            res.render(successPath, {
                username: req.session.uname,
                month: req.query.month,
                year: req.query.year,
                weekStartDay: startDay,
                weekEndDay: endDay
            })
        } catch (err) {
            console.log('mainController-error: ' + err)
            res.render(successPath)
        }
    } else {
        console.log("mainController: User is not authenticated")
        res.redirect(failurePath)
    }
}

const weekly2 = async (req, res) => {
    const successPath = "weeklyCalendar"
    const failurePath = "/auth"

    // console.log("month: " + req.query.month)
    // console.log("year: " + req.query.year)
    // console.log("dayNumber: " + req.query.dayNumber)

    if (req.isAuthenticated()) {
        //After user is authenticated, we need to:
        //  1. Fetch all events for that user
        //  2. render the calendar view and add the events as input
        //  3. If the fetch fails, we will render the calendar view without the events
        //      and ask the user to reload the page
        try {
            const events = await eventService.fetchEvents(req.session.uname)

            /* The following addMonth service calls are for one time use
            comment them out once the database is created and there is 2 month data 
            pre-fetched in it
            */

            // await monthService.addMonth(122021, 3, 31, "December", 2021);
            // await monthService.addMonth(12022, 6, 31, "January", 2022);

            const month = await monthService.fetchAll();
            //const dateString = req.query.month + " " + req.query.dayNumber + ", " + req.query.year
            var date = new Date()
            console.log("Date: " + date)
            console.log("Day of week: " + date.getDay())

            // <a href="/weekly?month=<%=month.monthName%>&year=<%=month.monthYear%>&dayNumber=<%=count%>">
            //                     <button class='dot'></button>
            //                 </a>

            var startDay = parseInt(date.getDate())
            var endDay = startDay + 6
           
            const dayNumber = startDay

            if (date.getDate() == 0) { //Sunday
                startDay = dayNumber - 6
                endDay = dayNumber

            } else if (date.getDay() == 1) { //Monday
                startDay = dayNumber
                endDay = dayNumber + 6

            } else if (date.getDay() == 2) { //Tuesday
                startDay = dayNumber - 1
                endDay = dayNumber + 5

            } else if (date.getDay() == 3) { // Wednesday
                startDay = dayNumber - 2
                endDay = dayNumber + 4

            } else if (date.getDay() == 4) { //Thursday
                startDay = dayNumber - 3
                endDay = dayNumber + 3

            } else if (date.getDay() == 5) { //Friday
                startDay = dayNumber - 4
                endDay = dayNumber + 2

            } else if (date.getDay() == 6) { //Saturday
                startDay = dayNumber - 5
                endDay = dayNumber + 1
            }

            console.log('weekStart: ' + startDay)
            console.log('weekEnd: ' + endDay)

            var thisMonth = ""

            if(date.getMonth() == 11) {
                thisMonth = 'Dec'
            }
            console.log('year: ' + date.getFullYear())
            res.render(successPath, {
                username: req.session.uname,
                month: thisMonth,
                year: date.getFullYear(),
                weekStartDay: startDay,
                weekEndDay: endDay
            })
        } catch (err) {
            console.log('mainController-error: ' + err)
            res.render(successPath)
        }
    } else {
        console.log("mainController: User is not authenticated")
        res.redirect(failurePath)
    }
}

const event = async (req, res) => {
    const successPath = "eventView"
    const failurePath = "/auth"

    if (req.isAuthenticated()) {
        //After user is authenticated, we need to:
        //  1. Fetch all events for that user
        //  2. render the calendar view and add the events as input
        //  3. If the fetch fails, we will render the calendar view without the events
        //      and ask the user to reload the page
        try {
            const events = await eventService.fetchEvents(req.session.uname)

            /* The following addMonth service calls are for one time use
            comment them out once the database is created and there is 2 month data 
            pre-fetched in it
            */

            // await monthService.addMonth(122021, 3, 31, "December", 2021);
            // await monthService.addMonth(12022, 6, 31, "January", 2022);
            res.render(successPath, {
                username: req.session.uname,
                events: events,
                month: req.body.month,
                dayNumber: req.body.dayNumber,
                year: req.body.year

            })
        } catch (err) {
            console.log('mainController-error: ' + err)
            res.render(successPath)
        }
    } else {
        console.log("mainController: User is not authenticated")
        res.redirect(failurePath)
    }
}

const addEvent = async (req, res) => {
    const {
        eventName,
        eventDetails,
        creationDay,
        creationMonth,
        creationYear,
        timeStart,
        timeEnd
    } = req.body

    //Whether this operation fails or succeeds, we will redirect to '/'
    const path = '/'

    try {
        await eventService.addEvent(eventName, eventDetails, req.session.uname, creationDay, creationMonth, creationYear, timeStart, timeEnd)
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
    weekly,
    weekly2,
    event,
    addEvent,
    updateEvent,
    deleteEvent,
    inviteFriendsToEvent
}