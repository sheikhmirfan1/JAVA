'use strict';

// * Boolean
// Strict Equality

console.log('\n----------STRICT EQUALITY (===)----------');
console.log(1 === 1);
console.log(1 === '1');

console.log('\n----------LOOSE EQUALITY (==)----------');
console.log(1 == 1);
console.log(1 == '1');

console.log('\n----------STRICT INEQUALITY (! = =)----------');
console.log(1 !== 1);
console.log(1 !== '1');

console.log('\n----------LOOSE INEQUALITY (==)----------');
console.log(1 != 1);
console.log(1 != '1');

console.log('\n----------GREATER THAN (>)----------');
let age = 12;
console.log(age > 18);

console.log('\n----------LESS THAN (<)----------');
// Please see variable on line 23
console.log(age < 18);

console.log('\n----------GREATER THAN OR EQUAL (>=)----------');
console.log(18 >= 18);
console.log(16 >= 18);

console.log('\n----------LESS THAN OR EQUAL (<=)----------');
console.log(16 <= 15);
console.log(16 <= 18);

console.log('\n----------LOGICAL AND (&&)----------');
console.log(18 <= 18 && 17 > 5);
console.log(19 <= 15 && 10 > 5);

console.log('\n----------LOGICAL AND (||)----------');
console.log(18 <= 18 || 17 > 5);
console.log(19 <= 15 || 10 > 5);

// Example
let customerAge = 18;
// let isCustomerAge18OrAbove = customerAge > 17; // checks if customer is greater 17
let isCustomerAge18OrAbove = customerAge >= 18; // checks if customer age is 18 or above
console.log('\n----------Example----------');
console.log(isCustomerAge18OrAbove);
