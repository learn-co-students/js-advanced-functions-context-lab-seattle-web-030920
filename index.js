/* Your Code Here */

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

function calculatePayroll(employees)
{
     function payroll(total, employee){
         total = total + allWagesFor.call(employee);
         return total
     }
     let payrollTotal = employees.reduce(payroll, 0);
     console.log(payrollTotal)
     return payrollTotal
}

// function calculatePayroll(employees)
// {
//      function payroll(total, employee){
//          total = total + allWagesFor(employee);
//          return total
//      }
//      let payrollTotal = employees.reduce(payroll, 0);
//      console.log(payrollTotal)
//      return payrollTotal
// }

function createEmployeeRecord( userData )
{
    return {firstName: userData[0], 
        familyName: userData[1], 
        title: userData[2], 
        payPerHour: userData[3], 
        timeInEvents: [], 
        timeOutEvents: [] 
        }
}

function createEmployeeRecords(employees)
{
    return employees.map(function(employee) { return new createEmployeeRecord(employee) } )    
}

let createTimeInEvent = function(dateStamp)
{    
    let parsedDate = dateStamp.split(" ");
    let timeIn = {type: "TimeIn", hour: parseInt(parsedDate[1]), date: parsedDate[0]}
    this.timeInEvents.push(timeIn);
    return this
}

let createTimeOutEvent = function (dateStamp)
{
    //"YYYY-MM-DD 800"
    let parsedDate = dateStamp.split(" ");
    let timeOut = {type: "TimeOut", hour: parseInt(parsedDate[1]), date: parsedDate[0]}
    this.timeOutEvents.push(timeOut);
    return this
}

let hoursWorkedOnDate = function (dateStamp)
{   
    function dateToFind(date){ return date.date === dateStamp}
    let parsedDate = dateStamp.split(" ");
    let checkIn = this.timeInEvents.find(dateToFind);
    let checkOut = this.timeOutEvents.find(dateToFind);    
    return (checkOut.hour - checkIn.hour)/100
}

let wagesEarnedOnDate = function (dateStamp)
{    
    return this.payPerHour * hoursWorkedOnDate.call(this, dateStamp)
}

function findEmployeeByFirstName(srcArray, firstName)
{
    return srcArray.find(employee => employee.firstName === firstName);    
}