'use strict';
// -----1-----
let country = 'Germany';
console.log('We are in:', country);

let DonaldTrumpsName = 'Donald Trump';
let occupation = 'Billionaire';

// -----2-----
let employeeOne = {
  fullName: DonaldTrumpsName,
  occupation: occupation,
  department: 'Business & Finance',
};

console.log('Employee full name:', employeeOne.fullName);

// -----3-----
function addTwoNumbers(numOne, numTwo) {
  let sum = numOne + numTwo;
  return sum;
}

console.log('Function:', addTwoNumbers(2, 2));
