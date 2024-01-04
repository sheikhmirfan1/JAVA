'use strict';

// * NULL
let bobsYourUncle = null;

const customerData = {
  name: 'Paul',
  occupation: 'Web Developer',
  age: 32,
  email: 'paul.paul@gmail.com',
  phoneNumber: null,
  address: undefined,
};

// * UNDEFINED
let paulsCar;
console.log('\n----------Undefined----------');
console.log(paulsCar);
paulsCar = undefined;

let numOne = null;
let numTwo = undefined;
let sum = numOne + numTwo;
console.log('typeof numOne:', typeof numOne);
console.log('typeof numTwo:', typeof numTwo);

console.log(sum);
console.log('typeof sum:', typeof sum);
console.log(typeof NaN === 'number');

let integer = 10;
let float = 9.99;

// Type conversion

let string = 'Vlada has a 22 cat.';
let stringifiedNumber = '456';

//convert string to number
console.log('\n----------Type Conversion----------');
console.log(Number(string));
console.log(Number(stringifiedNumber));

let getIndexOfString = string.match('22');
console.log(getIndexOfString);

let getNumberFromString = string.substring(12, 14);
console.log(getNumberFromString);

let convertStringToNumber = parseInt(getNumberFromString);
console.log(convertStringToNumber);
