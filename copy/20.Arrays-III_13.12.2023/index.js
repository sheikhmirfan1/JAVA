"use strict";

//Array Methods using callback functions
// Scenario: a bookstore inventory application to manage the inventory of the bookstore

//Array of objects
let bookstoreInventory = [
    {id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classic", price: 9.99, stock: 45},
    {id: 2, title: "1984", author: "George Orwell", genre: "Dystopian", price: 12.99, stock: 8},
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

// .every() - Checks if EVERY element passes a certain condition 
console.log("--- Checking stock availability of books");
let isAllStockAvailable = bookstoreInventory.every(book => book.stock > 0);
console.log(isAllStockAvailable ? "All books are in stock" : "Some books are out of stock"); // Ternary operator - if and else
// The return type of the array method is a boolean value (true or false)

// .map() - returns a new array based on the instructions set out in the callbackFn
// make sure your returned '{object}' is within parenthesis like: ({})
console.log("--- Creating a sale list from the inventory");
let salePriceList = bookstoreInventory.map(book => ({id: book.id, title: book.title, originalPrice: book.price, salePrice: Number.parseFloat((book.price * 0.8).toFixed(2))})); // math.round( book.price * 100)
salePriceList.forEach(saleBook => console.log(`Book title: ${saleBook.title} - Sale Price ${saleBook.salePrice} - Original price: ${saleBook.originalPrice}`));

// .some() - checks if at least ONE element passes a certain condition
console.log("--- Check if the inventory has at least one dystopian book");
let dystopianGenreBooks = bookstoreInventory.some(book => book.genre === "Dystopian");
console.log(dystopianGenreBooks ? "The store has at least one dystopian book" : "Sorry, no dystopian books!");
//Return type of some() method is TRUE if at least one passes condition, FALSE is none of them pass the condition (boolean)

// .reduce() - takes two parameters
console.log("--- Total stock of inventory");
let inventoryStockTotal = bookstoreInventory.reduce((total, book) => total + book.stock, 0);
console.log("Total number of books in the store: " + inventoryStockTotal);

console.log("--- Total value of the stock");
let inventoryValueTotal = bookstoreInventory.reduce((totalValue, book) => totalValue + (book.price * book.stock), 0);
console.log("The total value of all stock of books is: $" + inventoryValueTotal);
// The return type of the reduce() method is a single value based on the added values in the callbackFn 

// Adding strings together: (returns a string)
// let foods = ["mushrooms", "wine", "onions"];
// let mixedFoods = foods.reduce((mixedTotal, food) => mixedTotal + food);
// console.log(mixedFoods);

// .sort() - sort elements by a condition in the original array
console.log("--- Sort books by price");
let sortedBooksByPrice = bookstoreInventory.sort((a, b) => a.price - b.price);
sortedBooksByPrice.forEach(book => console.log(`Book title: ${book.title} Price: ${book.price}`));
// sort method returns a new array with the sorted elements and changes the original array

//Sort alphabetically a-z (sorting strings not numbers)
// let sortedBooksByTitle = bookstoreInventory.sort((a,b) => a.title.localeCompare(b.title));
// console.log(sortedBooksByTitle);

// .findIndex() - find the first index of a book
console.log("--- Index of book 'Things Fall Apart'");
let indexOfBook = bookstoreInventory.findIndex(book => book.title === "Things Fall Apart");
console.log(indexOfBook); // sorted array changed the index of the book - the result is 3

//.findLastIndex() - the last index of the book
console.log("--- Last index of 'Things Fall Apart'");
let lastIndexOfBook = bookstoreInventory.findLastIndex(book => book.title === "Things Fall Apart");
console.log(lastIndexOfBook);
// return type is the index of the element, if not found returns -1
