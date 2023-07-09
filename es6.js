// Compare Scopes of the var and let Keywords(1)
function checkScope() {
  let i = "function scope";
  if (true) {
    let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}

checkScope();

// Mutate an Array Declared with const(2)
const s = [5, 7, 2];
function editInPlace() {
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
}
console.log(editInPlace());
console.log(s);

// Prevent Object Mutation(3)
function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14,
  };
  Object.freeze(MATH_CONSTANTS);
  try {
    MATH_CONSTANTS.PI = 99;
  } catch (ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
console.log(PI);

// Use Arrow Functions to Write Concise Anonymous Functions(4)
const magic = () => {
  return new Date();
};
console.log(magic());

// Write Arrow Functions with Parameters(4)
const myConcat = (arr1, arr2) => {
  return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));

// Set Default Parameters for Your Functions(5)
const increment = (number, value = 1) => number + value;
console.log(increment(5));

// Use the Rest Parameter with Function Parameters(6)
const sum = (...args) => {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
};

console.log(sum(0));

// Use the Spread Operator to Evaluate Arrays In-Place(7)
const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];
let arr2;

arr2 = [...arr1];

console.log(arr2);

// Use Destructuring Assignment to Extract Values from Objects(8)
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80,
};
const { today, tomorrow } = HIGH_TEMPERATURES;

console.log(today, tomorrow);

// Use Destructuring Assignment to Assign Variables from Objects(9)
const HIGH_TEMPERATURES2 = {
  yesterday: 75,
  today: 77,
  tomorrow: 80,
};

const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES2;

console.log(highToday);
console.log(highTomorrow);

// Use Destructuring Assignment to Assign Variables from Nested Objects(10)
// const LOCAL_FORECAST = {
//   yesterday: { low: 61, high: 75 },
//   today: { low: 64, high: 77 },
//   tomorrow: { low: 68, high: 80 }
// };
// const { today: { low: lowToday, high: highToday } } = LOCAL_FORECAST;

// console.log(lowToday, highToday)

// Use Destructuring Assignment to Assign Variables from Arrays(11)
let a = 8,
  b = 6;
[a, b] = [b, a];
console.log(a, b);

// Destructuring via rest elements(12)
function removeFirstTwo(list) {
  const [, , ...shorterList] = list;
  return shorterList;
}

const source = [1, 2, 3, 4, 5];
const sourceWithoutFirstTwo = removeFirstTwo(source);
console.log(sourceWithoutFirstTwo);
