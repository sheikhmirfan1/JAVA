//Variables, datatypes

//Keywords for creating variables: let, const, var
//let keyword allows you to change the value stored in the variable
let age = 10;
console.log(age);
console.log(age);
console.log("My name is Salma");

age = 11;
console.log(age);

//const does not allow you to change the value stored in the variable
const name = "Salma";
const pi = 3.14;
console.log(name);

//name = "New Name";

console.log(name);

//You cannot redeclare a variable with the same name
// let age = 30;

//camelCase for naming variables, they are case sensitive
let firstNameOfUser = "camelCase";
let firstnameofuser = "notcamelcase";
console.log(firstNameOfUser, firstnameofuser);

//You can declare variables without initiialising them - the value is then 'undefined'
let lastName;
console.log(lastName);
lastName = "My Last Name";
console.log(lastName);

//Anything inside inverted commas is regarded as the datatype string. You can store multiple strings inside a variable using the + operator
let fullName = firstNameOfUser + " " + lastName;
console.log(fullName);

//If you have two number variables, you can perform arithmetic operations using + - * /
let x = 5;
let y = 10;
let z = x + y + y + x;
console.log(z);

/*
In JS you have two classes of datatypes:
- Primitive datatypes: string, number, boolean (true/false), undefined, null 
- Structural datatypes: array, object, function, date, regexp
*/

//Primitive Datatypes

//strings
const myString =
  "384y830hrjoie||''p[p975498    5740theoj = m() gndlkgnelkgnewklghUHJHJhdjfnekj";
const myOtherString = "utirhgo49ut3-913";
const myOtherString2 = `My name is ${name}`;
const myOtherString3 = `My name is ` + name;
console.log(myString);
console.log(myOtherString2);

//numbers
const myNumber = 4;
const myOtherNumber = -4.29750425;

//boolean
let myBoolean = true;
let myBoolean2 = false;

//undefined
let myUndefined;
//All const variables need to be assigned a value
//const myUndefinedVariable;
console.log(myUndefined);

//null 
let myNull = null;
console.log(myNull);

//Structural datatypes

//array
let myArray = ["salma", 60, true, myNull];
let countries = ["Greece", "Germany", "France", "Italy"];
console.log(myArray);

//object
let myObject = {
    firstName: "salma",
    age: 60,
    subscribed: true,
    comment: myNull
}
console.log(myObject);

//function
function calculateNumbers(a, b) {
    //block of code which is a set of instructions to execute when you call this function
    return a + b - (b/a) * 2;
}

console.log(calculateNumbers(4, 10));
console.log(calculateNumbers(6, 20));