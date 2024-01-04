"use strict";

// Functions
// Types of functions: named functions, anonymous functions, high order functions, callback functions

// Named functions
function functionName() {
    //block of code to execute when the function is 'called'
    console.log("hi");
}
functionName();


// Functions are hoisted 'to the top' of your script (not anonymous functions though)
//sumOfTwoNumbers(8, 10); 
sumOfThreeValues(3, 7, 90);

function sumOfThreeValues(a, b, c) {
  //local variables for function: a, b, c
  let sum = a + b + c;
  // return keyword tells the function what to output based on the code above it
  return console.log(sum);
}

function arrayMultiplication(arrayName){
    let product = 1;
    for(let i = 0; i < arrayName.length; i++){
        //outer
        for(let x = 0; x < arrayName[i].length; x++){
            //inner
            product = product * arrayName[i][x];
        }
    }
    return console.log(product);
}

// you need to call the function for the code to execute
sumOfThreeValues(3, 4, 7);
sumOfThreeValues(7, 20, 3894738947);

let myArray = [45, [34, 56], 90, [31, 78, 96]];
arrayMultiplication(myArray);

let array = [[1,2],[3,4],[5,6,7]];
arrayMultiplication(array);
arrayMultiplication("df"); // returns NaN 

// Anonymous function

let anonymousFunction = function (param) { // the function is not given a name, but it is called with the name of the variable
    //code
    return param;
}

anonymousFunction("hi");
console.log(anonymousFunction("hello"));

// Arrow functions (another way to write an anonymous function (ES6))
let anonArrowFunction = () => {};

let sumOfTwoNumbers = (a,b) => console.log(a+b);
// console.log(sumOfTwoNumbers(4,6)); -- if your function returns a console.log value then you do not need to call it in a console log to see the output
sumOfTwoNumbers(4, 6908); // if we didnt console log in our function we would need to console log our result after calling the function