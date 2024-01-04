"use strict";
/*
Write a program that takes a positive integer and prints out all the even numbers from 0 up to that 
integer using a while loop.

Write a program that uses a do...while loop to create a multiplication table of the number provided.

Write a program which uses a for loop to iterate from 0 to 15. For each iteration, 
it will check if the current number is odd or even, and print [NUMBER] is odd or [NUMBER] is even.
*/

//Q1 - while loop 
let integer = 30;
let counter = 0;

while(counter<= integer) {
    if(counter%2 === 0){
        console.log(counter);
    }
    counter++;
}

//Q2 - multiplication table: 1 x 39 = 39, 2 x 39 = 78, 3 x 39 = ....
let number = 19;
let length = 3;
let counter2 = 0;

do{
    console.log(`${number} x ${counter2} = ${number*counter2}`);
    counter2++;

} while(counter2 <= length);

//Q3
for(let numbers = 0; numbers <= 15; numbers++) {
    // ternary operator is the same as an if.. else statement
    // condition ? (some code will execute - true) : (some other code will execute - false) 
    numbers%2 === 0 ? console.log(`${numbers} is even`) : console.log(`${numbers} is odd`);
}