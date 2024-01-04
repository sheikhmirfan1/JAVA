"use strict";

// Math object demo

// Constants
const pi = Math.PI;
console.log(pi); // 3.141592653589793

const e = Math.E;
console.log(e); // 2.718281828459045

let x = 4.329849384;

// Math.round() - round to the nearest integer
console.log(Math.round(x)); // 4
console.log(Math.round(e)); // 3

// Math.floor() - round down to the nearest integer
console.log(Math.floor(x)); // 4
console.log(Math.floor(e)); // 2
console.log(Math.floor(6.9)); // 6

// Math.ceil() - round up to the nearest integer
console.log(Math.ceil(x)); // 5
console.log(Math.ceil(e)); // 3
console.log(Math.ceil(6.9)); // 7

// Math.trunc() - return an integer - new method ES6 - removes decimals, does not round
console.log(Math.trunc(x)); // 4
console.log(Math.trunc(e)); // 2
console.log(Math.trunc(7.5)); // 7

// Math.sign() - returns if the number is negative (-1), positive (1), or null (0)
console.log(Math.sign(x)); // 1
console.log(Math.sign(-x)); // -1
console.log(Math.sign(e)); // 1
console.log(Math.sign(-e)); // -1
console.log(Math.sign(null)); // 0

// Math.sqrt() - returns the square root of a number
console.log(Math.sqrt(x)); // 2.0808290136385548
console.log(Math.sqrt(25)); // 5
console.log(Math.sqrt(e)); // 1.6487212707001282

// Math.pow() - return the base to the power of the exponent
console.log("exponents: " + 5 ** 3); // 125
console.log("math.pow(): " + Math.pow(5, 3)); // 125

// Math.abs() - return the absolute value (positive value)
console.log(Math.abs(x)); // 4.329849384
console.log(Math.abs(-x)); // 4.329849384
console.log(Math.abs(458495)); // 458495
console.log(Math.abs(-458495)); // 458495

// Min() and Max() - returns the lowest or highest number in the range
console.log(Math.min(4, 67, 23, 90, 0, 6, -2)); // -2
console.log(Math.max(4, 67, 23, 90, 0, 6, -2)); // 90
console.log(Math.max(4, 67, 23, "hello", 0, 6, -2)); // NaN
console.log(Math.min(4, 67, 23, 90, 0, "3", -2)); // type coercion - returns the min value

// Math.random() - return a random number
console.log(Math.random()) // between 0 and 1 (exclusive of 1)
console.log(Math.random() * 10) // between 0 and 10
console.log(Math.round(Math.random() * 10)) // generate a random number, multiply by 10 (so it is between 0 and 10) and then round off to the nearest integer







