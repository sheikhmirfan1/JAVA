"use strict";


// Objects II : more object methods
// Scenario: product inventory to manage
// Use a constructor function to create a product constructor
// create instances of the product object from our function
// create methods to display product details, change price items, change a product to read-only, 
 // merge objects, get property names and values, make copies of the product

 let products = [
    {
        id:1,
        title:'iPhone 12',
        price: 400,
        category: 'Smartphones', 
        description:'Apple iPhone 12',
        image:'/www.google.com'
    },
    {
        id:2,
        title:'Samsung S20',
        price: 450,
        category: 'Smartphones', 
        description:'Samsung S20 ',
        image:'/www.google.com'
    }
 ]

 //Built in JS constructor functions:
//  const number = new Number(6); creating an INSTANCE of the object from the constructor function
//  console.log(typeof number);


// Product constructor function returns an object instance of product - we do not need to use a return keyword
function Product(id, title, price, category, description, image) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.category = category;
    this.description = description;
    this.image = image;
}

const newProduct = new Product(3, "iPhone 14", 500, "Smartphones", "Apple iPhone 14", "/someimage.jpg");
console.log(newProduct);
products.push(newProduct);
console.log(products);

// Object methods are going to be added to the Product prototype
Product.prototype.displayDetails = function () {
    console.log("--- Product Details:");
    console.log(`Title: ${this.title}, Price: ${this.price}`);
}

Product.prototype.changePriceBy100 = function () {
    this.price = this.price - 100;
    console.log(`Price of ${this.title} has changed by 100. Price is now ${this.price}`);
}


newProduct.displayDetails(); // this method is only available on Product()

const myArray = [2,4,7];
//myArray.displayDetails(); // this function is not available on type Array: TypeError: myArray.displayDetails is not a function

newProduct.changePriceBy100();

// built in Object datatype methods

// Object.freeze() - makes the instance of the object immutable: cannot change properties, or add properties or its values
// Object.seal() - allows changes to writable properties - different use cases to freeze method
// use defineProperties() method on an object to make PROPERTIES read-only (set writable to false)
let bankObj = { 
    accName: "Salma",
    accNumber: 93284
}

//Make one property read-only
Object.defineProperties(obj, {accNumber: {value: 93284, writable: false}});
// obj.accNumber = 908430924834; TypeError: Cannot assign to read only property 'accNumber' of object '#<Object>'



// Object.freeze(newProduct);
// newProduct.category = "Laptops"; returns TypeError: Cannot assign to read only property 'category' of object '#<Product>'
// will not freeze a nested object

// Object.assign() - combine objects together into a target object (can be empty object), returns the combined object
const combinedProduct = Object.assign({}, newProduct, {saleItem: true});
console.log(combinedProduct);

// Get property names and values from the objects - return an ARRAY
// Object.keys() - properties;
let productKeys = Object.keys(newProduct);
console.log(productKeys);
let productValues = Object.values(newProduct);
console.log(productValues);

// Make a shallow copy of the object - spread operator
const copiedProduct = { ...newProduct };
console.log(copiedProduct);

