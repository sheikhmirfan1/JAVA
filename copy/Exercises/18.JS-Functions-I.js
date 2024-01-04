"use strict";
/*
 1. Create a function that accepts two arguments for the operations below:
    Addition: function addTwoNumbers()
    Subtraction: function subtractTwoNumbers()
    Multiplication: function multiplyTwoNumbers()
    Division: function divideTwoNumbers()
2. Create a function called greetCustomer which accepts 3 arguments (customerName, customerAccountBalance, lastTransactionUpdate) and prints the following when called:
    Function call example: greetCustomer(‘Markus’, ‘1.000.000’, ‘20.03.2023’ )
    Expected output: Good morning Markus, Your current account balance is €1.000.000. Your last transaction was on the 23.03.2023.
3. Create a function that calculates the volume of a cube.
4. Create a function that accepts a web developer’s hourly rate and returns their weekly, monthly, and yearly income in the form of a 2D array. Expected output: [[‘Weekly’, 2000], [‘Monthly’, 8000], [‘Yearly’, 104000]].
​5. ​Create a function which calculates how old a dog is in dog years. The function should accept one argument that is the dog's age in human years. Calculate the dog's age in dog years based on the calculation of 1 human year = 7 dog years.
6. Create a function that accepts two arguments (a starting number and an ending number) and carries out the following operation:
    For numbers divisible by 3 between the stipulated range, the program should print Fizz
    For numbers divisible by 5, the program should print Buzz
    For numbers divisible by both 3 and 5, the program should print FizzBuzz
 */

//Q1
//Addition (+)
function addTwoNumbers(x, y) {
    return x + y;
}
// let output = addTwoNumbers(5, 5);
// console.log(output);
console.log(addTwoNumbers(6, 6)); // 12

//Subtraction (-)
function subtractTwoNumbers(x, y) {
    return x - y;
}
console.log(subtractTwoNumbers(6,6)); // 0

//Multiplication (*)
function multiplyTwoNumbers(x, y) {
    return x * y;
}
console.log(multiplyTwoNumbers(6,6)); // 36

//Division (/)
function divideTwoNumbers(x, y) {
    return x / y;
}
console.log(divideTwoNumbers(6,6)); //1

//Q2
function greetCustomer(customerName, customerAccountBalance, lastTransactionUpdate){
    let outputString = `Good morning ${customerName}, Your current account balance is €${customerAccountBalance}. Your last transaction was on the ${lastTransactionUpdate}.`;
    return outputString;
}
console.log(greetCustomer("Salma", 83927434934, "13.12.2023"));

//Q3 
function volumeOfCube(a) {
    let v = Math.pow(a, 3); // a to the power of 3 - formula for vol of cube
    return v;
}
console.log(volumeOfCube(5)); // 5 * 5 * 5

//Q4 - output example: [[‘Weekly’, 2000], [‘Monthly’, 8000], [‘Yearly’, 104000]]
function webDeveloperIncome(hourlyRate) {
    //Using variables
    let weeklyIncome = hourlyRate * 40; // Assuming the developer works 40 hours in the week (8 hrs a day, 5 days a week)
    let monthlyIncome = weeklyIncome * 4; // Assume 4 weeks in a month
    let yearlyIncome = monthlyIncome * 12; // Assume 12 months of working

    //Using arrays and array methods 
    // let weeklyIncome = ["Weekly", hourlyRate * 40]; // Assuming the developer works 40 hours in the week (8 hrs a day, 5 days a week)
    // let monthlyIncome = ["Monthly", weeklyIncome[1] * 4]; // Assume 4 weeks in a month
    // let yearlyIncome = ["Yearly", monthlyIncome[1] * 12]; // Assume 12 months of working
    // let output = [];
    // output.push(weeklyIncome, monthlyIncome, yearlyIncome);

    let output = [["Weekly", weeklyIncome],["Monthly", monthlyIncome],["Yearly", yearlyIncome]];
    return output;
}
console.log(webDeveloperIncome(100));
console.log(webDeveloperIncome(40));

//Q5 - 1 human year = 7 dog years
function humanToDogYears(humanYears){ // based on 12 months - human concept of a year
    let dogYears = humanYears * 7;
    return dogYears;
}
console.log(humanToDogYears(7));
console.log("Eddy: ", humanToDogYears(12)); // Eddy is 84 years is he was a human

//Q6 
function fizzBuzz(startNum, endNum) {
    for (let i = startNum; i <= endNum; i++){
    if(i % 3 === 0 && i % 5 === 0) {
        console.log(i + ": FizzBuzz");
    } else if(i % 5 === 0) {
        console.log(i + ": Buzz");
    } else if (i % 3 === 0){
        console.log(i + ": Fizz");
    } else {
        console.log ("Paul is a clown") // the number is not divisible by 3 or 5
    }
    }
}
fizzBuzz(5, 10);