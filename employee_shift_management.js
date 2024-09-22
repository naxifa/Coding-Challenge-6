
// Task 1 - Creating an Employees Array of Employee Objects

const employees = [

    { name: 'John', shifts: [{ day: 'Monday', hours: 8 }, { day: 'Wednesday', hours: 6 }] },
    { name: 'Sara', shifts: [{ day: 'Tuesday', hours: 5 }, { day: 'Thursday', hours: 7 }] },
    { name: 'David', shifts: [{ day: 'Monday', hours: 8 }] },
    { name: 'Emily', shifts: [{ day: 'Friday', hours: 8 }] }
 ];

 console.log(employees); // Array of employee shift details


 // Task 2 - Creating a Function to Display Employee Shift Details 

 function displayEmployeeShifts (employee) {

    let shiftDetails = employee.shifts.map(shift => `${shift.day}: ${shift.hours} hours`);

    // Logging results with employee name and shift details
    console.log(`Shifts for ${employee.name}: ${shiftDetails}`)}; 

// Calling function to display employee shifts
employees.forEach(displayEmployeeShifts); 
 
 

// Task 3 - Creating a Function to Assign a New Shift

function assignShift (employeeName,day,hours) {

// Looking for employee by their name
let employee = employees.find(employee => employee.name === employeeName); 

// Checking if employee name matches or not, if not then error messagae will be displayed
if (!employee) {
    console.log(`Employee ${employeeName} not found.`);
}
// Looking for already assigned shifts 
let existingShift = employee.shifts.some(shift => shift.day === day);
if (existingShift) {
    console.log(`${employeeName} is already assigned a shift on ${day}.`);

} else {
    // If no shift is assigned on that day, this will assign the new shift
    employee.shifts.push({ day, hours });
    console.log(`Assigned ${hours} hours on ${day} to ${employeeName}.`);
}
}
// Assigning extra shift to David
assignShift("David", "Monday", "4");
assignShift("David", "Tuesday", "5");



// Task 4 - Creating a Function to Calculate Total Hours Worked

function calculateTotalHours (employee) {

    // Calculating total hours
    let totalHours = employee.shifts.reduce((sum,shift) => sum + shift.hours, 0);

    console.log(`${employee.name} - Worked ${totalHours} hours this week`);
    return totalHours;
}
let employee = employees.find(employee => employee.name === "John");  // Calling the function
if (employee) {

    calculateTotalHours(employee);
}


// Task 5 - Creating a Function to List Employees with Free Days

function listAvailableEmployees (day) {

     // Filtering employees who do not have a shift on the given day
     let availableEmployees = employees.filter(employee => !employee.shifts.some(shift => shift.day === day)
    );

    // If the filtered array is empty, log an error message
    if (availableEmployees.length === 0) {
        console.log(`No employees available on ${day}`);
    } else {
        console.log(`Employees available on ${day}:`);
        availableEmployees.forEach(employee => {
             console.log(employee.name);
        });
    }
}

// Calling the function
listAvailableEmployees("Monday");  

