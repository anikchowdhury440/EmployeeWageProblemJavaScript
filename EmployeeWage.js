const isFullTime = 1;
const isPartTime = 2;
const wagePerHour = 20;
const maxWorkingDays = 20;
const maxWorkingHrs = 100;

let empHrs = 0; 
let empWage; 
let monthlyWage = 0;
let totalWorkingDays = 0;
let totalWorkingHrs = 0;

const getWorkHrs = empCheck => {

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

    return empHrs;
}

while(totalWorkingHrs < maxWorkingHrs && totalWorkingDays < maxWorkingDays) { 
    totalWorkingDays ++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs = getWorkHrs(empCheck);
    totalWorkingHrs += empHrs;
}

monthlyWage = totalWorkingHrs * wagePerHour;

console.log("Employee Monthly Wage:", monthlyWage);