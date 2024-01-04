'use strict';

//1.
let ambition = 'You become what you think about!';
let getThink = ambition.slice(20, 25);
let getThinkWithSubstr = ambition.substring(20, 25);

console.log('\n----------01----------');
console.log(getThink);
console.log(getThinkWithSubstr);

//2.
let question = 'Why are you running?';
let questionToUppercase = question.toUpperCase();

console.log('\n----------02----------');
console.log(questionToUppercase);

//3.
let word = 'Monospace';
let wordToLowercase = word.toLowerCase();

console.log('\n----------03----------');
console.log(wordToLowercase);

//4.
let programmingLanguage = 'JavaScript';

console.log('\n----------04----------');
console.log(programmingLanguage.substring(3, 6));

//5.
let movie = 'Star Wars';
let checkLetterR = movie.includes('R');
let checkLetterT = movie.includes('t');
let checkWordForRorT = movie.includes('R') || movie.includes('t');

console.log('\n----------05----------');
console.log(checkLetterR);
console.log(checkLetterT);
console.log(checkWordForRorT);

//6.
let string = 'Power';
let newString = string[0] + string + string[0];
let newStringCharAt = string.charAt(0) + string + string.charAt(0);

console.log('\n----------06----------');
console.log(newString);
console.log(newStringCharAt);

//7.
let specialAbility = 'Resilience';
let lastCharacters = specialAbility.slice(-3);
let newAbility = lastCharacters + specialAbility + lastCharacters;

console.log('\n----------07----------');
console.log(newAbility);

//8.
let popcorn = 'Popcorn';
let newPopcorn = popcorn.slice(6) + popcorn.slice(1, 6) + popcorn.charAt(0);

console.log('\n----------08----------');
console.log(newPopcorn);

//9.
let name = 'Bob';
let occupation = 'developer';
let salary = 200000;
let holidayDestination = 'Amus Chaltes in Italy';

let template = `I am ${name}, I am a ${occupation} and I earn €${salary} per year. I am travelling to ${holidayDestination} for holiday this summer.`;

console.log('\n----------09----------');
console.log(template);

//10.

let instruction = 'ask and ye shall receive.';
let newInstruction = instruction.charAt(0).toUpperCase() + instruction.slice(1);

console.log('\n----------10----------');
console.log(newInstruction);
