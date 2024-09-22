
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

    console.log(`Shifts for ${employee.name}: ${shiftDetails}`)};

employees.forEach(displayEmployeeShifts);
 
 