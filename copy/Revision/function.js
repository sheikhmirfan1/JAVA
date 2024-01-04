'use strict';

// * Functions JavaScript

// ? Function Declaration
function greeting(name) {
  return `Good morning ${name}!`;
}
console.log('\n----------Function Declaration----------');
console.log(greeting('Alex'));

// Function Expression
let addTwoNumbers = function (numOne, numTwo) {
  return numOne + numTwo;
};

console.log('\n----------Function Expression----------');
console.log(addTwoNumbers(2, 2));

// Arrow Function Expression

let multiplyTwoNumbers = (numOne, numTwo) => {
  return numOne * numTwo;
};

console.log('\n----------Arrow Function Expression----------');
console.log(multiplyTwoNumbers(2, 2));

{
  // Implicit Return
  let multiplyTwoNumbers = (numOne, numTwo) => numOne * numTwo;
  console.log(
    '\n----------Arrow Function Expression (Implicit Return)----------'
  );
  console.log(multiplyTwoNumbers(2, 4));
}

// Function Anatomy

function singTopGSong(chorus) {
  return chorus;
}

// Function call without an argument
console.log(singTopGSong());

// Function call with an argument
console.log(
  singTopGSong(`Tourner dans le vide
Tourner dans le vide
Tourner dans le vide
Tourner dans le vide
Tourner dans le vide
Tourner dans le vide
Tourner dans le vide`)
);

function divideTwoNumbers(numOne, numTwo) {
  let result = numOne / numTwo;
  return result;
}

console.log(divideTwoNumbers(2, 2));
console.log(divideTwoNumbers(10, 2));
console.log(divideTwoNumbers(50, 2));
console.log(divideTwoNumbers('hello', 'hi')); // NaN

// Arrow Function

{
  const divideTwoNumbers = (numOne, numTwo) => {
    let result = numOne / numTwo;
    return result;
  };

  console.log(divideTwoNumbers(2, 2));
}

{
  // Implicit Return
  const divideTwoNumbers = (numOne, numTwo) => numOne / numTwo;
  console.log(divideTwoNumbers(2, 2));
}

// * IIFE
(function () {
  return 'I am IIFE';
})();

console.log(
  (() => {
    return 'I am an Arrow IIFE';
  })()
);

function checkBiggerNumber(firstNumber, secondNumber) {
  if (firstNumber > secondNumber) {
    return 'Must be nice!';
  } else if (firstNumber === secondNumber) {
    return 'We the same!';
  } else {
    return 'I have to get my number up!';
  }
}

console.log('\n----------Function using conditional----------');
console.log(checkBiggerNumber(4, 2));
console.log(checkBiggerNumber(2, 2));
console.log(checkBiggerNumber(1, 2));
