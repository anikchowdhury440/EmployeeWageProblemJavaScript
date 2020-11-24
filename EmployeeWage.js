const isFullTime = 1;
const isPartTime = 2;
const wagePerHour = 20;

let empHrs = 0, empWage;

let empCheck = Math.floor(Math.random() * 10) % 3;

if(empCheck == isFullTime) 
    empHrs = 8;
else if(empCheck == isPartTime)
    empHrs = 4;
else
    empHrs = 0;

empWage = empHrs * wagePerHour;

console.log("Employee Wage:", empWage);
