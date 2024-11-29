// File: templateLiterals.js
// Description: This file explains and demonstrates the usage of Template Literals in JavaScript.
// Template Literals make string handling easier by allowing embedded expressions, multi-line strings,
// and dynamic string construction. Introduced in ES6, Template Literals use backticks (` `).

// --------------------------------------------
// **1. Simple Template Literal**
// Template Literals use backticks (` `) instead of single (' ') or double (" ") quotes.
// This allows strings to contain special formatting or variables directly.
const greeting = `Hello, World!`; // A simple string using backticks
console.log(greeting); 
// Output: Hello, World!

// --------------------------------------------
// **2. Embedded Expressions**
// Using the `${}` syntax, you can insert variables or JavaScript expressions directly inside strings.
const name = "Sunny"; // A variable holding a name
const age = 25;       // A variable holding an age
// Embedding variables in the string
const introduction = `My name is ${name} and I am ${age} years old.`;
console.log(introduction); 
// Output: My name is Sunny and I am 25 years old.

// --------------------------------------------
// **3. Multi-line Strings**
// With Template Literals, creating multi-line strings is simple—no need for escape sequences like \n.
const multiLineString = `This is a string
that spans multiple
lines easily.`;
console.log(multiLineString);
/*
Output:
This is a string
that spans multiple
lines easily.
*/

// --------------------------------------------
// **4. Complex Expressions**
// Template Literals allow calculations or any JavaScript code within `${}`.
const a = 5; // First number
const b = 10; // Second number
// Performing arithmetic operations within the string
const result = `The sum of ${a} and ${b} is ${a + b}.`;
console.log(result); 
// Output: The sum of 5 and 10 is 15.

// --------------------------------------------
// **5. Using Functions Inside Template Literals**
// You can call functions directly in Template Literals.
// Below, we use a function to dynamically get the current time.
function getTime() {
  return new Date().toLocaleTimeString(); // Returns the current time as a string
}
const timeMessage = `The current time is ${getTime()}.`;
console.log(timeMessage);
// Output: The current time is HH:MM:SS (time will vary based on when you run this code)

// --------------------------------------------
// **6. Tagged Templates**
// Tagged Templates let you customize string processing with a function.
// The tag function receives two arguments:
// 1. An array of literal strings (static parts of the template).
// 2. Substitution values (dynamic parts of the template).
function tagFunction(literals, ...values) {
  console.log("Literals:", literals); // Static parts of the template
  console.log("Values:", values);     // Dynamic parts of the template
  return `${literals[0]}${values[0]}${literals[1]}${values[1]}${literals[2]}`;
}
const taggedResult = tagFunction`The price is ${100} dollars, with tax ${10}.`;
console.log(taggedResult); 
// Output:
// Literals: [ 'The price is ', ' dollars, with tax ', '.' ]
// Values: [ 100, 10 ]
// The price is 100 dollars, with tax 10.

// --------------------------------------------
// **7. Dynamic HTML String Construction**
// Template Literals are especially useful for generating dynamic HTML or JSON content.
const product = "Laptop"; // Product name
const price = 1500;       // Product price
// Constructing an HTML snippet using a Template Literal
const dynamicHTML = `
  <div>
    <h1>Product: ${product}</h1>
    <p>Price: $${price}</p>
  </div>
`;
console.log(dynamicHTML);
/*
Output:
<div>
  <h1>Product: Laptop</h1>
  <p>Price: $1500</p>
</div>
*/

// --------------------------------------------
// **8. Escaping Backticks**
// To include a backtick character (`) in your Template Literal, use the escape sequence \`.
const escaped = `This is a backtick: \``; // Escaping a backtick inside a Template Literal
console.log(escaped); 
// Output: This is a backtick: `

// --------------------------------------------
// **9. Common Mistakes and Notes**
// - Mixing backticks and other quotes can cause syntax errors.
// - Be cautious about unintended type conversions inside `${}` (e.g., undefined or null values).

// Example: Handling null or undefined values safely
let userName = null;
const welcomeMessage = `Hello, ${userName || "Guest"}!`; // Fallback to "Guest" if userName is null
console.log(welcomeMessage);
// Output: Hello, Guest!

// --------------------------------------------
// **Summary**
// Template Literals are powerful for:
// - Embedding expressions (`${}`)
// - Writing multi-line strings
// - Constructing dynamic strings (e.g., HTML, JSON)
// - Custom string processing with tagged templates
// Experiment with the examples to understand their versatility!
