const Month = require('../models/month')

const fetchMonth = async (monthID) => {
    
    const filter = { _id: monthID }

    try {
        const month = await Month.find(filter)
        console.log("monthService: Successfully fetched month")
        return month
    } catch (e) {
        console.log("monthService-error: Successfully fetched month")
        console.log("monthService-error: " + e)
        throw e
    }
}

const fetchAll = async () => {

    try {
        const months = await Month.find();
        console.log("monthService: Successfully fetched all months")
        return months
    } catch (e) {
        console.log("monthService-error: Failed to fetch all months")
        console.log("monthService-error: "+ e)
        throw e
    }
}

const addMonth = async (monthID, startDay, endDate, month, year) => {

    var toInsert = new Month({
        _id: monthID,
        startDayOfWeek: startDay,
        endOfMonthDate: endDate,
        monthName: month,
        monthYear: year
    });
    
    try {
        await toInsert.save();
        console.log("Successfully added month")
    } catch (e) {
        console.log("monthService-error: Failed to add month")
        console.log("monthService-error: " + e)
    }
}


module.exports = {
    fetchMonth,
    addMonth,
    fetchAll
}