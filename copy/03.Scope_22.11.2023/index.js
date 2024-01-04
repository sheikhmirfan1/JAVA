'use strict';

// * Scope or Scoping
// JavaScript uses Lexical Scoping

// ? Global Scope

let numberOfStudentsPresent = 8;
console.log(numberOfStudentsPresent);

{
  console.log(numberOfStudentsPresent);
}

function callGlobalVariable() {
  console.log(numberOfStudentsPresent);
}
// Function (fn) call
callGlobalVariable();

// ? Local Scope

// Block Scope - LET & CONST are block scoped
{
  var famousQuestion = 'What color is your Bugatti?';
  let variableInBlock = 'I am in a block';
  const arrayOfFruits = [
    'Apple',
    'Banana',
    'Orange',
    'Pineapple',
    'African Star Apple',
  ];
  //   console.log(variableInBlock);
  //   console.log(arrayOfFruits);
}

console.log(famousQuestion); // This will return
// console.log(variableInBlock); // This will throw a ReferenceError
// console.log(arrayOfFruits); // This will throw a ReferenceError

// ? Function Scope - VAR is function scoped and LET and CONST as well.
function protectVarDeclaredVariable() {
  var pineappleOnPizza = true;
  let ball = 'Adidas Ball';
  const occupation = 'Doctor';
}

// console.log(pineappleOnPizza); // This will throw a ReferenceError
// console.log(ball); // This will throw a ReferenceError
// console.log(occupation); // This will throw a ReferenceError

// ? Working with same name variables in Global and Local/Function Scope
let favoriteFruit = 'Orange';

function printFavoriteFruit() {
  let favoriteFruit = 'Mango';
  console.log('Favorite fruit Fn call:', favoriteFruit);
}

console.log(favoriteFruit);
printFavoriteFruit();
