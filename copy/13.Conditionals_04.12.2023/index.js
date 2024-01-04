"use strict";

//IF.. ELSE statements syntax
// if(/* condition evaluates to a boolean (TRUE or FALSE) */) {
//     //code to execute if the statement/condition is TRUE
// } else {
//     //code to execute if the statement/condition is FALSE
// }

const myNumber = 13;
const myNumber2 = 20;

if(myNumber === 10) {
    console.log("My number is 10."); //if true
    
} else {
    console.log("My number is not 10."); // if false
}

//check if the numbers are more than 5 and less than or equal to 20
if((myNumber > 5 && myNumber <= 20) && (myNumber2 > 5 && myNumber2 <= 20)) {
    console.log("Both numbers are within the required range."); // if true
} else {
    console.log("Both numbers are NOT within the required range."); // if false
}

// //IF.. ELSE IF.. ELSE..
// if (/* condition 1 to be met */) {
//     //execute this block of code if condition 1 is met (TRUE)
// } else if (/* condition 2 to be met */){
//     // execute this block of code if condition 1 is NOT met but condition 2 IS met
// } else {
//     // execute this block if neither conditions are met (FALSE)
// }

const userAge = 17;
const userPermission = false;

if (userAge >= 18) {
    console.log("You can register because you are at least 18.");
} else if (userPermission === true) {
    console.log("You can register because you have parental permission.");
} else {
    console.log("Sorry, you cannot register on our platform!");
}

// nested IF..ELSE statements
// if(/* condition 1 */) {
//     if(/* condition 1.2 */) {
//         // execute if condition 1 and 1.2 are TRUE
//     } else {
//         // execute if condition 1 is TRUE and 1.2 is FALSE
//     }

// } else {
//     // execute if condition 1 is FALSE
// }

const temperatureToday = 31;
const timeOfDay = "Morning";

if (temperatureToday > 25) {
    //some code to be executed based on the temperature being over 25
    if(timeOfDay === "Morning"){
        //some code to be executed based on the temperature being over 25 AND time of day being morning
        console.log(`Good morning, it is a hot day today, the temperature is ${temperatureToday}`);
    } else if (timeOfDay === "Afternoon"){
        //some code to be executed based on the temperature being over 25 AND time of day being afternoon
        console.log(`Good afternoon, it is a hot day today, the temperature is ${temperatureToday}`);
    } else {
        //some code to be executed based on the temperature being over 25 AND time of day NOT being morning or afternoon
        console.log(`Good ${timeOfDay}, it is a hot day today, the temperature is ${temperatureToday}`);
    }
} else {        
    //some code to be executed based on the temperature being below 25
    if(timeOfDay === "Morning"){
        //some code to be executed based on the temperature being over 25 AND time of day being morning
        console.log(`Good morning, it is a cold day today, the temperature is ${temperatureToday}`);
    } else if (timeOfDay === "Afternoon"){
        //some code to be executed based on the temperature being over 25 AND time of day being afternoon
        console.log(`Good afternoon, it is a cold day today, the temperature is ${temperatureToday}`);
    } else {
        //some code to be executed based on the temperature being over 25 AND time of day NOT being morning or afternoon
        console.log(`Good ${timeOfDay}, it is a cold day today, the temperature is ${temperatureToday}`);
    }
}

//ternary operator - simple conditions ONLY
// condition ? (some code will execute - true) : (some other code will execute - false)
myNumber === 10 ? console.log("the number is 10") : console.log("the number is not 10");

// if(myNumber === 10) {
//     console.log("My number is 10."); //if true
    
// } else {
//     console.log("My number is not 10."); // if false
// }

// switch statement

// switch (/* expression  */) {
//     case /* value */: 
//     //code to execute if the case matches the expression
//     case /* value */: 
//         //code to execute if the case matches the expression

//     case /* value */: 
//     default: //code to execute if none of the cases match

// }

//temperatureToday = 31; timeOfDay = night
// without the break statement, all code will execute
switch(true){
    case temperatureToday > 25: //true
        console.log("It is a hot day today.");
        switch(timeOfDay) {
            case "Morning": 
                console.log("Have a good morning!");
                break;
            case "Afternoon":
                console.log("Have a good afternoon!");
                break;
            default:
                console.log("Have a great day!");
        }
        break;
    case (temperatureToday < 25): //false
        console.log("It is a cold day today.");
       break;
    default:
        console.log("It is a day today.");
}

const food = "Pasta";

switch(food) {
    case "Pizza":
        console.log("We have 5 recipes for pizza");
        break;
    case "Sushi":
        console.log("We have 2 sushi recipes");
        break;
    default:
        console.log(`Sorry, we can't provide any recipes for ${food}`); //string interpolation
        console.log("Sorry, we can't provide any recipes for " + food);
}

//check if the number is even (it is divisible by 2 exactly) or odd (it is not exactly divisible by 2)
let number = 232567890;

function checkNum(num){
if(num % 2 === 0) {
    console.log("the number is even");
} else if(num % 2 === 1){
    console.log("the number is odd");
} else {
    console.log("This is not a number.");
}
}

checkNum(49857489573838);
checkNum(49857489573839);


let string = "Hello";
let reverseString = string.split("").reverse().join("");
console.log(reverseString);