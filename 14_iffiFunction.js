// IIFE (Immediately Invoked Function Expressions)

// **Definition:**
// An IIFE (Immediately Invoked Function Expression) is a function that is defined and 
// executed immediately after its creation. This JavaScript pattern is useful for creating 
// a new scope and preventing polluting the global scope with temporary variables.

// **Syntax:** 
// The function is defined inside parentheses and is invoked immediately after:
// (function() { /* function body */ })(); 

// Or using an arrow function:
// (() => { /* function body */ })();

// **Why use IIFE?**
// - It helps avoid variable name conflicts in the global scope.
// - It’s used in scenarios where a function needs to be executed only once, without 
//   being called again.
// - Commonly used in modular JavaScript patterns.

// **Examples:**

/**
 * Example 1: Basic IIFE
 * This is a simple IIFE that logs a message to the console.
 */
(function() {
    console.log("This is an IIFE!");
})();
// Output: "This is an IIFE!"

/**
 * Example 2: Using IIFE for variable scoping
 * Variables inside an IIFE are scoped locally, preventing them from polluting the global scope.
 */
(function() {
    let x = 5;
    console.log(x); // Output: 5
})();
// console.log(x); // Error: x is not defined (x is scoped inside the IIFE)

/**
 * Example 3: Returning values from an IIFE
 * The IIFE can return a value and store it in a variable.
 */
let result = (function() {
    let a = 5, b = 3;
    return a + b;
})();
console.log(result);  // Output: 8

/**
 * Example 4: Passing parameters into an IIFE
 * Parameters can be passed to an IIFE to make it more dynamic.
 */
(function(name) {
    console.log("Hello, " + name);
})("Alice");
// Output: "Hello, Alice"

/**
 * Example 5: IIFE with arrow functions
 * This is an IIFE written using an arrow function.
 */
(() => {
    console.log("This is an IIFE using an arrow function!");
})();
// Output: "This is an IIFE using an arrow function!"



// Recursion

// **Definition:**
// Recursion is a process in which a function calls itself in order to solve smaller instances 
// of the same problem. It is widely used in problems that can be broken down into smaller 
// subproblems that are similar to the original problem. Recursive functions generally have 
// a **base case** to terminate the recursion and prevent an infinite loop.


// **How Recursion Works:**
// 1. **Base Case:** A condition that stops the recursion.
// 2. **Recursive Case:** The function calls itself with modified arguments, bringing it closer to the base case.

// **Examples:**

/**
 * Example 1: Factorial using Recursion
 * The factorial of a number n is defined as:
 * n! = n * (n - 1) * (n - 2) * ... * 1
 */
function factorial(n) {
    // Base case: when n is 1, return 1
    if (n === 1) {
        return 1;
    }
    // Recursive case: multiply n by factorial of (n-1)
    return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120 (5*4*3*2*1)


/**
 * Example 2: Fibonacci Sequence using Recursion
 * The Fibonacci sequence is defined as:
 * fib(0) = 0
 * fib(1) = 1
 * fib(n) = fib(n-1) + fib(n-2) for n > 1
 */
function fibonacci(n) {
    if (n === 0) return 0;   // Base case
    if (n === 1) return 1;   // Base case
    return fibonacci(n - 1) + fibonacci(n - 2); // Recursive case
}

console.log(fibonacci(6)); // Output: 8 (0, 1, 1, 2, 3, 5, 8)


/**
 * Example 3: Counting Down with Recursion
 * This function counts down from a given number to 0 and prints a message at the end.
 */
function countdown(n) {
    if (n <= 0) {
        console.log("Done!");
        return;
    }
    console.log(n);
    countdown(n - 1); // Recursive call
}

countdown(5);
// Output:
// 5
// 4
// 3
// 2
// 1
// Done!


/**
 * Example 4: Sum of an Array using Recursion
 * This function calculates the sum of all elements in an array using recursion.
 */
function sumArray(arr, index = 0) {
    if (index === arr.length) {
        return 0;  // Base case: end of array
    }
    return arr[index] + sumArray(arr, index + 1);  // Recursive case
}

let nums = [1, 2, 3, 4, 5];
console.log(sumArray(nums)); // Output: 15 (1 + 2 + 3 + 4 + 5)


/**
 * Example 5: Reverse String using Recursion
 * This function reverses a string using recursion.
 */
function reverseString(str) {
    if (str === "") {
        return "";  // Base case: empty string
    }
    return reverseString(str.substr(1)) + str[0];  // Recursive call
}

console.log(reverseString("hello"));  // Output: "olleh"


// **Key Points to Remember:**
// 1. **IIFE:**
//    - Useful for creating a local scope and avoiding global namespace pollution.
//    - Commonly used in modular JavaScript patterns or code initialization that only needs to run once.
//    - Helps keep variables and functions private within a specific scope.
   
// 2. **Recursion:**
//    - A function that calls itself in smaller parts until it reaches the base case.
//    - Used for problems like calculating factorials, Fibonacci numbers, summing arrays, and more.
//    - Requires a proper base case to prevent infinite recursion and stack overflow.

