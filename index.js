/* Your Code Here */
function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
    return {
        firstName: firstName, 
        familyName: familyName,
        title: title,
        payPerHour: payPerHour,
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(arraryOfArrays) {
    const arrayOfObjects = arraryOfArrays.map(employeeArray => 
        createEmployeeRecord(employeeArray));
    return arrayOfObjects
}

function createTimeInEvent(dateStamp) {
    const d = dateStamp.split(/\s/);
    const date = d[0];
    const hour =parseInt(d[1]);
        this.timeInEvents.push({
        type: "TimeIn",
        hour: hour,
        date: date
        })
    return this
}

function createTimeOutEvent(dateStamp) {
    const d = dateStamp.split(/\s/);
    const date = d[0];
    const hour =parseInt(d[1]);
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: hour,
        date: date
        })
    return this
}

function hoursWorkedOnDate(d) {
    const startTime = this.timeInEvents.find(event => event.date === d);
    const endTime = this.timeOutEvents.find(event => event.date === d);
    const hoursWorked = (endTime.hour - startTime.hour) / 100;
    return hoursWorked
}

function wagesEarnedOnDate(d) {
    const payOwed = parseInt(this.payPerHour) * hoursWorkedOnDate.call(this, d);
    return payOwed
}

function findEmployeeByFirstName(srcArray, firstName) {
    let employee;
    employee = srcArray.find(employeeObject => employeeObject.firstName === firstName)
    return employee
}

function calculatePayroll(employeesArray) {
    function getSum(total, num) {
        return total + num;
      }
    const sumOfPay = employeesArray.map(employee => allWagesFor.apply(employee))
    return sumOfPay.reduce(getSum)
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