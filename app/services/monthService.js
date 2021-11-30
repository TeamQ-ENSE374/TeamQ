const Month = require('../models/month')

const fetchMonth = async (monthID) => {
    var month;
    await Month.find({_id: monthID}).then(currMonth => {
        month = currMonth;
    });
    return month;
}

const fetchAll = async () => {
    return await Month.find();
}

const addMonth = async (monthID, startDay, endDate, month, year) => {
    var toInsert = new Month({_id: monthID, startDayOfWeek: startDay, endOfMonthDate: endDate, monthName: month, monthYear: year});
    toInsert.save();
}


module.exports = {
    fetchMonth,
    addMonth,
    fetchAll
}
