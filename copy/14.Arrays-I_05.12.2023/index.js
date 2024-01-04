"use strict";

let variable1 = "hello";
let array1 = [1, 2 , 3, 4];
let array2 = Array(1, 2, 3, 4); //knowledge purposes
console.log(array1);
console.log(array2);

// one-dimensional and two-dimensional arrays
let oneDimension = [34, 8454, "hi", true, null]; 
let twoDimension = [["A", 80], ["B", 70], ["C", 60], ["D", 50]];
console.log(oneDimension);
//use bracket notation to access elements in an array

//access elements in a one dimensional array
let arrayFirstValue = oneDimension[0]; // index 0 is the first value
let arraySecondValue = oneDimension[1];
console.log(arrayFirstValue);
console.log(arraySecondValue); 
console.log(oneDimension[2]);  // is not stored in a variable like above, just logged third value to the console

let arrayLength = oneDimension.length; // the length of the array is the number of values/elements that you have
console.log(arrayLength); // 5
let arrayLastValue = oneDimension[oneDimension.length - 1]; // the index of the last element is always the length of the array minus 1 
console.log(arrayLastValue);

//change the value of an element in an array - mutable
oneDimension[2] = "bye";
console.log(oneDimension);


//access elements in a two dimensional array
let twoDimensionalValue1 = twoDimension[1][1];
console.log(twoDimensionalValue1); // 70
let twoDimensionalValue2 = twoDimension[0][3];
console.log(twoDimensionalValue2); //undefined 
let twoDimensionalValue3 = twoDimension[4]; //undefined
console.log(twoDimensionalValue3);

//array methods
let myToDos = ["Cook", "Clean", "Sleep"];
console.log(myToDos);
console.log(myToDos[myToDos.length - 1]);

// add an element from the END of your existing array - you can add multiple elements (separate with a comma)
myToDos.push("Shop");
console.log(myToDos);
console.log(myToDos[myToDos.length - 1]);

// add an element to the START of your exsiting array - you can add multiple elements (separate with a comma)
myToDos.unshift("Code");
console.log(myToDos);
console.log(myToDos[0]);

// remove the last element from the END of your existing array 
myToDos.pop(); // removed Shop
console.log(myToDos);

// remove an element from the START of your existing array
myToDos.shift(); // removed Code
console.log(myToDos);

