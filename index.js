function createEmployeeRecord(employeeData){
    let employee = {};
        employee.firstName = employeeData[0]
        employee.familyName = employeeData[1]
        employee.title = employeeData[2]
        employee.payPerHour = employeeData[3]
        employee.timeInEvents = [] 
        employee.timeOutEvents = []
    return employee;
}

function createEmployeeRecords(secondData){
    let employees = [];
    for (let i = 0; i < secondData.length; i++){
        let employeeDataArray = secondData[i]
        let employee = createEmployeeRecord(employeeDataArray)
        employees.push(employee)
    }   
    return employees
}

function createTimeInEvent(employee, dateStamp){  
    let dateStamp.split(""); 
    let date = dateStamp[0];
    let hour = dateStamp[1];
        console.log(date)
    return `${employee.firstName} ${employee.lastName} ${dateStamp}`
  }

function createTimeOutEvent(employee, dateStamp){
    return `${employee.firstName} ${employee.lastName} ${dateStamp}`
}

