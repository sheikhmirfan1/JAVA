'use strict';

// name = 'Vlada';
// console.log(name);
// Throws reference error due to strict mode

// * JS Operators

// ASSIGNMENT OPERATOR (=)
let age = 12;

// EQUALITY OPERATOR (==)
console.log('EQUALITY (==):', '1' == 1);

// STRICT EQUALITY
console.log('STRICT EQUALITY (===):', '1' === 1);

// INEQUALITY (!=)
console.log('INEQUALITY (!=):', '1' != 1);

// STRICT INEQUALITY (!==)
console.log('STRICT INEQUALITY (!==):', '1' !== 1);

// LOGICAL AND (&&)
let customerOneAge = 25;
let customerTwoAge = 30;
console.log('LOGICAL AND (&&):', customerOneAge > 40 && customerTwoAge < 28);

// LOGICAL OR (||)
let timeOfDay = 1500;
let exerciseCompleted = true;
console.log(
  'LOGICAL OR (||):',
  timeOfDay === 1600 || exerciseCompleted === true
);

// INCREMENT (++)
let numberOfCookies = 11;
numberOfCookies++;
console.log('INCREMENT (++):', numberOfCookies);

let x = 3;
const y = x++;
console.log(`x:${x}, y:${y}`);

// DECREMENT (--)
let numberOfCars = 11;
numberOfCars--;
console.log('DECREMENT (--):', numberOfCars);
