// JavaScript Functions

// Functions are blocks of code designed to perform a specific task. 
// Functions can be created using two primary ways:
// 1. Function Declaration
// 2. Function Expression

// 1. Function Declaration
// Function Declaration defines a function with a specific name. 
// This type of function is "hoisted", meaning it can be called before the actual definition in the code.

function greet(name) {
    console.log("Hello, " + name + "!");
}

// Calling the function
greet("John");  // Output: Hello, John!
greet("Jane");  // Output: Hello, Jane!

// 2. Function Expression
// Function Expression involves creating a function as part of an expression. 
// It is stored in a variable. These functions are not hoisted, so they must be defined before they are called.

const greetExpression = function(name) {
    console.log("Hello, " + name + "!");
};

// Calling the function expression
greetExpression("John");  // Output: Hello, John!
greetExpression("Jane");  // Output: Hello, Jane!

// Key Differences Between Function Declaration and Function Expression:
// 1. Function Declarations are hoisted, meaning they can be used before they are defined.
// 2. Function Expressions are not hoisted, and can only be called after the function expression is defined.


// Example 1: Function Declaration Example
function multiply(a, b) {
    return a * b;
}

console.log(multiply(2, 3));  // Output: 6
console.log(multiply(4, 5));  // Output: 20


// Example 2: Function Expression Example
const subtract = function(a, b) {
    return a - b;
};

console.log(subtract(5, 3));  // Output: 2
console.log(subtract(10, 7)); // Output: 3


// Example 3: Anonymous Function Expression Example
// In this case, no name is given to the function. It is defined as part of an expression.

const square = function(num) {
    return num * num;
};

console.log(square(4));  // Output: 16


// Example 4: Arrow Function Expression Example
// Arrow functions provide a more concise syntax for writing function expressions.

const add = (a, b) => a + b;

console.log(add(5, 7));  // Output: 12


// Example 5: Returning Functions from Functions Example
// Higher-order functions return other functions.

function createMultiplier(multiplier) {
    return function(x) {
        return x * multiplier;
    };
}

const double = createMultiplier(2);
console.log(double(5));  // Output: 10

const triple = createMultiplier(3);
console.log(triple(5));  // Output: 15


// Summary:
// 1. Function Declarations are hoisted, meaning they can be called before their definition.
// 2. Function Expressions are stored in variables and must be defined before use.
// 3. Arrow Functions provide a concise syntax for function expressions.
