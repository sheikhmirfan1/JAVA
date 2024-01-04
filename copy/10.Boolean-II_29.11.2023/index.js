'use strict';

// * Boolean Methods

// ? Boolean.prototype.toString() Method
let samuelsDreamCar = 'Lamborghini Aventador SVJ';
let doesTextMatch = samuelsDreamCar === 'Lamborghini Aventador SVJ';

console.log('\n----------toString()----------');
console.log(doesTextMatch);
console.log(typeof doesTextMatch);
let booleanReturnValueToString = doesTextMatch.toString();
console.log(booleanReturnValueToString);
console.log(typeof booleanReturnValueToString);

// ? Boolean.prototype.valueOf() Method
let leonOwnsABugatti = new Boolean('Yes');
let paulsCar = 'Lamborghini Urus';

console.log('\n----------value()----------');
console.log(leonOwnsABugatti.valueOf());
console.log(paulsCar.valueOf());

// Truthy & Falsy
console.log(1 == 1);
console.log(1 == '1');
console.log(1 === '1');

console.log('5' + 9);
console.log(9 + '5');
console.log(9 == '5');

console.log('\n----------Falsy----------');
console.log(0 == false);
console.log(null == undefined);

console.log('\n----------Truthy----------');
console.log(-1 == true);
console.log(true == null);
console.log(null == null);

// typof operator
console.log('\n----------typeof----------');

console.log(typeof 12);
console.log(typeof true);
console.log(typeof [1, 2, 3, 4, 5]);

console.log(typeof function test() {});
console.log(typeof new Boolean());
console.log(typeof {});
console.log(typeof new Object());
console.log(typeof 'Hello');

// Checking if value data type is tru or false
let city = 'Lagos';
console.log(typeof city === 'string');
console.log(typeof city === 'number');
console.log(typeof 12 === 'number');
console.log(typeof 1 === 'boolean');
console.log(typeof false === 'boolean');

// let isAlexComing = true;
// let isBenComing = true;
// let isHadiComing = false;
// let isMarlaComing = true;
// let isPaulComing = true;
// let isSamuelComing = true;
// let isSheikhComing = true;
// let isVladaComing = true;
// let isWaraComing = false;
// let isLeonComing = true;

// const eventData = [
//   { name: 'Alex', isComing: true },
//   { name: 'Ben', isComing: true },
//   { name: 'Hadi', isComing: false },
//   { name: 'Marla', isComing: true },
//   { name: 'Paul', isComing: true },
//   { name: 'Samuel', isComing: true },
//   { name: 'Sheik', isComing: true },
//   { name: 'Vlada', isComing: true },
//   { name: 'Wara', isComing: false },
//   { name: 'Leon', isComing: true },
// ];

// let peopleComing = eventData.filter((person) => person.isComing === true);
// console.table(peopleComing);
