// Comment Your JavaScript Code (1)
// This is an in-line comment.
/* This is a multi-line comment */

// Declare JavaScript Variables (2)
var myName;

// Storing Values with the Assignment Operator(3)
var a;
a = 7;
console.log(a);

// Assigning the Value of One Variable to Another(4)
var a;
a = 7;
var b;
b = a;
console.log(b);

// Initializing Variables with the Assignment Operator(5)
var a = 9;

// Declare String Variables(6)
var myFirstName = "Akram";
var myLastName = "sheikh";

// Understanding Uninitialized Variables(7)
var a = 5;
var b = 10;
var c = "I am a";
a = a + 1;
b = b + 5;
c = c + " String!";
console.log(a, b, c);

// Understanding Case Sensitivity in Variables(8)
var studlyCapVar;
var properCamelCase;
var titleCaseOver;
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

// Explore Differences Between the var and let Keywords(9)
let catName = "Oliver";
let catSound = "Meow!";

// Declare a Read-Only Variable with the const Keyword(10)
const FCC = "freeCodeCamp";
let fact = "is cool!";
fact = "is awesome!";
console.log(FCC, fact);

// Add Two Numbers with JavaScript(11)
const sum = 10 + 10;
console.log(sum);

// Subtract One Number from Another with JavaScript(12)
const difference = 45 - 33;
console.log(difference);

// Multiply Two Numbers with JavaScript(13)
const product = 8 * 10;
console.log(product);

// Divide One Number by Another with JavaScript(14)
const quotient = 66 / 33;
console.log(quotient);

// Increment a Number with JavaScript(15)
let myVar = 87;
myVar++;
console.log(myVar);

// Decrement a Number with JavaScript(16)
// let myVar = 11;
// myVar--;
// console.log(myVar)

// Create Decimal Numbers with JavaScript(17)
var myDecimal = 0.009;

// Multiply Two Decimals with JavaScript(18)
const product2 = 2.0 * 2.5;
console.log(product2);

// Divide One Decimal by Another with JavaScript(19)
const quotientTwo = 4.4 / 2.0;
console.log(quotientTwo);

// Finding a Remainder in JavaScript(20)
const remainder = 11 % 3;
console.log(remainder);

// Compound Assignment With Augmented Addition(21)
let a = 3;
let b = 17;
let c = 12;
a += 12;
b += 9;
c += 7;
console.log(a, b, c);

// Compound Assignment With Augmented Subtraction(22)
let a = 11;
let b = 9;
let c = 3;
a -= 6;
b -= 15;
c -= 1;
console.log(a, b, c);

// Compound Assignment With Augmented Multiplication(23)
let a = 5;
let b = 12;
let c = 4.6;
a *= 5;
b *= 3;
c *= 10;
console.log(a, b, c);

// Compound Assignment With Augmented Division(24)
let a = 48;
let b = 108;
let c = 33;
a /= 12;
b /= 4;
c /= 11;
console.log(a, b, c);

// Escaping Literal Quotes in Strings(25)
// const myStr = 'I am a "double quoted" string inside "double quotes".';
// console.log(myStr);

// Quoting Strings with Single Quotes(26)
var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
console.log(myStr);

// Escape Sequences in Strings(27)
var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
console.log(myStr);

// Concatenating Strings with Plus Operator(28)
const myStr = "This is the start." + " This is the end.";
console.log(myStr);

// Concatenating Strings with the Plus Equals Operator(29)
let myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";
console.log(myStr);

// Constructing Strings with Variables(30)
const myName = "Md Akram Sheik";
const myStr = "Hello my name is " + myName + ", How are you?";
console.log(myStr);

// Appending Variables to Strings(31)
const someAdjective = "awesome!";
let myStr = "Learning to code is ";
myStr += someAdjective;
console.log(myStr);

// Find the Length of a String(32)
let lastNameLength = 0;
const lastName = "Lovelace";
lastNameLength = lastName.length;
console.log(lastNameLength);

// Use Bracket Notation to Find the First Character in a String(33)
let firstLetterOfLastName = "";
const lastName2 = "Lovelace";
firstLetterOfLastName = lastName2[0];
console.log(firstLetterOfLastName);

// Understand String Immutability(34)
let myStr = "Jello World";
myStr = "Hello World";
console.log(myStr);

// Use Bracket Notation to Find the Nth Character in a String(35)
const lastName3 = "Lovelace";
const thirdLetterOfLastName = lastName3[2];
console.log(thirdLetterOfLastName);

// Use Bracket Notation to Find the Last Character in a String(36)
const lastName4 = "Lovelace";
const lastLetterOfLastName = lastName[lastName4.length - 1];
console.log(lastLetterOfLastName);

// Use Bracket Notation to Find the Nth-to-Last Character in a String(37)
const lastName5 = "Lovelace";
const secondToLastLetterOfLastName = lastName[lastName5.length - 2];
console.log(secondToLastLetterOfLastName);

// Word Blanks(38)
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";
var wordBlanks =
  "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + ".";
console.log(wordBlanks);

// Store Multiple Values in one Variable using JavaScript Arrays(38)
// const myArray = ["cat",2];
// console.log(myArray)

// Nest one Array within Another Array(39)
// const myArray = [["Akram Sheikh", 23]];
// console.log(myArray)

// Access Array Data with Indexes(40)
// const myArray = [50, 60, 70, 90,100];
// const myData = myArray[0]
// console.log(myData)

// Modify Array Data With Indexes(41)
const myArray = [18, 64, 99];
myArray[0] = 45;
console.log(myArray);

// Access Multi-Dimensional Arrays With Indexes(42)
const myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

const myData = myArray[2][1];
console.log(myData);

// Manipulate Arrays With push Method(43)
const myArray = [
  ["John", 23],
  ["cat", 2],
];
myArray.push(["dog", 3]);
console.log(myArray);

// Manipulate Arrays With pop Method(44)
const myArray = [
  ["John", 23],
  ["cat", 2],
];
const removedFromMyArray = myArray.pop();
console.log(myArray, removedFromMyArray);

// Manipulate Arrays With shift Method(45)
const myArray = [
  ["John", 23],
  ["dog", 3],
];
const removedFromMyArray1 = myArray.shift();
console.log(myArray, removedFromMyArray1);

// Manipulate Arrays With unshift Method(46)
const myArray = [
  ["John", 23],
  ["dog", 3],
];
myArray.shift();
myArray.unshift(["Paul", 35]);
console.log(myArray);

// Shopping List(47)
const myList = [
  ["Akram Sheikh", 23],
  ["Rabbi", 22],
  ["Nasim Uddin", 24],
  ["Nasin Uddi", 28],
  ["Toha", 22],
];

// Write Reusable JavaScript with Functions(48)
function reusableFunction() {
  console.log("Hi World");
}

reusableFunction();

// Passing Values to Functions with Arguments(49)
function functionWithArgs(numOne, numTwo) {
  console.log(numOne + numTwo);
}
functionWithArgs(7, 9);

// Return a Value from a Function with Return(50)
function timesFive(number) {
  return number * 5;
}
const answer = timesFive(5);
console.log(answer);

// Global Scope and Functions(51)
let myGlobal = 10;

function fun1() {
  oopsGlobal = 5;
}

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

// Local Scope and Functions(52)
function myLocalScope() {
  const myVar = "My Local Scope";
  console.log("inside myLocalScope", myVar);
}
myLocalScope();
console.log("outside myLocalScope", myVar);

// Problem Number of 63
function testNotEqual(val) {
  if (val != 99) {
    return "Not Equal";
  }
  return "Equal";
}

console.log(testNotEqual(10));

// Problem Number of 64
function testStrictNotEqual(val) {
  if (val !== 17) {
    return "Not Equal";
  }
  return "Equal";
}

console.log(testStrictNotEqual(10));

// Comparison with the Greater Than Operator(65)
function testGreaterThan(val) {
  if (val > 100) {
    // Change this line
    return "Over 100";
  }

  if (val > 10) {
    // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

console.log(testGreaterThan(11));

// Comparison with the Greater Than Or Equal To Operator(66)

function testGreaterOrEqual(val) {
  if (val >= 20) {
    // Change this line
    return "20 or Over";
  }

  if (val >= 10) {
    // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

console.log(testGreaterOrEqual(9));

// Comparison with the Less Than Operator(67)
function testLessThan(val) {
  if (val < 25) {
    // Change this line
    return "Under 25";
  }

  if (val < 55) {
    // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

console.log(testLessThan(0));

// Comparison with the Less Than Or Equal To Operator(68)
function testLessOrEqual(val) {
  if (val <= 12) {
    // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {
    // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

console.log(testLessOrEqual(30));

// Comparisons with the Logical And Operator(70)
function testLogicalAnd(val) {
  // Only change code below this line

  if (val <= 50 && val >= 25) {
    return "Yes";
  }

  // Only change code above this line
  return "No";
}

console.log(testLogicalAnd(25));

// Comparisons with the Logical Or Operator(71)
function testLogicalOr(val) {
  // Only change code below this line

  if (val < 10 || val > 20) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

console.log(testLogicalOr(15));

// Introducing Else Statements(72)
function testElse(val) {
  let result = "";
  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }
  return result;
}

console.log(testElse(4));

// Introducing Else If Statements(73)
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }
}

console.log(testElseIf(7));

// Logical Order in If Else Statements(75)
function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

console.log(orderMyLogic(4));

// Chaining If Else Statements(76)
function testSize(num) {
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else if (num >= 20) {
    return "Huge";
  } else {
    return "Change Me";
  }
}

console.log(testSize(7));

// Golf Code(77)
const names = [
  "Hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home!",
];

function golfScore(par, strokes) {
  // Only change code below this line(78)
  if (strokes == 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes === par - 1) {
    return names[2];
  } else if (strokes === par) {
    return names[3];
  } else if (strokes === par + 1) {
    return names[4];
  } else if (strokes === par + 2) {
    return names[5];
  } else {
    return names[6];
  }
}

console.log(golfScore(4, 1));

// Selecting from Many Options with Switch Statements(79)
function caseInSwitch(val) {
  let answer = "";
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
  }
  return answer;
}

console.log(caseInSwitch(1));

// Adding a Default Option in Switch Statements(80)
function switchOfStuff(val) {
  let answer = "";
  switch (val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
      break;
  }
  return answer;
}

console.log(switchOfStuff(1));

// Multiple Identical Options in Switch Statements(81)
function sequentialSizes(val) {
  let answer = "";
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
  }
  return answer;
}

console.log(sequentialSizes(1));

// Replacing If Else Chains with Switch(82)
function chainToSwitch(val) {
  let answer = "";

  switch (val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
      break;
    default:
      answer = "";
  }
  return answer;
}

console.log(chainToSwitch(7));

// Returning Boolean Values from Functions(83)
function isLess(a, b) {
  return a <= b;
}

console.log(isLess(10, 15));

// Return Early Pattern for Functions
function abTest(a, b) {
  if (a < 0 || b < 0) {
    return undefined;
  }
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2, 2);

// Counting Cards
let count = 0;

function cc(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
}

cc(2);
cc(3);
cc(7);
cc("K");
cc("A");

// Build JavaScript Objects
const myDog = {
  name: "TOM",
  legs: 4,
  tails: 1,
  friends: ["Jarry", "jarin"],
};

// Accessing Object Properties with Dot Notation
const testObj1 = {
  hat: "ballcap",
  shirt: "jersey",
  shoes: "cleats",
};

const hatValue = testObj1.hat;
const shirtValue = testObj1.shirt;

console.log(hatValue);
console.log(shirtValue);

// Accessing Object Properties with Bracket Notation
const testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water",
};

const entreeValue = testObj["an entree"];
const drinkValue = testObj["the drink"];

console.log(entreeValue);
console.log(drinkValue);

// Accessing Object Properties with Variables
const testObj2 = {
  12: "Namath",
  16: "Montana",
  19: "Unitas",
};
const playerNumber = 16;
const player = testObj2[playerNumber];

console.log(player);

// Updating Object Properties
const myDog1 = {
  name: "Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
};
myDog1.name = "Happy Coder";
console.log(myDog1);

// Add New Properties to a JavaScript Object
const myDog2 = {
  name: "Happy Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
};

myDog2.bark = "Woof";

console.log(myDog2);

// Delete Properties from a JavaScript Object
const myDog3 = {
  name: "Happy Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
  bark: "woof",
};
delete myDog3.tails;
console.log(myDog3);

// Using Objects for Lookups
function phoneticLookup(val) {
  var result = "";
  var lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank",
  };
  result = lookup[val];
  return result;
}

phoneticLookup("alpha");

// Testing Objects for Properties
function checkObj(obj, checkProp) {
  let showObject = "";
  const hasObject = obj.hasOwnProperty(checkProp);
  if (hasObject == true) {
    showObject = obj[checkProp];
  } else {
    showObject = "Not Found";
  }
  return showObject;
}

console.log(checkObj({ gift: "pony", pet: "kitten", bed: "sleigh" }, "gift"));

// Manipulating Complex Objects
const myMusic = [
  {
    artist: "Billy Joel",
    title: "Piano Man",
    release_year: 1973,
    formats: ["CD", "8T", "LP"],
    gold: true,
  },
  {
    artist: "Bella Elish",
    title: "Hello Welcome Home",
    release_year: 2003,
    formats: ["CD", "8T", "LP"],
    gold: true,
  },
];

console.log(myMusic);

// Accessing Nested Objects
const myStorage = {
  car: {
    inside: {
      "glove box": "maps",
      "passenger seat": "crumbs",
    },
    outside: {
      trunk: "jack",
    },
  },
};

const gloveBoxContents = myStorage.car.inside["glove box"];

console.log(gloveBoxContents);

// Accessing Nested Arrays
const myPlants = [
  {
    type: "flowers",
    list: ["rose", "tulip", "dandelion"],
  },
  {
    type: "trees",
    list: ["fir", "pine", "birch"],
  },
];

const secondTree = myPlants[1].list[1];

// Record Collection
const recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};

function updateRecords(records, id, prop, value) {
  if (value === "") {
    delete records[id][prop];
  } else if (prop !== "tracks" && value !== "") {
    records[id][prop] = value;
  } else if (prop === "tracks" && value !== "") {
    if (records[id].hasOwnProperty("tracks") === false) {
      records[id][prop] = [];
    }
    records[id][prop].push(value);
  }
  return records;
}

console.log(updateRecords(recordCollection, 5439, "artist", "ABBA"));

// Iterate with JavaScript While Loops
const myArray = [];
let i = 5;
while (i >= 0) {
  myArray.push(i);
  i--;
}

console.log(myArray);

// Iterate with JavaScript For Loops
const myArray1 = [];
for (let i = 1; i <= 5; i++) {
  myArray1.push(i);
}
console.log(myArray1);

// Iterate Odd Numbers With a For Loop
const myArray2 = [];
for (let i = 1; i < 10; i += 2) {
  myArray2.push(i);
}
console.log(myArray2);

// Count Backwards With a For Loop
const myArray3 = [];

// Only change code below this line
for (let i = 9; i > 0; i -= 2) {
  myArray3.push(i);
}

console.log(myArray3);

// Iterate Through an Array with a For Loop
const myArr = [2, 3, 4, 5, 6];
let total = 0;
// Only change code below this line
for (let i = 0; i < myArr.length; i++) {
  console.log([i]);
  total += myArr[i];
}

console.log(total);

// Nesting For Loops
function multiplyAll(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product = product * arr[i][j];
    }
  }
  return product;
}

console.log(
  multiplyAll([
    [1, 2],
    [3, 4],
    [5, 6, 7],
  ])
);

// Iterate with JavaScript Do...While Loops
const myArray4 = [];
let k = 10;

// Only change code below this line
do {
  myArray4.push(k);
  k++;
} while (i < 5);

console.log(myArray4);
console.log(i);

// Replace Loops using Recursion
function sum(arr, n) {
  if (n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
}

console.log(sum([1], 0));

// Profile Lookup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      if (prop in contacts[i]) {
        return contacts[i][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}

console.log(lookUpProfile("Kristian", "lastName"));

// Generate Random Fractions with JavaScript
function randomFraction() {
  let result = 0;
  while (result === 0) {
    result = Math.random();
  }
  return result;
}

console.log(randomFraction());

// Generate Random Whole Numbers with JavaScript
function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}
console.log(randomWholeNum());

// Generate Random Whole Numbers within a Range
function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

console.log(randomRange(10, 30));

// Use the parseInt Function
function convertToInteger(str) {
  const convertToInteger = parseInt(str);
  return convertToInteger;
}

console.log(convertToInteger("56"));

// Use the parseInt Function with a Radix
function convertToInteger(str) {
  return parseInt(str, 2);
}

console.log(convertToInteger("10011"));

// Use the Conditional (Ternary) Operator
function checkEqual(a, b) {
  return a === b ? "Equal" : "Not Equal";
}

console.log(checkEqual(1, 2));

// Use Multiple Conditional (Ternary) Operators
function checkSign(num) {
  return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}

console.log(checkSign(0));

// Use Recursion to Create a Countdown
function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const arr = countdown(n - 1);
    arr.unshift(n);
    return arr;
  }
}
console.log(countdown(5));

// Use Recursion to Create a Range of Numbers
function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) {
    return [];
  } else {
    const numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}
console.log(rangeOfNumbers(1, 5));
