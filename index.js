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


