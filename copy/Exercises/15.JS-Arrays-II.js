"use strict";

/*
Create an array called babyNamesForGirls with the following values or items: Madonna, Maria, Jennifer, Julia, Rebecca

Add the name Ada to the end of the array and print the length of the array

Add the name Esther to the beginning of the array and print the length of the array

Remove the first and last items of the array and print the length of the array

Check if the following string Establish includes the letter q and H.

Convert the following array to a string: let pangram = [‘The’, ‘quick’, ‘brown’, ‘fox’, ‘jumps’, ‘over’, ‘the’, ‘lazy’, ‘dog’]. Your result should be saved to a new variable named pangramStringified and the expected out put is The quick brown fox jumps over the lazy dog.

Concatenate the following arrays into one:

const wildAnimals = ['🦁', '🐅', '🐆'];
const domesticAnimals = ['🐈', '🐎', '🐕'];
Create a new array from items on index number 2 to index number 4 of the concatenated array from the previous question.

Reverse the following string RaceCar. Ensure the first letter of each word is also capitalized after reversing the string. Expected output: RaceCar

BONUS: Try to add a space between Race and Car, so that it reads Race Car.
*/

//Q1
let babyNamesForGirls = ["Madonna", "Maria", "Jennifer", "Julia", "Rebecca"];

//Q2
babyNamesForGirls.push("Ada");
console.log(babyNamesForGirls.length);

//Q3
babyNamesForGirls.unshift("Esther");
console.log(babyNamesForGirls.length);

//Q4
babyNamesForGirls.shift(); //first element
babyNamesForGirls.pop(); //last element
console.log(babyNamesForGirls.length);

//Q5
let stringToCheck = "Establish";
let letterCheck = stringToCheck.includes("q","H"); // storing the result (boolean value) in a container - checks both letters
//console.log(stringToCheck.includes("q")); // print out the result (boolean value)
console.log(letterCheck);

//Q6
let pangram = ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"];
let pangramStringified = pangram.join(" ");
console.log(pangramStringified);

//Q7 
const wildAnimals = ['🦁', '🐅', '🐆'];
const domesticAnimals = ['🐈', '🐎', '🐕'];
let animals = wildAnimals.concat(domesticAnimals);
console.log(animals);

//Q8
let separatedAnimals = animals.slice(2, 4);
console.log(separatedAnimals);

//Q9
let racecarString = "RaceCar";
let reverseString = racecarString.toLowerCase().split("").reverse();
reverseString[0] = reverseString[0].toUpperCase();
reverseString[4] = reverseString[4].toUpperCase();
reverseString.splice(4, 0, " ");
reverseString = reverseString.join("");
console.log(reverseString);
