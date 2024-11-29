// JavaScript Functions: Arrow Functions, Default Parameters, Rest Parameters, and Closures

// 1. Arrow Functions
// Arrow functions provide a concise syntax for writing function expressions. They also have a different behavior with respect to the 'this' keyword compared to regular functions.

const greetArrow = (name) => {
    console.log("Hello, " + name + "!");
};

greetArrow("John");  // Output: Hello, John!

// Single parameter functions can omit parentheses
const square = num => num * num;

console.log(square(4));  // Output: 16

// No parameters can also omit the parentheses
const sayHello = () => "Hello, World!";

console.log(sayHello());  // Output: Hello, World!

// Arrow functions are not hoisted, so they must be defined before calling them.
// They also do not have their own 'this' context. Instead, they inherit 'this' from the surrounding code.


// 2. Default Parameters
// Default parameters allow us to specify default values for function parameters when no value or undefined is passed for them.

function greet(name = "Guest") {
    console.log("Hello, " + name + "!");
}

greet();             // Output: Hello, Guest!
greet("John");       // Output: Hello, John!

// Default parameters are evaluated from left to right. 
// If an argument is provided, it will be used; otherwise, the default value is applied.

function calculateTotal(price, tax = 0.1) {
    return price + price * tax;
}

console.log(calculateTotal(100));       // Output: 110 (uses default tax of 0.1)
console.log(calculateTotal(100, 0.2));  // Output: 120 (uses custom tax of 0.2)


// 3. Rest Parameters
// Rest parameters allow us to represent an indefinite number of arguments as an array.
// It is denoted by three dots (...) before the parameter name.

function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3));      // Output: 6
console.log(sum(5, 10, 15, 20)); // Output: 50

// Rest parameters can be used only at the last parameter of a function, and it collects all remaining arguments passed to the function.
// Rest parameters are an array, so array methods can be used on it (like reduce in the example above).


// 4. Closures
// A closure is a function that "remembers" its lexical scope even when the function is executed outside that scope. 
// This means that the inner function has access to the outer function's variables.

function outer() {
    let count = 0;

    // Inner function can access the 'count' variable from the outer function's scope
    function inner() {
        count++;
        console.log(count);
    }

    return inner;
}

const counter = outer();  // 'counter' is a closure function that remembers the scope of 'outer'
counter();  // Output: 1
counter();  // Output: 2
counter();  // Output: 3

// In the example above, even though the 'outer' function has finished executing,
// the inner function still remembers and has access to the 'count' variable.

// Closures are often used to create private variables or maintain state across function calls.


// Summary:
// 1. **Arrow Functions** offer a concise syntax and have different behavior with 'this' context.
// 2. **Default Parameters** allow setting default values for function parameters.
// 3. **Rest Parameters** gather all remaining arguments into an array, useful for handling variable numbers of arguments.
// 4. **Closures** allow functions to "remember" and access variables from their lexical scope even after they have finished executing.
