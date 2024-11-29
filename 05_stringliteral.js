// File: templateLiterals.js
// Description: Demonstrates the usage of Template Literals in JavaScript

// **1. What are Template Literals?**
// Template Literals, introduced in ES6, are a more powerful way of working with strings in JavaScript.
// They allow embedded expressions, multi-line strings, and improved readability using backticks (` `) instead of quotes.

// Example of a Template Literal
const greeting = `Hello, World!`; // Simple string using backticks
console.log(greeting); // Output: Hello, World!

// **2. Embedded Expressions** 
// Template Literals allow you to embed expressions directly into strings using ${expression} syntax.
const name = "Sunny";
const age = 25;
const introduction = `My name is ${name} and I am ${age} years old.`;
console.log(introduction); 
// Output: My name is Sunny and I am 25 years old.

// **3. Multi-line Strings**
// Template Literals support multi-line strings without needing escape characters (\n).
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

// **4. Nesting Expressions**
// You can nest complex expressions inside ${}.
const a = 5;
const b = 10;
const result = `The sum of ${a} and ${b} is ${a + b}.`;
console.log(result); 
// Output: The sum of 5 and 10 is 15.

// **5. Using Functions Inside Template Literals**
// You can call functions and include their return values.
function getTime() {
  return new Date().toLocaleTimeString();
}
const timeMessage = `The current time is ${getTime()}.`;
console.log(timeMessage);
// Output: The current time is HH:MM:SS (varies based on the current time).

// **6. Tagged Templates**
// Tagged Templates allow you to customize string processing with a function.
// The function receives the literal parts and substitution values as arguments.
function tagFunction(literals, ...values) {
  console.log("Literals:", literals);
  console.log("Values:", values);
  return `${literals[0]}${values[0]}${literals[1]}${values[1]}${literals[2]}`;
}
const taggedResult = tagFunction`The price is ${100} dollars, with tax ${10}.`;
console.log(taggedResult); 
// Output:
// Literals: [ 'The price is ', ' dollars, with tax ', '.' ]
// Values: [ 100, 10 ]
// The price is 100 dollars, with tax 10.

// **7. Dynamic String Construction**
// Template Literals are useful for generating dynamic strings, like HTML content.
const product = "Laptop";
const price = 1500;
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

// **8. Escaping Backticks**
// If you need to include a backtick in your Template Literal, use the escape character (\`).
const escaped = `This is a backtick: \``;
console.log(escaped); 
// Output: This is a backtick: `

// **Summary**
// Template Literals provide a modern way to handle strings in JavaScript. They are versatile and reduce complexity in code.
// Key features:
// - Embedded expressions
// - Multi-line strings
// - Function calls within strings
// - Tagged templates for custom string processing

// Experiment with the examples above to master Template Literals!
