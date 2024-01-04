"use strict";
/*
Create an array called cities with 5 cities of your choice in it. Using template literals, print the following message to the console: In my list of cities, the third city is 'PRINT THIRD CITY FROM ARRAY HERE' and the fifth city is 'PRINT FIFTH CITY FROM ARRAY HERE'.
Create the following array: let carManufacturers = [[‘BMW, [‘3 Series’, ‘4 Series’]], [Mercedes Benz, [‘C Class’, ‘S Class’] ], [‘Audi’, [‘RS6’, ‘RS7’]], [‘VW’, [‘Golf’, ‘Polo’]]]. From the following multi-dimensional array, access and print the following items to the console: BMW, S Class, RS6, VW.
Print the length of the cities and car Manufacturers array to the console.
*/

//Q1
let cities = ["Berlin", "London", "Paris", "Barcelona", "Johannesburg"];
console.log(`In my list of cities, the third city is ${cities[2]} and the fifth city is ${cities[4]}.`);

//Q2 -  BMW, S Class, RS6, VW.
let carManufacturers = [["BMW",["3 Series","4 Series"]],["Mercedes Benz",["C Class", "S Class"]],["Audi", ["RS6", "RS7"]],["VW",["Golf", "Polo"]]];
console.log(carManufacturers[0][0]);
console.log(carManufacturers[1][1][1]);
console.log(carManufacturers[2][1][0]);
console.log(carManufacturers[3][0]);

//Q3
console.log(cities.length);
console.log(carManufacturers.length);