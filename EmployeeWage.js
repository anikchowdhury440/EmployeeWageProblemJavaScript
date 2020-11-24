const isPresent = 1;
const wagePerHour = 20;

let empHrs = 0, empWage;

let empCheck = Math.floor(Math.random() * 10) % 2;

if(empCheck == isPresent) 
    empHrs = 8;

empWage = empHrs * wagePerHour;

console.log("Employee Wage:", empWage);
