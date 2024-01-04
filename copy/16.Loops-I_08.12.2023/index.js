"use strict";
//Loops demo
// for loop:
// while loop:
// do.. while loop:


//FOR
//for(initialisation; condition; increment/decrement statement) 
for(let i = 0; i <= 10; i++) {
    // code to be executed each time the loop runs
    console.log("hi"); //this console.log will be executed 8 times
    console.log(i);
}
console.log("bye");

//iterate through an array with for loop
let myArray = ["hi", "hello", "bye", "goodbye", "hello"];
console.log(myArray.length);

// we use the length property to specify the amount of times that the loop will execute
// in the case of an array, we use length to ensure each element is iterated through
for(let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

// write a program that is going to CHECK if a number is even or odd - if the number is even, it should be printed to 
// the console `${} is even`, if its odd `${} is odd`. check all numbers between 0-15;

for(let i = 0; i<=15; i++) {
    if(i % 2 === 0) {
        //true
        console.log(`${i} is even`);
    } else {
        //false
        console.log(`${i} is odd`);
    }
}

//WHILE
// while(condition){ }
// this loop will execute as long as the condition result is TRUE
// the condition is going to be checked BEFORE each iteration of the loop
// a while loop may never execute - if the result of the condition is FALSE
let counter = 10;
while(counter >= 5){
    console.log("counter is more than 5!");
    counter--;
}  

let counter2 = 10;
while(counter2 < 10){ 
    console.log("counter is less than 10!");
    counter2++; // the code block will execute ten times
}

//DO.. WHILE
// execute as long as a while condition is true 
// this code will always execute at least once because there is no condition to be met in the do {} block - the do block is executed before checking the while condition
// do { //code to execute } while (condition) 
let counter3 = 36456;
do {
    // this code will always execute at least once
    console.log("Do code executed");
    counter3++;
    // the condition is going to be checked AFTER each iteration of the loop
} while (counter3 < 10); 