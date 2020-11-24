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

let empDailyWage = new Map();

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

const calculateWage = hours => hours * wagePerHour;

while(totalWorkingHrs < maxWorkingHrs && totalWorkingDays < maxWorkingDays) { 
    totalWorkingDays ++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs = getWorkHrs(empCheck);
    empDailyWage.set(totalWorkingDays, calculateWage(empHrs));
    totalWorkingHrs += empHrs;
}

monthlyWage = calculateWage(totalWorkingHrs);

console.log("Daily Wage List");
empDailyWage.forEach((value, key) => {
    console.log("Day", key, ":", value);
});

console.log("Employee Monthly Wage:", monthlyWage);