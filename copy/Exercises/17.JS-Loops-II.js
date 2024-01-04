"use strict";
/*
1. Write a program that calculates the sum of all numbers between 1 and 10 using a for loop.

2. Write a program that prints all the even numbers in an array of numbers using a for...of loop.

3. Write a program that iterates over the properties of the object below and logs each property and its corresponding value to the console.

const person = {
name: 'John Doe',
age: 20,
city: 'London',
occupation: 'Banker'
};

4. Write a program that creates a multiplication table using nested for loops.
 */

//Q1 
let sum = 0;
for (let i = 1; i <= 10; i++) {
    //sum = sum + i
    sum += i;
}
//console.log(1+2+3+4+5+6+7+8+9+10);
console.log(sum);

//Q2 
let numArray = [0,1,2,3,4,5,6,7,8,9,10,11,12];

for(let i of numArray){
    if(i % 2 === 0) {
        console.log(i);
    }
}

for(let i of numArray) {
    if(i % 2 !== 0){
        continue;
    }
    console.log(i);
}

//Q3
const person = {
    name: 'John Doe',
    age: 20,
    city: 'London',
    occupation: 'Banker'
};

for(let key in person){
    console.log(`Key: ${key}, Value: ${person[key]}`);
}

//Q4

for(let i = 1; i <= 5; i++){
    //outer loop
    console.log(`Multiplication for ${i}`);
    for(let x = 1; x<=8; x++){
        //inner loop
        console.log(`${i} x ${x} = ${i*x}`);
    }
}