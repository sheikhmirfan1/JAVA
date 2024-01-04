"use strict";

// Objects: composite datatype
// key-value pairs

// Object literal OR object constructor

// object literal
let person = {
    name: "John",
    age: 50
};
person.lastName = "Doe";
console.log(person);
console.log(person.age);
// console.log(typeof person); - object

// constructor function
function Person() {
    // empty constructor function
}
let personTwo = new Person();
personTwo.name = "Second John";
personTwo.age = 90;
console.log(personTwo);

let personThree = new Person();
console.log(personThree);

//user object
const user = {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    dateOfBirth: "18.12.1980",
    address: [["Street", "Street Name"], ["Postal Code", 38274]],
    address2: {postalCode: 38473, country: "Germany"}, //any datatype in an object
    // functions declared inside objects are known as object methods
    greeting: function() { //anonymous
        return `Hello ${this.firstName}, you live in ${this.address2.country}`;
    }
};

console.log(user);
console.log(user.greeting());

// Access data from the object: two ways
// dot notation
console.log(user.address);

// bracket notation
console.log(user["address"]);

let userAddress = "address";
console.log(user[userAddress]);

console.log(`User's first name is ${user.firstName}`);

//Objects are mutable
// using bracket or dot notation - you can assign new values to an object property
user.lastName = "Changed last name of user";
console.log(user);
// user["address"] = "changed address";
// console.log(user);
user.address[0][1] = "Updated Street";
console.log(user);

for(let key in user) {
    console.log(user[key]);
}


// Object methods built-in 
console.log(Object.keys(user)); // result is an array containing all the object's keys
console.log(Object.values(user)); // result is an array containging the values in the object


// Practice exercise
// Create an object called personLiteral with properties name, age, and city. Print the object to the console.
// Now create a Person() object using a constructor function.
// Access and print the value of the name property from the personLiteralObject.
// Modify the age property to be 35. Then, print the updated object.
// Create an object called book with properties title, author, and a nested object publisher with properties name and year. Print the book object.
// Use a loop to iterate through the book object and print each property and its value to the console.

//Q1
const personLiteral = {
    name: "Sheikh",
    age: 90,
    city: "Hamburg"
}
console.log(personLiteral);

//Q2
function Person(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
}

const personConstructorObject = new Person("Marla", 100, "Cologne");
console.log(personConstructorObject);

//Q3 
console.log(personLiteral.name);

//Q4
personLiteral.age = 35; // personLiteral["age"] also works
console.log(personLiteral);

//Q5
const book = {
    title: "Book Title",
    author: "Book Author",
    publisher: {name: "Publisher Name", year: 2000} // nested object (object inside an object)
}
console.log(book);

//Q6
for(let key in book) {
    if(typeof book[key] === "object") {
        let objectKeys = Object.keys(book[key]);
        console.log(`Property: ${key}, Value: ${objectKeys}, Values: ${Object.values(book[key])}`)
    } else {
    console.log(`Property: ${key}, Value: ${book[key]}`) // square brackets becaue 'key' is a string in the for loop
    }
}