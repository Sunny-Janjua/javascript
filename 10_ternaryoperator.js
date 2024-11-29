// ternaryOperatorExamples
// This file demonstrates the usage of the Ternary Operator in JavaScript
// with detailed examples and explanations.

// --------------------------------------------
// **What is the Ternary Operator?**
// The ternary operator is a shorthand for the `if-else` statement. 
// It evaluates a condition and returns one value if the condition is true, 
// and another value if it is false.

// Syntax:
// condition ? valueIfTrue : valueIfFalse;

// --------------------------------------------
// Examples of Ternary Operator:

console.log("Examples of Ternary Operator:");

// Example 1: Basic usage
let age = 20;
let canVote = age >= 18 ? "Yes, you can vote." : "No, you cannot vote.";
console.log(canVote); // Output: "Yes, you can vote."

// Example 2: Checking odd or even
let number = 15;
let isEven = number % 2 === 0 ? "Even" : "Odd";
console.log(`${number} is ${isEven}`); // Output: "15 is Odd"

// Example 3: Assigning a default value
let username = null;
let displayName = username ? username : "Guest";
console.log(`Welcome, ${displayName}!`); // Output: "Welcome, Guest!"

// Example 4: Nested Ternary Operator
let score = 85;
let grade = score >= 90
  ? "A"
  : score >= 80
  ? "B"
  : score >= 70
  ? "C"
  : score >= 60
  ? "D"
  : "F";
console.log(`Your grade is ${grade}`); // Output: "Your grade is B"

// Example 5: Conditional styling
let isDarkMode = true;
let backgroundColor = isDarkMode ? "black" : "white";
let textColor = isDarkMode ? "white" : "black";
console.log(`Background: ${backgroundColor}, Text: ${textColor}`);
// Output: "Background: black, Text: white"

// --------------------------------------------
// Additional Use Cases

// **Example 6: Simplifying function return**
function checkEligibility(age) {
  return age >= 18 ? "Eligible" : "Not Eligible";
}
console.log(checkEligibility(16)); // Output: "Not Eligible"

// **Example 7: Inline rendering (useful in frameworks like React)**
let isLoggedIn = false;
let message = isLoggedIn ? "Welcome back!" : "Please log in.";
console.log(message); // Output: "Please log in."

// **Example 8: Calculating discount**
let cartValue = 120;
let discount = cartValue > 100 ? "10% off" : "No discount";
console.log(`Discount: ${discount}`); // Output: "Discount: 10% off"

// **Example 9: Display based on multiple conditions**
let time = 20;
let greeting =
  time < 12
    ? "Good Morning"
    : time < 18
    ? "Good Afternoon"
    : "Good Evening";
console.log(greeting); // Output: "Good Evening"

// **Example 10: Shorthand for multiple checks**
let color = "red";
let isPrimaryColor = color === "red" || color === "blue" || color === "yellow" ? "Primary color" : "Not a primary color";
console.log(`${color} is a ${isPrimaryColor}`); // Output: "red is a Primary color"



// - The ternary operator is a concise way to write conditional expressions.
// - It makes code shorter and cleaner compared to the traditional `if-else` statement.
// - Use it for simple conditions; avoid nesting too many ternary operators for readability.

