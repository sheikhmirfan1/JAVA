'use strict';

// * Control Flow
/* The control flow is the order in which the computer executes statements in a script.
Code is run in order from the first line in the file to the last line, unless the computer runs across the (extremely frequent) structures that change the control flow, such as conditionals and loops.
*/

// * Sequencing - execute one by one

let salaryPerMonth = 10000;
let numberOfMonthsInYear = 12;
let annualCompensation = salaryPerMonth * numberOfMonthsInYear;

console.log('\n----------Sequence----------');
console.log(annualCompensation);

// * SELECTION

let customersCar = 'Bugatti';

console.log('\n----------Selection----------');

if (customersCar === 'Ferrari') {
  console.log('Nobody likes it.');
} else if (customersCar === 'Porsche') {
  console.log('Alex will take one.');
} else if (customersCar === 'Volvo') {
  console.log('Call Marla right now.');
} else if (customersCar === 'Lada') {
  console.log(`Vlada wouldn't mind`);
} else {
  console.log('All other cars belong to Sheikh because he is the prince.');
}

// indexofAgesInArray
// * Iteration
console.log('\n----------ITERATION----------');
let ages = [25, 37, 30, 44, 32, 43, 31, 46, 25];
console.log(ages[9]);
console.table(ages[1] + 1);
console.table(ages);
console.log(ages.length);

for (let index = 0; index < ages.length; index++) {
  //   console.log(index);
  console.log(ages[index] + 1);
}

const studentInfo = [
  { name: 'Alex', age: 25 },
  { name: 'Ben', age: undefined },
  { name: 'Hadi', age: 37 },
  { name: 'Marla', age: 30 },
  { name: 'Paul', age: 44 },
  { name: 'Samuel', age: 32 },
  { name: 'Sheik', age: 43 },
  { name: 'Vlada', age: 31 },
  { name: 'Wara', age: 46 },
  { name: 'Leon', age: 25 },
];

console.log('\n----------forEach()----------');

let addOneToAllAges = studentInfo
  .filter((item) => typeof item.age === 'number')
  .forEach((item) => {
    //   console.log(item);
    console.log(item.age + 1);
  });

console.log('\n----------ROUTINES(Functions)----------');

let personA = 'Marla';
let personB = 'Vlada';

let greetingA = `Good day ${personA}`;
let greetingB = `Good day ${personB}`;

console.log(greetingA);
console.log(greetingB);

function greetPerson(name) {
  return `Good day ${name}`;
}

console.log('\n----------Function call----------');
console.log(greetPerson('Ben'));
console.log(greetPerson('Samuel'));

let addTwoNumbers = function (numOne, numTwo) {
  return numOne + numTwo;
};

console.log('\n----------Function call----------');
console.log(addTwoNumbers(5, 5));
console.log(addTwoNumbers(12, 8));

const addition = (...numbers) => {
  let sum = numbers.reduce(
    (firstNumber, secondNumber) => firstNumber + secondNumber
  );
  return sum;
};

console.log('\n----------Function call----------');
console.log(addition(5, 5, 4, 6, 8, 9, 9));
console.log(addition(5, 5, 4, 6, 8, 9, 9, 12, 46));
