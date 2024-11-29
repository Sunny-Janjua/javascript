// --- Callbacks in JavaScript ---

/**
 * A **callback function** is a function that is passed as an argument to another function
 * and is executed after the completion of that function. Callbacks are widely used in JavaScript,
 * especially in asynchronous operations such as handling events, making API calls, and managing timers.
 * 
 * Callbacks allow you to defer execution of a function until a certain task or event is completed.
 * This is particularly useful in non-blocking JavaScript, which allows for smoother user experiences
 * by not freezing the application while waiting for a task to finish.
 */

// Example 1: Simple Callback Function
/**
 * Here, a callback function is passed to the 'greet' function and executed after the greeting is printed.
 */

function greet(name, callback) {
    console.log(`Hello, ${name}`);
    callback();  // Executes the callback function after greeting.
}

// Callback function
function sayGoodbye() {
    console.log("Goodbye!");
}

// Passing the sayGoodbye function as a callback to greet.
greet('John', sayGoodbye);

// Output:
// Hello, John
// Goodbye!


/**
 * Example 2: Callback with Asynchronous Code (setTimeout)
 * 
 * setTimeout is an asynchronous function that waits for a specific duration before executing the callback function.
 * This is commonly used to simulate delayed execution or operations that take time (e.g., network requests).
 */

console.log("Start");

// Asynchronous function with a callback
setTimeout(function() {
    console.log("This is delayed by 2 seconds");
}, 2000);  // 2-second delay

console.log("End");

// Output:
// Start
// End
// (After 2 seconds) This is delayed by 2 seconds


/**
 * Example 3: Callback with Data
 * 
 * Callbacks can also be used to process or manipulate data after an asynchronous operation is completed.
 * In this example, we simulate fetching data and passing it to the callback for further processing.
 */

function fetchData(callback) {
    let data = { id: 1, name: 'John Doe' };
    callback(data);  // Pass the data to the callback
}

// Callback function to process data
function displayUserData(user) {
    console.log(`User ID: ${user.id}`);
    console.log(`User Name: ${user.name}`);
}

// Fetching and displaying the data using callback
fetchData(displayUserData);

// Output:
// User ID: 1
// User Name: John Doe


/**
 * Example 4: Callback with Error Handling (Node.js Style)
 * 
 * In many asynchronous APIs, the first parameter in the callback is reserved for an error.
 * If an error occurs during an asynchronous operation, it is passed to the callback to handle it appropriately.
 */

function fetchDataFromDatabase(callback) {
    let error = null;
    let data = { id: 1, name: 'Jane Doe' };
    
    if (error) {
        callback(error, null);  // If there's an error, pass the error to the callback
    } else {
        callback(null, data);  // If no error, pass the data to the callback
    }
}

function handleDatabaseResponse(error, data) {
    if (error) {
        console.log("Error occurred:", error);
    } else {
        console.log("Data retrieved:", data);
    }
}

// Calling the function and passing the callback to handle the response
fetchDataFromDatabase(handleDatabaseResponse);

// Output:
// Data retrieved: { id: 1, name: 'Jane Doe' }


/**
 * Example 5: Callback with Multiple Arguments
 * 
 * Callbacks can accept multiple arguments, allowing you to return complex data or pass multiple pieces of information.
 */

function add(a, b, callback) {
    let result = a + b;
    callback(result);  // Pass the result to the callback
}

// Callback function to display the result
function displayResult(result) {
    console.log("The result is: " + result);
}

// Adding two numbers and passing the result to the callback function
add(5, 10, displayResult);

// Output:
// The result is: 15


/**
 * --- Why Use Callbacks? ---
 * 
 * 1. **Asynchronous Code**: 
 *    Callbacks are essential for handling tasks that take time, such as reading files, making network requests, or handling user input.
 *    They ensure that the application does not block or freeze while waiting for an operation to complete.
 *
 * 2. **Modular Code**: 
 *    Callbacks allow you to write reusable, modular code. By passing different callback functions, you can modify the behavior of a function without changing its core logic.
 *
 * 3. **Error Handling**: 
 *    Callbacks provide a way to handle errors gracefully. This is especially useful in server-side development (e.g., Node.js) where callbacks are used to manage errors in asynchronous operations.
 */


/**
 * --- Callback Hell ---
 * 
 * When you nest multiple callbacks within one another, especially in asynchronous code, it can lead to **callback hell**,
 * where the code becomes difficult to read and maintain. This is because of deeply nested functions and indentations.
 *
 * Example of Callback Hell:
 */

setTimeout(() => {
    console.log("First Task");
    setTimeout(() => {
        console.log("Second Task");
        setTimeout(() => {
            console.log("Third Task");
        }, 1000);
    }, 1000);
}, 1000);


/**
 * --- Solving Callback Hell ---
 * 
 * While callbacks are extremely useful, deeply nested callbacks can make your code difficult to maintain.
 * One solution is to use **Promises** or **async/await**, which provide a more readable and maintainable way of handling asynchronous tasks.
 *
 * Here is an example of how to use Promises to avoid callback hell:
 */

function firstTask() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("First Task");
            resolve();
        }, 1000);
    });
}

function secondTask() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Second Task");
            resolve();
        }, 1000);
    });
}

function thirdTask() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Third Task");
            resolve();
        }, 1000);
    });
}

firstTask()
    .then(secondTask)
    .then(thirdTask)
    .catch((error) => console.error("Error occurred:", error));

// Output:
// First Task
// Second Task
// Third Task


/**
 * --- Conclusion ---
 * 
 * - **Callbacks** are an essential feature in JavaScript, especially for handling asynchronous tasks.
 * - They help ensure non-blocking code execution and allow you to defer actions until certain tasks are completed.
 * - Callbacks are flexible and can be passed as arguments to other functions, enabling modular and reusable code.
 * - However, excessive use of nested callbacks (callback hell) can make the code harder to read, but this can be resolved with **Promises** or **async/await**.
 */
