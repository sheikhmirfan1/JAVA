"use strict";

/*
Please read and solve the following challenges below:

Write a program that takes a number as input and checks if it is even or odd. If the number is even, it should print "The number is even" to the console, and if it is odd, it should print "The number is odd" to the console.
Write a program that takes a year as input and checks if it is a leap year or not. If the year is a leap year, it should print "The year is a leap year" to the console, and if it is not a leap year, it should print "The year is not a leap year" to the console.
Write a program that takes three numbers as input and finds the largest among them. The program should then print the largest number to the console.
Write a program that takes a string as input and checks if it is a palindrome or not. If the string is a palindrome, it should print "The string is a palindrome" to the console, and if it is not a palindrome, it should print "The string is not a palindrome" to the console.
A string is considered a palindrome if it reads the same backward as forward.

Write a program that does the following: For numbers divisible by 3, print "Fizz". For numbers divisible by 5, print "Buzz". For numbers that are divisible by both 3 and 5, print "FizzBuzz".
*/

// Question 1
let numberInput = "384fdgdfgf93";

if (numberInput % 2 === 0) {
  console.log("If statement: The number is even.");
} else if (numberInput % 2 === 1) {
  console.log("Else if statement: The number is odd.");
} else {
  console.log("Else statement: The number is not valid");
}

switch (true) {
  case numberInput % 2 === 0:
    console.log("Switch: the number is even.");
    break;
  case numberInput % 2 === 1:
    console.log("Switch: the number is odd.");
    break;
  default:
    console.log("Default: the number is not valid.");
}

switch (
  numberInput % 2 ===
  0 //true
) {
  case true:
    console.log("Switch 2: the number is even.");
    break;
  case false:
    switch (typeof numberInput) {
      case "number":
        console.log("Switch 2: the number is odd.");
        break;
      default:
        console.log("Default 2: the number is not valid.");
    }
    break;
  // default:
  //     console.log("Default 3: the number is not valid.");
}

//Q2
let yearInput = 2024;
if (yearInput % 4 === 0) {
  //is a leap year
  console.log("if: The year is a leap year.");
} else if (yearInput % 4 !== 0) {
  //not a leap year
  console.log("if else: The year is not a leap year.");
} else {
  console.log("else: The year is not valid.");
}

switch (true) {
  case yearInput % 4 === 0:
    console.log("Switch: The year is a leap year.");
    break;
  case yearInput % 4 !== 0:
    console.log("Switch: The year is not a leap year.");
    break;
  default:
    console.log("The year is not valid.");
}

//Q3
let num1 = 32;
let num2 = "efd";
let num3 = 3;

if (num1 > num2 && num1 > num3) {
  console.log(`Number one (${num1}) is the largest number.`);
} else if (num2 > num1 && num2 > num3) {
  console.log(`Number two (${num2}) is the largest number.`);
} else if (num3 > num1 && num3 > num2) {
  console.log(`Number three (${num3}) is the largest number.`);
} else {
  console.log("The numbers are not valid. Please check the values.");
}

switch (true) {
  case num1 > num2 && num1 > num3:
    console.log(`Switch: Number one (${num1}) is the largest number.`);
    break;
  case num2 > num1 && num2 > num3:
    console.log(`Switch: Number two (${num2}) is the largest number.`);
    break;
  case num3 > num1 && num3 > num2:
    console.log(`Switch: Number three (${num3}) is the largest number.`);
    break;
  default:
    console.log("Switch: The numbers are not valid. Please check the values.");
}

//Q4 
let stringCheck = "Civdcdcwdic";
let reverseString = stringCheck.toLowerCase().split("").reverse().join("");
console.log(reverseString);
console.log(stringCheck);

if (stringCheck.toLowerCase() === reverseString) {
    console.log("The word is a palindrome!!!!!!!!");
} else {
    console.log("The string is not a palindrome. Sorry!");
}

switch(stringCheck.toLowerCase()) {
    case reverseString:
        console.log("Switch: The word is a palindrome!!!!!!!!");
        break;
    default:
        console.log("Switch: The string is not a palindrome. Sorry!");
}

//Q5
let num4 = 454440;
if (num4 % 3 === 0 && num4 % 5 === 0) {
    console.log("The number is divisible by 3 and 5");
} else if (num4%3 === 0) {
    console.log("The number is divisible by 3");
} else if(num4 % 5 ===0){
    console.log("The number is divisible by 5");
} else {
    console.log("The number is NOT divisible by 3 or 5");
}

//dont do this
if(num4 % 3 === 0) {
    if(num4 % 5 === 0) {
        console.log("The number is divisible by 3 and 5");
    } else{
        console.log("The number is divisible by 3");
    }
} else {
    if(num4 % 5 === 0) {
        console.log("The number is divisible by 5");
    } else {
        console.log("The number is NOT divisible by 3 or 5");
    }
}

switch(true) {
    case num4 % 3 === 0 && num4 % 5 === 0:
        console.log("The number is divisible by 3 and 5");
        break;
    case num4 % 3 === 0:
        console.log("The number is divisible by 3");
        break;
    case num4 % 5 === 0:
        console.log("The number is divisible by 5");
        break;
    default:
        console.log("The number is NOT divisible by 3 or 5");
}