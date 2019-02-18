// Problem: You have been asked to create a program called “payroll_calc.js”, that computes and displays paycheck information for employees.
// The program should compute the gross pay. After it has computed the gross pay, it should deduct three
// types of income tax withholding – federal (at a rate of 15%), state (at 3.4%), and county (at 1.1%) – as well as the amount of the employee’s medical insurance deduction.
// Finally, the program should total the deductions and calculate the net pay, and display all this information, including the employee’s name. Use the following values:
// First Name: Meredith
// Last Name: Fitch
// Hours Worked: 40
// Hourly Wage Rate: $15.50
// Medical Insurance Deduction: $55.00


var firstName = "Meredith"
var lastName = "Fitch"
var hours = 40
var wageRate = 15.50
var insurance = 55
var grossWage = hours * wageRate - insurance
var federal = .15 * grossWage
var state = .034 * grossWage
var local = .011 * grossWage

var netPay = grossWage - federal - state - local


console.log(firstName,lastName, '\n' +
            'Total hours worked: ' + hours + '\n' +  
            'Rate: $' + wageRate + '\n' +
            'Insurance Deduction: $' + insurance + '\n' +
            'Federal Tax: $' + federal +  '\n' +
            'State Tax: $' + state + '\n' +
            'Local Tax: $' + local + '\n' +
            'Gross Pay: $' + Math.round(netPay)
);

