const isFullTime = 1;
const isPartTime = 2;
const wagePerHour = 20;

let empHrs = 0, empWage;

let empCheck = Math.floor(Math.random() * 10) % 3;

switch(empCheck) {
    case isFullTime:
        empHrs = 8;
        break;
    case isPartTime:
        empHrs = 4;
        break;
    default :
        empHrs = 0;
}

empWage = empHrs * wagePerHour;

console.log("Employee Wage:", empWage);
