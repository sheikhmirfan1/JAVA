'use strict';

let string = 'abcdefgh1234567890@$£#';

let word = 'Wife';
let sentence = 'My wife is on her way home.';
let leonEarns = '€3.000.000,00';

// Strings can be written with single or double quotes

// * Escaping special characters by switching quote types single <--> double

let message = "Leon's Bugatti is a 1 of 1.";
// let message = 'Leon\'s Bugatti is a 1 of 1.'; // ?Escaping using backslash

let important = 'The awards say "Best" on it.';
// let important = "The awards say \"Best\" on it."; // ? Escaping using backslash

let multilineString =
  'I met a traveller from an antique land, \nWho said—“Two vast and trunkless legs of stone \nStand in the desert. . . . Near them, on the sand, \nHalf sunk a shattered visage lies, whose frown, \nAnd wrinkled lip, and sneer of cold command, \nTell that its sculptor well those passions read \nWhich yet survive, stamped on these lifeless things, \nThe hand that mocked them, and the heart that fed; \nAnd on the pedestal, these words appear: \nMy name is Ozymandias, King of Kings; \nLook on my Works, ye Mighty, and despair! \nNothing beside remains. Round the decay \nOf that colossal Wreck, boundless and bare \nThe lone and level sands stretch far away.”';

console.log('Multiple line string:\n', multilineString);

// TODO
// Please look up the history of the JS ES6 update aka ES2015. Check the important updates that came with the release.

// * String Concatenation
// Pre-ES6 update concatenation method

let studentName = 'Alex';
let introduction = 'Hello, My name is' + ' ' + studentName;

console.log('\nString Concatenation:', introduction);

// Template Literals or Strings
// Escaping Special characters or new line

let excerptFromTheSecondComing = `Turning and turning in the widening gyre   
The falcon cannot hear the falconer;
Things fall apart; the centre cannot hold;
Mere anarchy is loosed upon the world,
The blood-dimmed tide is loosed, and everywhere   
The ceremony of innocence is drowned;
The best lack all conviction, while the worst   
Are full of passionate intensity.`;

let sermonTheme = `God's love has no measure.`;

// * String Interpolation

let currentYear = 2023;
let dateOfBirth = 1948;

let ageResult = `You are currently ${currentYear - dateOfBirth} years old.`;

console.log('\n----------STRING INTERPOLATION----------');
console.log(ageResult);
