"use strict";

// number datatype
// integers - whole number
// float - decimal numbers

// number operators: +, -, /, *, =

// addition operator (+)
// adding numbers together - ADDITION
// adding strings together - CONCATENATION
let add = 5 + 5; //10
let add2 = "5" + "5"; //55
let add3 = "5" + 5; //55

console.log(add);
console.log(add2);
console.log(add3);
console.log(typeof add3);

// subtraction operator (-)
let subtraction = 10 - 5; //5
let subtraction2 = 10 - "5"; //5

console.log(subtraction);
console.log(subtraction2);
console.log(typeof subtraction2);

// division operator (/)
let division = 10 / 5; // 2
let division2 = 10 / 4; // 2.5
console.log(division);
console.log(division2);

// remainder operator (what is leftover after the division operation) (%)
let remainder = 10 % 4;
console.log(remainder);

// multiplication operator (*)
let multiplication = 2 * 5; //10
console.log(multiplication);

// exponentiation (base number and an exponent) (**)
let exponentiation = 2 ** 5; // 2 to the power of 5 - 2*2*2*2*2 = 32
console.log(exponentiation);

// assignment operators

// addition assignment (+=)
//camelCase for variable naming
let stockOfItem = 13;
//let newStockOfItem = stockOfItem + 5;
stockOfItem += 5; // 18
console.log(stockOfItem); 
stockOfItem += 5; // 23
console.log(stockOfItem);

let addition3 = 2;
addition3 +=3;
console.log(addition3);

// substraction assignment (-=)
stockOfItem -= 4; //23 - 4 = 19
console.log(stockOfItem);

// division assignment (/=)
let division3 = 10;
division3 /= 2; // 10 / 2 = 5
console.log(division3);

// multiplication assignment (*=)
let multiplication2 = 10;
multiplication2 *= 2; // 10 * 2 = 20
console.log(multiplication2);

// exponentiation assignment (**=)
let exponentiation2 = 10;
exponentiation2 **= 2; // 10 * 10 = 100
exponentiation2 = 10 ** 2; // 10 * 10 = 100
console.log(exponentiation2);

// greater than operator (>)
let number = 10;
console.log(number > 20); // result is going to be of boolean datatype - false

// less than operator (<)
console.log(number < 20); // true
let string1 = "Hi"; // length is 2
let string2 = "Hello"; // length is 5
console.log(string1.length > string2.length);

// special values in the number datatype: Infinity and NaN

// number methods 

let x = 467835; // integer
//let y = new Number(4354);

// Finite numbers: countable and has a definite end (isFinite)
console.log(Number.isFinite(x)); // true
console.log(Number.isFinite(Infinity)); // false

// Integer number: a whole number, not fractional, can be positive, negative, or 0
console.log(Number.isInteger(x)); // true
console.log(Number.isInteger(-x)); // true 
console.log(Number.isInteger(x + 0.2)); // false (fractional)

// Check if a number is a number
console.log(Number.isNaN(x)); // false
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN(Infinity)); // false, infinity is a number
console.log(isNaN("fgfdhghx")); // true 
console.log(Number.isNaN("jdfksdfk")); // false - using the Number constructor is going to (implicit) convert the string to a number datatype 

// Round off a decimal number to a certain number of decimal points
let y = 4.584504895434;
console.log(y.toFixed(4));
console.log(y.toString());

// Convert to a number datatype - either whole number or decimal
let z = "8329473298473.45656";
console.log(Number.parseInt(z)); //converted to a whole number/integer
console.log(Number.parseFloat(z)); // rounded off 3 decimal points
console.log(Number.parseFloat(y.toFixed(4))); // take y and round it off to 4 decimal points and then convert it back to a number datatype (instead of a string)