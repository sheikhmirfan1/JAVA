'use strict';

// 1.

let aboutCats =
  "Cats' independent nature makes them popular pets \nfor those who want a low-maintenance companion. \nThey are known for their 'playful' behavior and \ntheir ability to 'groom' themselves, which reduces \nthe need for constant human attention. However, \ndespite their aloof demeanor, cats can be very \n'affectionate' towards their owners and may even \nshow signs of 'jealousy' if they feel their human \nis giving attention to someone else. Overall, cats \nare fascinating creatures that have been beloved by \nhumans for thousands of years.";

console.log('\n----------Question 1----------');
console.log(aboutCats);

// 2.
let sentence = 'Hello "Mr. Jones".';

console.log('\n----------Question 2----------');
console.log(sentence);

//3.
let favoriteCity = `Constanța`;

console.log('\n----------Question 3----------');
console.log(favoriteCity);

//4.

let person = 'James';
let occupation = 'Designer';
let experience = '10 years';
let stringConcat =
  person +
  ' is a ' +
  occupation +
  ' with over ' +
  experience +
  ' of experience.';

console.log('\n----------Question 4----------');
console.log(stringConcat); // Expected result: James is a Designer with over 10 years of experience.

//5.
let templateString = `${person} is a ${occupation} with over ${experience} of experience.`;

console.log('\n----------Question 5----------');
console.log(templateString);

// ! Future Reference
// let productName = 'ASUS PG 27 OLED Monitor';
// let productPrice = '€1050';
// let deliveryTimeline = 2;

// let arrayOfProducts = [
//   {
//     productName: 'ASUS PG 27 OLED Monitor',
//     productPrice: '€1050',
//     deliveryTimeline: 2,
//   },

//   {
//     productName: 'LG OLED',
//     productPrice: '€799',
//     deliveryTimeline: 1,
//   },

//   {
//     productName: 'Corsair 27 OLED',
//     productPrice: '€999',
//     deliveryTimeline: 3,
//   },
// ];

// for (const item of arrayOfProducts) {
//   //   console.log(item.productName);

//   let productTemplate = `${item.productName}. Price is ${item.productPrice} . Delivery possible in ${item.deliveryTimeline} days.`;

//   console.log(productTemplate);
// }

// let productTemplate = `${productName}. Price is ${productPrice} . Delivery possible in ${deliveryTimeline} days.`;

// console.log(productTemplate);
