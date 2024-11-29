// JavaScript Data Types
// JavaScript provides different data types to store values. These types fall into two
// categories:
// primitive and non-primitive (objects). Here, we’ll focus on
// primitive data types: Number, String, Boolean, Undefined, Null, Symbol, and BigInt.

// Number
// Represents numeric values, including integers and floating-point numbers.
// Special values: Infinity, -Infinity, and NaN (Not-a-Number).

let age = 25; // Integer
let price = 19.99; // Floating-point
console.log(age, price); // Output: 25, 19.99

let sum = 5 + 10; // 15
let product = 3 * 7; // 21
let division = 10 / 2; // 5

console.log(1 / 0); // Infinity
console.log(-1 / 0); // -Infinity
console.log("hello" * 2); // NaN

console.log(Math.sqrt(16)); // 4
console.log(Math.random()); // Random number between 0 and 1

console.log(isNaN("abc")); // true
console.log(isNaN(123)); // false

// String
// Represents text values. Strings are enclosed in single ('), double ("),
// or backticks (`) for template literals.

let name = "Sunny";
let greeting = "Hello";
console.log(name, greeting); // Output: Sunny Hello

let text = "JavaScript";
console.log(text.length); // 10
console.log(text.toUpperCase()); // "JAVASCRIPT"
console.log(text.slice(0, 4)); // "Java"

let user = "Hussnain";
console.log(`Welcome, ${user}!`); // Output: Welcome, Hussnain!

let firstName = "Sunny";
let lastName = "Hussnain";
console.log(firstName + " " + lastName); // Sunny Hussnain

let sentence = 'This is "JavaScript"!';
console.log(sentence); // This is "JavaScript"!

// Boolean
// Represents two values: true or false.

let isTrue = true;
let isFalse = false;
console.log(isTrue, isFalse); // Output: true false

let isActive = true;
let isLoggedIn = false;
console.log(isActive, isLoggedIn); // Output: true false

console.log(5 > 3); // true
console.log(10 === 5); // false

console.log(true && false); // false
console.log(true || false); // true

let isAvailable = false;
console.log(!isAvailable); // true

let score = 90;
console.log(score > 50 ? "Pass" : "Fail"); // Pass

// Undefined
// A variable that has been declared but not assigned a value.

let x;
console.log(x); // Output: undefined

function greet() {}
console.log(greet()); // undefined

let obj = {};
console.log(obj.name); // undefined

let arr = [1, 2];
console.log(arr[3]); // undefined

console.log(typeof undefined); // "undefined"

// Null
// Represents an intentional absence of value.

let value = null;
console.log(value); // Output: null

console.log(typeof null); // "object" (historical bug)

console.log(null == undefined); // true
console.log(null === undefined); // false

function getData() {
  return null;
}
console.log(getData()); // null

let data = null;
data = "Updated";
console.log(data); // Updated

// Symbol
// Introduced in ES6, used to create unique identifiers.

let symbol = Symbol("unique");
console.log(symbol); // Output: Symbol(unique)

console.log(typeof symbol); // "symbol"

console.log(symbol.toString()); // Output: Symbol(unique)

let symbol1 = Symbol();
let symbol2 = Symbol("same");
console.log(symbol1, symbol2); // Output: Symbol(), Symbol(same)

console.log(symbol1 === symbol2); // false

// Data Type	Description
// Number	Represents numeric values (integer/float).
// String	Represents text values.
// Boolean	Represents true or false.
// Undefined	Declared but not assigned a value.
// Null	Represents an intentional absence of value.
// Symbol	Unique identifiers.
// BigInt	Very large integers.
