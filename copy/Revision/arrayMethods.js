'use strict';

let ages = [12, 24, 37, 68, 105, 22, 10, 2];

ages.splice(1, 0, 18);
console.log(ages);

let splicedArray = ages.splice(3);
console.log('\n----------splicedArray----------');
console.log(splicedArray);

console.log('\n----------popped splicedArray----------');
splicedArray.pop();
console.log(splicedArray);

console.log('\n----------Ages Array----------');
console.log(ages);

console.log('\n----------Fruit Party----------');
let x = 5;
let y = x + 5;

console.log(y, x);
let fruits = ['Pineapple', 'Apple', 'African Star Apple'];

let newFruits = [...fruits];

console.log('Fruits', fruits);
console.log('New Fruits:', newFruits);

newFruits.push('Another Apple');
console.log('New Fruits:', newFruits);
console.log('Fruits', fruits);

let peopleAges = [12, 24, 37, 68, 105, 22, 10, 2];
console.log('\n----------map()----------');

let updateAges = peopleAges.map((age) => {
  return age + 1;
});
console.log(updateAges);

// Write a function that accepts an array of numbers as argument and adds one to each number in the array.

function addOneToNumbersInArray(array = []) {
  let updateAges = array.map((age) => {
    return age + 1;
  });
  return updateAges;
}

console.log(addOneToNumbersInArray([12, 34, 56, 78, 92]));
console.log(addOneToNumbersInArray(peopleAges));
console.log(addOneToNumbersInArray());

const studentInfo = [
  { name: 'Alex', age: 25 },
  { name: 'Ben', age: 31 },
  { name: 'Hadi', age: 37 },
  { name: 'Marla', age: 30 },
  { name: 'Paul', age: 44 },
  { name: 'Samuel', age: 32 },
  { name: 'Sheik', age: 43 },
  { name: 'Vlada', age: 31 },
  { name: 'Wara', age: 46 },
  { name: 'Leon', age: 25 },
];

// Filter()
// Write a function that filters students having an age of less than 30 years.
console.log('\n----------filter()----------');

function filterAges(array, ageToCheck) {
  let filter = array.filter((person) => {
    //   console.log(student);
    //   console.log(student.age);
    return person.age <= ageToCheck;
  });

  return filter;
}

console.log(filterAges(studentInfo, 30));
console.log(filterAges(studentInfo, 60));
console.log(filterAges(studentInfo, 35));

const addition = (...numbers) => {
  let sum = numbers.reduce((prevNumber, nextNumber) => {
    return prevNumber + nextNumber;
  }, 0);

  return sum;
};

console.log(addition(2, 3, 4, 5, 6, 7, 8, 9));
console.log(addition(2, 3));
console.log(addition(4, 4, 4, 4));

function everyAge(array, nameLength) {
  let result = array.every((person) => {
    return person.name.length <= nameLength;
  });

  return result;
}

console.log(everyAge(studentInfo, 6));

function filterNameLength(array, nameLength) {
  let result = array.filter((person) => {
    return person.name.length <= nameLength;
  });

  return result;
}

console.log(filterNameLength(studentInfo, 4));
