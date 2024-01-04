'use strict';

// let name = new String('Sponge Bob');
// console.log(name);

// Object

const bank = {
  name: 'Commerzbank',
  location: 'Frankfurt',
  customerName: 'Sherkhan',
  accountType: 'Checking',
  accountBalance: '€12.000.000,00',
  customerAge: 32,
  getAccountBalance: function () {
    return `Your current account balance is ${this.accountBalance}.`;
  },
};

console.log(bank);
console.log(bank.name);
console.table(bank);
console.log(bank.getAccountBalance());

// * Property
let longestEnglishWord = 'pneumonoultramicroscopicsilicovolcanoconiosis';
let getWordLength = longestEnglishWord.length;
console.log('\n----------LENGTH Property----------');
console.log(getWordLength);

// * Methods
// A method is an object key or property whose value is a function.

// ? String.prototype.toUpperCase()
let pangram = 'The quick brown fox jumps over the lazy dog';
// Saving the operation of converting the "pangram" variable value to uppercase into another variable to be used later if needed.
let pangramToUpperCase = pangram.toUpperCase();

console.log('\n----------toUpperCase() Method----------');
console.log(pangramToUpperCase);

// ? String.prototype.toLowerCase()
let famousQuestion = 'What color is your BUGATTI?';

console.log('\n----------toLowerCase() Method----------');
console.log(famousQuestion.toLowerCase());

// ? String.prototype.includes()
let statement =
  'I stand before you with a pure heart, telling you can be the best JavaScript Developer in the world.';

let checkIfSentenceIncludesHeart = statement.includes('Heart');

console.log('\n----------includes() Method----------');
console.log(checkIfSentenceIncludesHeart);

// ? String.prototype.match()
let heading = 'The heart from heart in deep of heart.';
let wordToMatch = 'heart';
let matchWord = heading.match(wordToMatch);

console.log('\n----------match() Method----------');
console.log(matchWord);

// ? String.prototype.matchAll()
let matchAllWords = [...heading.matchAll(wordToMatch)];

console.log('\n----------matchAll() Method----------');
console.log(matchAllWords);

// ? String.prototype.split()
let favoriteAdjective = 'Strong';
let favoriteQuote = `Kindness is like love just with it's work boots on.`;

console.log('\n----------split() Method----------');
console.log('Split word characters:', favoriteAdjective.split(''));
console.log('Split sentence characters:', favoriteQuote.split(''));
console.log('Split sentence words:', favoriteQuote.split(' '));
console.log('Split sentence words:', favoriteQuote.split('e'));

// ? String.prototype.trim()
let untrimmedString = `      Bob's your uncle!    `;

console.log('\n----------trim() Method----------');
console.log('Untrimmed:', untrimmedString);
console.log('Trimmed:', untrimmedString.trim());

// ? String.prototype.slice()
let dry = `Do not repeat yourself!`;

console.log('\n----------slice() Method----------');
console.table(dry.split(''));
console.log(dry.slice(7));
console.log(dry.slice(7, 13));
console.log(dry.slice(-9));

// ? String.prototype.search()
let searchWords = `8K OLED TV with 240Hz Refresh Rate`;

console.log('\n----------search() Method----------');
console.log(searchWords.search('OLED'));
console.log(searchWords.search('cat'));

// ? String.prototype.replace()
let auctionPrice = `The Ferrari Enzo costs €1.000.000.`;
let updateAuctionPrice = auctionPrice.replace('€1.000.000', '€50');

console.log('\n----------replace() Method----------');
console.log(auctionPrice);
console.log(updateAuctionPrice);

// ? String.prototype.at()
let weatherForecast = 'Rainy with a chance of snow.';

console.log('\n----------at() Method----------');
console.log(weatherForecast.at(6));
console.log(weatherForecast.at(100));

let firstName = 'Alex';
let lastName = 'Apostol';
let initials = `${firstName.at(0)}${lastName.at(0)}`;

console.log(`This customer initials is ${initials}`);

// ? String.prototype.indexOf()
let destination = `I would like to be there on time.`;

console.log('\n----------indexOf() Method----------');
console.log(destination.indexOf('Time'));
console.log(destination.indexOf('London'));

// ? String.prototype.substring()
let companyName = 'Beam';

console.log('\n----------substring() Method----------');
console.log(companyName.substring(1));
console.log(companyName.substring(1, 3));
