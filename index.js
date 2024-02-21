"use strict";

for(let i = 0; i <= 10; i+=3){
    console.log(i);

}

console.log('\n------------01---------');

for(let j = 0; j <= 10; j+=2){
    console.log(j);

}

console.log('\n------------02---------');


let myArray = ["a", "b", "c", "d", "e"];
console.log(myArray.length);

for (let o = 0 ; myArray.length > o ; o++){
    console.log(myArray[o]);
}

console.log('\n------------03---------');

//write a program that is going to CHECK if a number is even or odd - if the number is even, it should be printed to 
//the console "${} is even", if its odd "${} is odd". check all numbers between 0-15;

for (let p = 0; p <= 15; p++){
    if (p % 2 === 0){
        console.log(`${p} is even`);
    } else {
        console.log(`${p} is odd`);
    }
}

console.log('\n------------04---------');

function myFunction(){
    console.log("Hello World");
}

myFunction();
myFunction();

console.log('\n------------05---------');


console.log(10-5);

function numbers(a, b){
    console.log(a-b);
}
numbers(20, 5);

console.log('\n------------06---------');

function id(Surname, Name){
    console.log(`My name is ${Name} and my surname is ${Surname}`);

}
id("Sheikh", "Mohammad Irfan");

console.log('\n------------07---------');

function fullName(Surname = "John", Name = "Doe"){
    let name = Surname + " " + Name;
    return name;

}
let fn = fullName("Sheikh", "Mohammad Irfan");
console.log(fn);

console.log('\n------------08---------');

function sum (math,eng,sci){
    let s = math + eng + sci;
    return s;
}

function percentage (tt){
    let per = tt/300 * 100 ;
    console.log(per);

}


let total = sum(80, 90, 70);
percentage(total);

console.log('\n------------09---------');

function myFunction1(x,y,z) {
    let total = x + y + z;
    console.log(total);
}
myFunction1(10,5,5,total);


console.log('\n------------10---------');

// Task 1
function reverseString(str = 'Leon') {
    let reversed = str.split('').reverse().join('');
    return reversed.charAt(0).toUpperCase() + reversed.slice(1).toLowerCase();
}
console.log(reverseString('Leon')); 

// Task 2
function capitalizeWords(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
console.log(capitalizeWords('hello world'));

// Task 3
function findFactorial(num) {
    if (num === 0) {
        return 1;
    } else {
        return num * findFactorial(num - 1);
    }
}
console.log(findFactorial(5));

// Bonus Task 1
function sumArray(arr) {
    if (arr.length === 0) {
        return 0;
    } else {
        return arr[0] + sumArray(arr.slice(1));
    }
}
console.log(sumArray([1, 2, 3, 4, 5]));

// Bonus Task 2
function addition(...args) {
    return args.reduce((a, b) => a + b, 0);
}
console.log(addition(4, 2, 5, 4, 8));


console.log('\n------------11---------');

let bookstoreInventory = [
    {id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classic", price: 9.99, stock: 45},
    {id: 2, title: "1984", author: "George Orwell", genre: "Dystopian", price: 12.99, stock: 0},
    {id: 3, title: "Things Fall Apart", author: "Chinua Achebe", genre: "Historical", price: 15.99, stock: 12},
]
//Add another book with classic genre
bookstoreInventory.push({id: 4, title: "The Catcher in the Rye", author: "J.D Salinger", genre: "Classic", price: 14.99, stock: 10});

//.forEach() - Display the books on the console
//For each book in the array, we want to display the title, price, stock
// (element) => { do something }
console.log("--- Bookstore Inventory:");
bookstoreInventory.forEach(book => {console.log(`Title: ${book.title} - Price: ${book.price} - Stock: ${book.stock}`)});
// The return type of the forEach() method is undefined

//.find() - Find a book based on its title
console.log("--- Find a book in the store: ")
let bookTitleSearch = "Things Fall Apart";
let foundBook = bookstoreInventory.find(book => book.title === bookTitleSearch);
if(foundBook){
console.log(`Found book with title ${foundBook.title}. The price is ${foundBook.price}`);
} else if (!foundBook) {
console.log(`Could not find book with title ${bookTitleSearch}. Please search again.`);
}
// The return type of the find() method is the value of the found element (in this case it is the object)

//.filter() - Filter all elements in the array based on a genre
console.log("--- Filter books by classic genre");
let classicBooks = bookstoreInventory.filter(book => book.genre === "Classic");
classicBooks.forEach(book => {console.log(`Book title: ${book.title} - Book genre: ${book.genre}`)});
// The return type of the filter() method is an array of all the elements found in the filter method

//console.log("---")

let isAllStockAvailable = bookstoreInventory.every(book => book.stock > 0);
console.log(isAllStockAvailable ? "All stock available" : "Not all stock available");


console.log('\n------------12---------');

console.log(2023-1981);

console.log('\n------------13---------');

let person1 = {
    name: "John",
    age: 30,
};

person1.lastName = "Doe";
 console.log(person1);

    console.log('\n------------14---------');

    function Person(){

    }

    let personTwo = new Person();
    personTwo.name = "Second John";
    personTwo.lastName = "Lee";
    personTwo.age = 40;
    console.log(personTwo);

    console.log('\n------------15---------');

    const user = {
        name: "Johnny",
        lastName: "Doe",
        dateOfBirth: "01/01/1990",
        address: [["Street", "Street Name"], ["Postal Code", 58285]],
        address2: {postcode: 58289, country : "Germany"},
        greeting: function(){
            return ` Hello ${this.name}, you live in ${this.address2.country}`;
        },

    };
    console.log(user);
    console.log(user.greeting());

    for (let key in user) {
        console.log(user[key]);
    }
    console.log(Object.keys(user));
    console.log(Object.values(user));

    console.log('\n------------16---------');

    // 1. Create an object called personLiteral
let personLiteral = {
    name: "John Doe",
    age: 28,
    city: "New York"
};

// 2.Print the object to the console
console.log(personLiteral);

// 3.Create a Person object using a constructor function
function Person(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
}

let person2 = new Person("Jane Doe", 45, "London");
console.log(person2);
console.log(personLiteral.name);


//4. Modify the age property to be 35
personLiteral.age = 35;
console.log(personLiteral);



//5. Create an object called book
let book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publisher: {
        name: "J. B. Lippincott & Co.",
        year: 1960
    }
};

console.log(book);

//6. Use a loop to iterate through the book object and print each property and its value
for (let key in book) {
    console.log(`Property:${key},Value: ${book[key]}`);
  //if (typeof book[key] === "object") {
   // for (let nestedKey in book[key]) {
      //console.log(`${key}.${nestedKey}: ${book[key][nestedKey]}`);
    //}
  } 
  //else {
   // console.log(`${key}: ${book[key]}`);
  //}
//}

console.log('\n------------17---------');

// Challenge 1
let userOneProfile = {
  name: 'John Doe',
  age: 30,
  gender: 'Male',
  location: 'New York',
  interests: ['Coding', 'Music', 'Traveling']
};

console.log(userOneProfile.gender); // Prints: Male
console.log(userOneProfile.interests[1]); // Prints: Music

// Challenge 2
function printUserProfile(userProfile) {
  console.log(`Name: ${userProfile.name}`);
  console.log(`Age: ${userProfile.age}`);
  console.log(`Gender: ${userProfile.gender}`);
  console.log(`Location: ${userProfile.location}`);
  console.log(`Interests: ${userProfile.interests.join(', ')}`);
}

printUserProfile(userOneProfile); // Prints userOneProfile details

// Challenge 3
const actor = {
  name: 'Tom Hardy',
  age: 30,
  location: 'London',
  relationshipStatus: 'Single',
  occupation: 'Actor',
  bio: 'I just want a bloody steak with some chips.',
  interests: ['football', 'movies', 'Holidays', 'Music'],
  contact: {
      email: 'tom.hardy@tomhardy.com',
      phone: '030123456767',
      mobile: '1712',
     },
};

console.log(`Contact me at ${actor.contact.email}`);


console.log('\n------------18---------');
//Object.freeze(actor);
actor.name = "Leon";
console.log(actor);

console.log('\n------------19---------');
function Person1(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
}

let person3 = new Person1("Jane Doe", 45, "London");
console.log(person3);

console.log('\n------------20---------');

//Challenge 1: Creating the "person" object

const person = {
  name: "John",
  age: 25,
  gender: "Male",
  hobbies: ["reading", "painting", "running"],
};


//Challenge 2: Adding methods to the "person" object

person.introduce = function() {
  console.log(`My name is ${this.name}. I am ${this.age} years old and identify as ${this.gender}.`);
};

person.addHobby = function(hobby) {
  this.hobbies.push(hobby);
};

person.removeHobby = function(hobby) {
  const index = this.hobbies.indexOf(hobby);
  if (index !== -1) {
    this.hobbies.splice(index, 1);
  }
};

person.listHobbies = function() {
  this.hobbies.forEach(hobby => console.log(hobby));
};

person.listHobbies2 = function() {  
  this.hobbies.forEach(function(hobby) {
    console.log(hobby);
  });
}




//Challenge 3: Creating the "car" object

const car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  price: 25000,
};


//Challenge 4: Adding methods to the "car" object

car.checkProperty = function(property) {
  return this.hasOwnProperty(property);
};

car.calculateValue = function() {
  const currentYear = new Date().getFullYear();
  const age = currentYear - this.year;
  const depreciationRate = 0.1; // Assuming a 10% depreciation rate per year
  const currentValue = this.price * Math.pow((1 - depreciationRate), age);
  return currentValue;
};

console.log(car.make);

car.listValues = function() {
  return Object.values(this);
};

console.log(car.listValues());

car.listKeys = function() {
  return Object.keys(this);
};

console.log(car.listKeys());

car.listEntries = function() {
  return Object.entries(this);
};

console.log(car.listEntries());

car.lock = function() {
  Object.freeze(this);
};



car.createCopy = function(newMake, newModel) {
  const copy = Object.create(this);
  copy.make = newMake;
  copy.model = newModel;
  return copy;
};

console.log(car.createCopy("Honda", "Civic"));

car.updateInfo = function(newInfo) {
  Object.assign(this, newInfo);
};

console.log(car.updateInfo({make: "Honda", model: "Civic"}));

console.log(car);

console.log('\n------------21---------');

// Challenge 1
let [fruit, vegetable,food] = ["banana", "cucumber", "bread", "cakes", "pizza"];

console.log(fruit);

// Challenge 2
function sumAndMultiple([num1, num2]) {
    return {
        sum: num1 + num2,
        multiple: num1 * num2
    };
}
console.log(sumAndMultiple([2, 3]));


// Challenge 3
function getFullName({firstName, lastName}) {
    return `${firstName} ${lastName}`;
}
console.log(getFullName({firstName: "John", lastName: "Doe"}));


// Challenge 4
function getArrayStats(arr) {
    let [min, max] = [Math.min(...arr), Math.max(...arr)];
    return {
        length: arr.length,
        min,
        max
    };
}
console.log(getArrayStats([1, 2, 3, 4, 5, 6, 7, 8, 9]));

console.log('\n------------22---------');

//Create a function that checks if EVERY object in the array has a "website" property:
function checkWebsiteProperty(profiles) {
  return profiles.every(profile => profile.hasOwnProperty("website"));
}


//2. Create a function to FILTER the objects where `city: 'Leipzig'`:

function filterByCity(profiles) {
  return profiles.filter(profile => profile.city === "Leipzig");
}


//3. Create a function to check if SOME objects have interests in "JavaScript":

function checkJavaScriptInterest(profiles) {
  return profiles.some(profile => profile.interests.includes("JavaScript"));
}


//4. Create a function that MAPs the keys `name` & `profession` into a new array of objects:

function mapNameAndProfession(profiles) {
  return profiles.map(profile => ({ name: profile.name, profession: profile.profession }));
}


//5. Create a function that REDUCEs all `phoneNumber.telephone` values:

function reduceTelephoneValues(profiles) {
  return profiles.reduce((accumulator, profile) => {
    return accumulator.concat(profile.phoneNumber.telephone);
  }, []);
}


//6. Create a function to SORT the objects in alphabetical order based on the value of each `name` property:
function sortByName(profiles) {
  return profiles.sort((a, b) => a.name.localeCompare(b.name));

}


// Task 6
const isPrime = num => {
  for(let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++)
    if(num % i === 0) return false; 
  return num > 1;
};

// Task 7
const calculateDogYears = humanYears => humanYears * 7;

// Task 8
const isWaldoHere = str => str.toLowerCase().includes('waldo');

// Task 9
const filterSortMovies = movies => movies
  .filter(movie => movie.rating >= 4.0)
  .sort((a, b) => new Date(a.releaseDate) - new Date(b.releaseDate))
  .map(movie => movie.title);

// Task 10
const library = [/* your books here */];
const sortByPageCount = books => [...books].sort((a, b) => a.pages - b.pages);
const sortByReadStatus = books => [...books].sort((a, b) => a.read === b.read ? 0 : a.read ? 1 : -1);
const sortByTitle = books => [...books].sort((a, b) => a.title.localeCompare(b.title));

console.log('\n------------23---------');
const mathMethods = {
  addition(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
  },
  subtraction(...numbers) {
    return numbers.reduce((result, num) => result - num);
  },
  division(...numbers) {
    return numbers.reduce((result, num) => result / num);
  },
  multiplication(...numbers) {
    return numbers.reduce((result, num) => result * num, 1);
  }
};

const {subtraction, division, multiplication } = mathMethods;

// Usage examples:
console.log(addition(2, 3, 5)); // Output: 10
console.log(subtraction(10, 4, 2)); // Output: 4
console.log(division(20, 2, 5)); // Output: 2
console.log(multiplication(2, 3, 4)); // Output: 24

console.log('\n------------24---------');
class WaterTracker {
  static unit = "liters";
  constructor(waterIntakeGoal) {
    this.waterIntakeGoal = waterIntakeGoal;
    this.volumeConsumed = 0;
  }

  get progress() {
    const remaining = this.waterIntakeGoal - this.volumeConsumed;
    return `You have consumed ${this.volumeConsumed} ${WaterTracker.unit}, you still need ${remaining} ${WaterTracker.unit} to reach your goal.`;
  }

  set consume(amount) {
    this.volumeConsumed += amount;
    if (this.volumeConsumed >= this.waterIntakeGoal) {
      console.log("Congratulations! You have reached your water goal for the day.");
    } else {
      const remaining = this.waterIntakeGoal - this.volumeConsumed;
      console.log(`Keep drinking! You still need ${remaining} ${WaterTracker.unit} of water to meet your goal.`);
    }
  }

  static getUnit() {
    return this.unit;
  }
}

class personOne {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static species = "human";

  get info() {
    return `${this.name} is ${this.age} years old.`;
  }

  set age(newAge) {
    if (typeof newAge === "number" && newAge >= 1 && newAge <= 200) {
      this._age = newAge;
    } else {
      console.log("Only ages between 1 and 200 are valid.");
    }
  }

  static getSpecies() {
    return Person.species;
  }
}

const person9 = new Person("John");
person.updateAge = 30;
console.log(person.info);
console.log(Person.species);


console.log('\n------------25---------');


// Challenge 1
//class PersonTwo {
 /* constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  }


const person6 = new Person("John", 30);
person6.greet();/**/

console.log('\n------------26---------');


class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  study() {
    console.log(`I am studying in grade ${this.grade}.`);
  }
}

// Challenge 2
class Shape {
  constructor(color) {
    this.color = color;
  }

  getColor() {
    return this.color;
  }
}

class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius * this.radius;
  }
}

const circle = new Circle("red", 10);
console.log(circle.getColor());

// Challenge 3
class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  start() {
    console.log(`The ${this.make} ${this.model} ${this.year} is starting - vroom vroom!.`);
  }
}

class Car extends Vehicle {
  constructor(make, model, year, color) {
    super(make, model, year);
    this.color = color;
  }

  stop() {
    console.log(`The ${this.color} ${this.make} ${this.model} ${this.year} is stopping.`);
  }
}


console.log('\n------------27---------');

function generateRandomNumber(min, max) {
  
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(generateRandomNumber(1, 10));

console.log('\n------------28---------');

const array = ["one", "two", "three"];
for (let i = 0; i < array.length; i++) {
 console.log(array[i]);
}

console.log('\n------------29---------');
const myArray1 = ["one", "two", "three"];
myArray1.forEach(element => console.log(element));

console.log('\n------------30---------');
//We have the values 4,3,5,8; put these values in a array, sort this array and console.log() this array.
let myArray2 = [4,3,5,8];
myArray2.sort();
console.log(myArray2);

console.log('\n------------31---------');

function fizzBuzz(number) {
  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(40);

console.log('\n------------32---------');

//If a number is a multiple of 3 the function returns fizz If a number is a multiple of 5 the function returns buzz If a number is a multiple of 3 AND 5 the function returns fizzbuzz As a sequence it would be: 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, Fizz Buzz, 16, 17, Fizz, 19, Buzz, Fizz, 22, 23, Fizz, Buzz, 26, Fizz, 28, 29, Fizz Buzz, 31, 32, Fizz, 34, Buzz, Fizz

function fizzBuzz1(number) {
  for (let i = 1; i <= number; i++) {
    let output = "";
    if (i % 3 === 0) {
      output += "Fizz";
    }
    if (i % 5 === 0) {
      output += "Buzz";
    }
    console.log(output || i);
  }
}

fizzBuzz1(30);


console.log('\n------------33---------');

const fizzBuzz4 = () => {
  for (let i = 1; i <= 50; i++) {
     if (i % 3 === 0 && i % 5 === 0) {
      console.log ("FizzBuzz")
    }
   else if (i % 3 === 0) {
      console.log ("Fizz")
    }
    else if (i % 5 === 0) {
      console.log ("Buzz")
    }
    
    else {
      console.log(i);
    }
    
  }


}

fizzBuzz4 ()


console.log('\n------------34---------');
const inventors = [
  {
    first: "Albert",
    last: "Einstein",
    year: 1879,
    passed: 1955,
    categories: ["man", "physicist"],
  },
  {
    first: "Isaac",
    last: "Newton",
    year: 1643,
    passed: 1727,
    categories: ["man", "mathematician"],
  },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  {
    first: "Marie",
    last: "Curie",
    year: 1867,
    passed: 1934,
    categories: ["woman", "physicist"],
  },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  {
    first: "Katherine",
    last: "Blodgett",
    year: 1898,
    passed: 1979,
    categories: ["woman", "physicist"],
  },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  {
    first: "Lise",
    last: "Meitner",
    year: 1878,
    passed: 1968,
    categories: ["woman", "physicist"],
  },
  {
    first: "Hanna",
    last: "Hammarström",
    year: 1829,
    passed: 1909,
    categories: ["woman", "inventor"],
  },
];

// Array.prototype.filter()
// 1. Filter the list of inventors to retrieve only those born between 1500 and 1600
console.log("\n------------01---------");
const inventorsBornBetween1500And1600 = inventors.filter(
  (inventor) => inventor.year >= 1500 && inventor.year < 1600
);
console.log(inventorsBornBetween1500And1600);

// Array.prototype.filter()
// 2. Filter the list of inventors to retrieve only the ones that have the "mathematician" category
console.log("\n------------02---------");
const inventorsMathematician = inventors.filter(
  (inventor) =>
    inventor.categories && inventor.categories.includes("mathematician")
);
console.log(inventorsMathematician);

// Array.prototype.filter()
// 3. Filter the list of inventors to retrieve only the ones with the category === 'physicist' AND 'man'
console.log("\n------------03---------");
const inventorsMan = inventors.filter(
  (inventor) => inventor.categories && inventor.categories.includes("man")
);
console.log(inventorsMan);

// Array.prototype.map()
// 4. Give us an array filled only with the inventors last names
console.log("\n------------04---------");
const inventorsLastNames = inventors.map((inventor) => inventor.last);
console.log(inventorsLastNames);

// Array.prototype.map()
// 5. Give us an array filled only with the inventors emails
// the emails should be lowercase firstName + date of birth @ inventor.com
// eg: albert1879@inventor.com
console.log("\n------------05---------");
const inventorsEmails = inventors.map(
  (inventor) => inventor.first.toLowerCase() + inventor.year + "@inventor.com"
);
console.log(inventorsEmails);

// Array.prototype.sort()
// 6. Sort the inventors by birthdate, oldest to youngest
console.log("\n------------06---------");
const inventorsSortedByBirthdate = inventors.sort((a, b) => a.year - b.year);
console.log(inventorsSortedByBirthdate);

console.log("\n------------02---------");

function addMessage(message, me = true) {
  const template = `<div class="message">
    <div class="${me ? "myMessage" : "fromThem"}"
    data-date="${new Date().toLocaleTimeString()}">
      <p>${message}</p>
      <date> ${new Date().toLocaleTimeString()} </date>
    </div>
  </div>`;

  document.querySelector(".chat .messages").innerHTML += template;
}

function typing() {
  document.querySelector(".typing").classList.toggle("active");
  setTimeout(() => {
    document.querySelector(".typing").classList.toggle("active");
  }, 1000);
}
typing();

addMessage("Hi!", false);
addMessage("In this exercise you will work with events in JS", false);
addMessage("Let's go!");

/**
 * Listen to the submit of the form and add a new message
 * with addMessage()
 */
// Hint : event.preventDefault()
// Code here
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const message = document.querySelector("input").value;
  addMessage(message);
  document.querySelector("input").value = "";
});



/**
 * Listen to the click on each message and create an alert
 * https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
 */
// Bonus : Display the date of the message

// Code here
const messages = document.querySelectorAll(".message");
messages.forEach((message) => {
  message.addEventListener("click", () => {
    alert(message.dataset.date);
  });
});


/**
 * Listen to every Keydown (from the keyboard) in the input and call
 * the function typing()
 */

// Code here
const input = document.querySelector("input");
input.addEventListener("keydown", typing);



console.log('\n------------03---------');

// Array of book objects with information
const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
    { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 },
    { title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", year: 1997 },
];

// Function to create a new array with book titles and authors





// Function to filter books published after a certain year


// Use map to create a new array with book titles and authors
const bookInfoArray = books.map(extractBookInfo);

// Use filter to select books published after 1950
const modernBooks = books.filter(publishedAfterYear(1950));

// Print the original book data, book titles and authors, and modern books
console.log("Original Book Data:", books);
console.log("Book Titles and Authors:", bookInfoArray);
console.log("Modern Books (Published after 1950):", modernBooks);
