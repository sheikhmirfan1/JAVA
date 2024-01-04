

//Functions-II
/*
 * default parameters
 * the ...rest parameter
 * closures - function scope
 * higher order functions
 * callback functions - related to those array methods
 */


//Default parameter
function greetCustomer(customerName = "Customer") {
    return console.log(`Hello ${customerName}!`);
}

greetCustomer("Salma");
greetCustomer();

//...rest parameter: allows an indefinite number of arguments as an array
function addNumbers(...numbers){ // you can have more than one parameter, the last one should be the ...rest parameter
    let sum = 0;
    for(let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}
console.log(addNumbers(4, 6, 23, 90, 789789, 78));

//Higher order functions

//Callback function is a type of HOF - a function dependent on other functions

function doSomething(doSomethingElse) {
    // do some code
    console.log("code is executed");
    doSomethingElse();
}

function doSomethingElse() {
    // do some other code
    console.log("more code is executed");
}
doSomething(doSomethingElse);

function bakeACake(step1, step2, step3) {
    // this is the function that will return a baked cake
    step1();
    step2();
    step3();
    console.log("The cake is baked!");
}

function buyIngredients() {
    console.log("Your ingredients are bought");
}

function findRecipe() {
    console.log("You found a recipe");
}

function followRecipe() {
    console.log("You have correctly followed the recipe");
}

bakeACake(buyIngredients, findRecipe, followRecipe);
//buyIngredients();


// This function is going to add x, y, and z together, and display the result
// steps for a callback function to work:
/*
 - 
*/

function myFunction(x, y, z, callback){
    let result = x + y + z;
    callback(result, 10);
}

function displayResult(result, a) {
    //let a = 5;
    result += a;
    console.log(result);
}

myFunction(5, 10, 5, displayResult);



//Recursion : Recursion solves such recursive problems by using functions that call themselves from within their own code.

//Countdown from 10 - 0
function countdown(x) {
    if(x === 0) {
        console.log(x);
        console.log("countdown complete");
    } else {
    console.log(x);
    countdown(x-1);
    }
}
countdown(10);
countdown(5);

//Factorial: 5 * 4 * 3 * 2 * 1 
function factorial(num){
    if (num === 1) {
       return num;
    } else {
       return num * factorial(num - 1);
    }
}
console.log(factorial(5));

