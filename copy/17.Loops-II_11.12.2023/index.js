"use strict";

/*
LOOPS II
- nested for() loops
- for..in loop
- for..of loop 
- break; and continue; statements
*/

//FOR (nested)
// inner loop and an outer loop
for(let i = 1; i <= 6; i++) {
    //outer loop
    console.log(`i (outer): ${i}`);
    for(let j = 1; j <= 5; j++){
        //inner loop
        console.log(`j (inner): ${j}`);
    }
}

//console.log(i); - reference error - not defined because we cannot access i in the global scope

for (let i = 1; i <= 3; i++) {
    //outer loop
    for (let x = 1; x <= 3; x++) {
        //inner loop
        console.log(`i: ${i}; x: ${x}`);
    }
    
}

// for.. of loop
let myArray = ["hi", "hello", "goodbye", "bye", null, [], {}];
for (let i of myArray) {
    //i is the value of the element, not the index (not the same [i])
    console.log(`the value is ${i}`);
}
// iterate through a string
let myString = "abcdefg";
for (let i of myString) {
    console.log(i);
}
// cannot use for..of to iterate through an object - use for.. in loop
let myObject = {name:"John", lastName: "Doe"};
// for (let i of myObject) {
//     console.log(i);
// }

// for.. in loop
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 65,
    emailAddress: "john@email.com"
}

for (let key in person) {
    console.log(`Key: ${key}, Value: ${person[key]}`); // person[firstName]
}

for (let key in myObject) {
    console.log(key);
}

// for (let i in myArray) {
//     console.log(i); // indexes and no values
// }



//break statement - exit the code block (usually after a condition is met)
for(let i = 0; i <= 6; i++) {
    if(i === 3){
        break;
    }
    console.log(`Iteration: ${i}`);
}

let studentIDs = [349875, 3048329, 8302480, 904832, 834890];

for(let i = 0; i < studentIDs.length; i++){
    if(studentIDs[i] === 8302480) {
        console.log(`This is the student: ${studentIDs[i]}`);
        break; // exits the code block when the values match, does not execute the code after that
    }
    console.log(`This is not the student: ${studentIDs[i]}`);
}

//continue statement 
for (let i = 0; i <=6; i++ ){
    if (i===3) { 
       continue; // skips this iteration and go to the next one, when i is 3. the rest of the code block body is ignored.
    }
    console.log(`Iteration: ${i}`)
}

for(let i=0; i < studentIDs.length; i++) {
    if(studentIDs[i]=== 904832) {
        continue;
    }
    console.log(`This student is present: ${studentIDs[i]}`);
}



// freeCodeCamp exercise: 
let array = [[1,2],[3,4],[5,6,7]];
let product = 1;

// console.log(array[0][1]);

for(let i = 0; i < array.length; i++){
    // console.log(array[i]); //outer
    for(let x = 0; x < array[i].length; x++){
        // console.log(array[i][x]); // inner
        product = product * array[i][x];  //product *= array[i][x];
    }
}

console.log(1*2*3*4*5*6*7); //this is the same as the result of the for loop
console.log(product);
