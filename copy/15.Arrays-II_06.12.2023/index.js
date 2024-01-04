"use strict";

//Array Methods 
// push(), pop(), shift(), unshift() methods are shown in Arrays-I file :)

let narutoArray = ["Naruto", "Kakashi", "Leaf Village", "Sasuke"];

// at() - return the value from the index provided - same as accessing with square brackets
console.log("at() method: " + narutoArray.at(2)); // "Leaf Village"
//console.log(narutoArray[2]); // "Leaf Village" - same result

// includes() - search if a value exists inside the array - return a BOOLEAN value (true or false)
console.log(narutoArray.includes("Naruto")); //true
console.log(narutoArray.includes("jfndjlkf")); //false
console.log(narutoArray.includes("naruto")); //false - case-sensitive search
console.log(narutoArray.includes("Naruto ")); //false - white-space

// indexOf() - return the first index of the value that is provided
console.log(narutoArray.indexOf("Sasuke")); //3
console.log(narutoArray.indexOf("dfhi")); // -1 : the value is not present in the array
// narutoArray[3] = "Changed"; - this is the same as the line of code below - except, we used a method to find the index 3
narutoArray[narutoArray.indexOf("Sasuke")] = "Changed spelling :)"; //using indexOf() method to change the value of an element in an array
console.log(narutoArray);

// lastIndexOf() - return the index of the last occurance of the value in the array
narutoArray.push("Naruto");
console.log(narutoArray);
console.log(narutoArray.indexOf("Naruto")); // first occurance 
console.log(narutoArray.lastIndexOf("Naruto")); // last occurance

// toString() - return the array as a string
let narutoString = narutoArray.toString();
console.log(narutoString);
console.log(narutoString.indexOf["Kakashi"]); // undefined because you cannot use array methods with a string datatype
console.log(narutoArray[2].toUpperCase()); // you can use string methods with string values inside an array - needs to be accessed first

// isArray() - check if an array is an array - returns a BOOLEAN
console.log(Array.isArray(narutoArray)); //true
console.log(typeof narutoArray) // returns object
console.log(Array.isArray(narutoString)); //false

// reverse() - reverses the elements in the array, returns an array
console.log(narutoArray.reverse());

//slice() - return an array of the values that is 'sliced' from the original array, based on the starting and ending index provided
let newSlicedNarutoArray = narutoArray.slice(0,3); // provide the start and end index (in this case, the 3rd index (4th value) is not included)
console.log(newSlicedNarutoArray); // the sliced portion is stored in this variable (as array)
console.log(narutoArray); // stays the same

//splice() - remove (and optionally replace) elements from the array based on the starting index and the number of elements to remove
let newSplicedNarutoArray = narutoArray.splice(1, 1); // splice(starting index, number of elements to remove)
console.log(newSplicedNarutoArray); // this variable contains the element/s that have been removed
console.log(narutoArray); // this variable contains the elements left over after the splice method
// using splice() to remove and replace - replacing is optional - can remove more than one, and can add more than one
let newSplicedNarutoArray2 = narutoArray.splice(3, 1, "Inata", "Sakura");
console.log(newSplicedNarutoArray2); // this variable contains the deleted elements
console.log(narutoArray); // this variable contains the elements in the original array with the replaced ones

// join() - returns a string of your array, separated by the argument provided in the method
console.log(narutoArray.join(" and "));

// concat() - combine two or more arrays, can also add elements using this method
let narutoArrayAdditions = ["Rock Lee", "Gaara"];
let combinedArray = narutoArray.concat(narutoArrayAdditions); // the arguments are the arrays/elements to be added
console.log(combinedArray);

