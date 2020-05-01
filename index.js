/* Your Code Here */

function createEmployeeRecord(arr) {
    return {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(employees) {
    return employees.map(employee => createEmployeeRecord(employee))
}

function createTimeInEvent(dateString) {
    let timeOut = {
        type: "TimeIn",
        date: dateString.split(" ")[0],
        hour: parseInt(dateString.split(" ")[1], 10)
    }
    this.timeInEvents.push(timeOut)
    return this
}

function createTimeOutEvent(dateString) {
    let [date, hour] = dateString.split(" ")
    this.timeOutEvents.push({
        type: "TimeOut",
        date,
        hour: parseInt(hour, 10)
    })
    return this
}

function hoursWorkedOnDate(date) {
    let timeIn = this.timeInEvents.find(event => event.date === date)
    let timeOut = this.timeOutEvents.find(event => event.date === date)
    return (timeOut.hour - timeIn.hour) / 100
}

function wagesEarnedOnDate(date) {
    let hours = hoursWorkedOnDate.call(this, date)
    return hours * this.payPerHour
}

function calculatePayroll(employees) {
    return employees.reduce((memo, employee) => memo + allWagesFor.call(employee), 0)
}

function findEmployeeByFirstName(employees, firstName) {
    return employees.find(employee => employee.firstName === firstName)
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}
