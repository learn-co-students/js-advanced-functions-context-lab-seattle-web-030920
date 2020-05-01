/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

function createEmployeeRecord ([firstname, familyname, title, pph]) {
    return {
        firstName: firstname,
        familyName: familyname,
        title: title,
        payPerHour: pph,
        timeInEvents: [],
        timeOutEvents: []}
}

function createEmployeeRecords (AoA){
    return AoA.map(createEmployeeRecord)
}

function createTimeInEvent (date){
    let timeObject= {
        type: "TimeIn",
        hour: parseInt(date.split(" ")[1]),
        date: date.split(" ")[0]
    }
    this.timeInEvents.push(timeObject)
    return this
}

function createTimeOutEvent (date){
    let timeObject= {
        type: "TimeOut",
        hour: parseInt(date.split(" ")[1]),
        date: date.split(" ")[0]
    }
    this.timeOutEvents.push(timeObject)
    return this
}

function hoursWorkedOnDate(date) {
    let timein= this.timeInEvents.find(timeObject=> timeObject.date==date)
    let timeout= this.timeOutEvents.find(timeObject=> timeObject.date==date)
    return (timeout.hour-timein.hour)/100
}

function wagesEarnedOnDate(date) {
    return hoursWorkedOnDate.call(this, date)*this.payPerHour
}

let allWagesFor = function(){
    let eligibleDates = this.timeInEvents.map(function(e){
        return e.date
    })

    let payable = eligibleDates.reduce(function(memo, d){
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0)

    return payable
}

function findEmployeeByFirstName (srcArray, firstName){
    return srcArray.find(emp=> emp.firstName===firstName)
}

function calculatePayroll (srcArray){
    return srcArray.reduce((sum, emp)=> sum+allWagesFor.call(emp),0)
}