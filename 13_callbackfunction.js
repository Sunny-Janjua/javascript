// JavaScript Callback Functions

// What is a Callback Function?
// A callback function is a function that is passed as an argument to another function. 
// The callback function is executed after the completion of the other function. 
// This is commonly used in asynchronous operations like handling events, making API requests, or reading files.


// Example 1: Basic Callback Function
// A simple example of passing a function as a callback to another function:

function greeting(name, callback) {
    console.log("Hello, " + name + "!");
    callback(); // callback function gets called after greeting
}

// A callback function that will be passed into the greeting function
function sayGoodbye() {
    console.log("Goodbye!");
}

greeting("John", sayGoodbye);

// Output:
// Hello, John!
// Goodbye!

// In this case, `sayGoodbye` is the callback function that is passed as an argument to the `greeting` function.

// The main idea behind callbacks is that the second function (callback) is executed at the appropriate time, which could be
// after a task is completed or in response to an event happening.

// Example 2: Callback with Arguments
// You can also pass parameters to the callback function.

function calculate(a, b, callback) {
    const result = a + b;
    callback(result); // passing the result to the callback function
}

function displayResult(result) {
    console.log("The result is: " + result);
}

calculate(5, 3, displayResult); // Output: The result is: 8

// Here, `calculate` performs an operation and passes the result to the callback function `displayResult`.
// This allows us to control what happens after the calculation is complete.

// Example 3: Callback for Asynchronous Operations
// Callbacks are commonly used for handling asynchronous operations, such as reading files or making network requests.
// Here’s an example with a simulated asynchronous operation:

function fetchData(callback) {
    setTimeout(() => {
        console.log("Data fetched successfully!");
        callback("Here is your data.");
    }, 2000); // Simulating an asynchronous operation (e.g., network request)
}

function handleData(data) {
    console.log("Received data:", data);
}

fetchData(handleData);

// Output:
// Data fetched successfully!
// Received data: Here is your data.

// The `fetchData` function simulates an asynchronous task (like fetching data from a server),
// and once the task is completed, the `handleData` function is invoked as a callback.

// Example 4: Callback in Event Handlers
// Callbacks are widely used in event-driven programming. When a specific event occurs (like a button click),
// a callback function is executed.

document.getElementById("myButton").addEventListener("click", function() {
    console.log("Button clicked!");
});

// In this example, the function passed to `addEventListener` is a callback that will be executed when the button is clicked.

// Example 5: Higher-order Functions and Callbacks
// Functions that accept other functions as arguments are called higher-order functions. 

function filterArray(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

function isEven(num) {
    return num % 2 === 0;
}

const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = filterArray(numbers, isEven);
console.log(evenNumbers); // Output: [2, 4, 6]

// Here, `filterArray` is a higher-order function that accepts an array and a callback function (`isEven`).
// The callback function is used to test each element in the array, and if the condition is true (the number is even), 
// it is included in the result.

// Key Points about Callback Functions:
// 1. A callback function is a function that is passed as an argument to another function.
// 2. Callbacks are used to allow asynchronous operations and event handling in JavaScript.
// 3. Callbacks can be used with both synchronous and asynchronous operations.
// 4. Callbacks allow you to execute code after a task is completed, such as handling the result of an operation or event.
// 5. Callbacks are essential for writing non-blocking code in JavaScript, especially in Node.js and browser environments.
// 6. Callbacks can be simple or complex, and they can accept parameters as well.


// Summary:
// 1. **Synchronous Callback**: A callback that executes immediately after the function in which it’s passed completes.
function greet(name) {
    console.log("Hello " + name);
}
greet("John");

// 2. **Asynchronous Callback**: A callback function is executed after an asynchronous task is completed, such as reading a file or fetching data from an API.
function fetchData(callback) {
    setTimeout(() => {
        console.log("Data fetched");
        callback("Data received");
    }, 1000);
}

fetchData((message) => {
    console.log(message); // Output: Data received
});


// In conclusion, callback functions are powerful tools in JavaScript, particularly in asynchronous operations.
// Understanding how to use them properly helps in writing non-blocking, efficient, and readable code.
