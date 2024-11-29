// --- Promises in JavaScript ---

/**
 * A **Promise** is a special object in JavaScript that represents the eventual completion or failure of an asynchronous operation.
 * It allows you to handle asynchronous tasks in a more manageable way compared to traditional callback functions.
 * A Promise can be in one of three states:
 * 
 * 1. **Pending**: The initial state of the promise, before the asynchronous operation is completed.
 * 2. **Resolved (Fulfilled)**: The operation was successful, and the promise is completed.
 * 3. **Rejected**: The operation failed, and the promise is rejected.
 * 
 * Promises provide a cleaner syntax for handling asynchronous operations, avoiding issues like callback hell.
 * They are particularly useful for operations like API calls, file reading, and timers.
 * 
 * A Promise object can be chained using `.then()` and `.catch()` methods to handle the result or error of the operation.
 */

// Example 1: Basic Promise Example
/**
 * In this example, we create a Promise that resolves after 2 seconds.
 * The `resolve` function is used to transition the Promise from the 'pending' state to the 'resolved' state.
 */

let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Task Completed");  // Resolving the promise after 2 seconds
    }, 2000);
});

myPromise.then((message) => {
    console.log(message);  // Output: Task Completed
}).catch((error) => {
    console.log(error);  // This won't run in this case as the promise is resolved
});

// Output (after 2 seconds):
// Task Completed


/**
 * Example 2: Promise with Rejection
 * 
 * Promises can also be rejected using the `reject` function. This is useful when something goes wrong during an asynchronous task.
 * You can handle rejections using the `.catch()` method.
 */

let promiseWithError = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Something went wrong");  // Rejecting the promise after 2 seconds
    }, 2000);
});

promiseWithError.then((message) => {
    console.log(message);  // This won't run as the promise is rejected
}).catch((error) => {
    console.log(error);  // Output: Something went wrong
});

// Output (after 2 seconds):
// Something went wrong


/**
 * Example 3: Chaining Promises
 * 
 * You can chain multiple `.then()` calls to handle sequential asynchronous operations.
 * Each `.then()` block returns a new promise, which allows you to chain multiple promises together.
 * The next `.then()` block will only execute once the previous promise has resolved.
 */

let promiseChain = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("First Task Completed");
    }, 1000);
});

promiseChain
    .then((result) => {
        console.log(result);  // Output: First Task Completed
        return "Second Task Completed";  // Returning a new promise or value
    })
    .then((result) => {
        console.log(result);  // Output: Second Task Completed
        return "Third Task Completed";
    })
    .then((result) => {
        console.log(result);  // Output: Third Task Completed
    })
    .catch((error) => {
        console.log(error);  // Catching any errors in the chain
    });

// Output (with 1-second intervals between each):
// First Task Completed
// Second Task Completed
// Third Task Completed


/**
 * Example 4: Using Promise.all()
 * 
 * `Promise.all()` allows you to run multiple promises in parallel and wait for all of them to resolve.
 * It takes an array of promises and returns a new promise that resolves when all the promises in the array resolve.
 * If any of the promises are rejected, the `Promise.all()` will immediately reject.
 */

let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Task 1 Completed");
    }, 2000);
});

let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Task 2 Completed");
    }, 1000);
});

Promise.all([promise1, promise2])
    .then((results) => {
        console.log(results);  // Output: ["Task 1 Completed", "Task 2 Completed"]
    })
    .catch((error) => {
        console.log(error);  // If any promise is rejected, this will catch the error
    });

// Output (after 2 seconds):
// ["Task 1 Completed", "Task 2 Completed"]


/**
 * Example 5: Using Promise.race()
 * 
 * `Promise.race()` is used when you want to execute multiple promises in parallel but only care about the result of the first promise that resolves (or rejects).
 * It takes an array of promises and returns a new promise that resolves or rejects as soon as the first promise resolves or rejects.
 */

let promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Task 3 Completed");
    }, 3000);
});

let promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Task 4 Completed");
    }, 1000);
});

Promise.race([promise3, promise4])
    .then((result) => {
        console.log(result);  // Output: Task 4 Completed (because it resolves first)
    })
    .catch((error) => {
        console.log(error);  // Will be executed if any promise is rejected
    });

// Output (after 1 second):
// Task 4 Completed


/**
 * --- Promise Methods ---
 * 
 * 1. **then()**: Used to define a handler for when the promise is resolved (fulfilled).
 * 2. **catch()**: Used to define a handler for when the promise is rejected.
 * 3. **finally()**: Executes code after the promise has been resolved or rejected, regardless of the outcome.
 * 
 *  Example of finally():
 */

let promiseWithFinally = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Task Completed");
    }, 2000);
});

promiseWithFinally
    .then((result) => {
        console.log(result);  // Output: Task Completed
    })
    .catch((error) => {
        console.log(error);  // Will not run in this case
    })
    .finally(() => {
        console.log("Cleanup code executed");  // Always runs, no matter the outcome
    });

// Output (after 2 seconds):
// Task Completed
// Cleanup code executed


/**
 * --- Chaining Promises and Error Handling ---
 * 
 * In more complex scenarios, promises are chained to perform multiple asynchronous operations.
 * You can catch errors from any step in the chain using `.catch()` at the end of the chain.
 * This is helpful for error handling in scenarios like multiple API calls.
 */

// Example: Chaining with error handling
let dataFetching = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Fetched Data");
    }, 1000);
});

dataFetching
    .then((data) => {
        console.log(data);  // Output: Fetched Data
        return "Processed Data";
    })
    .then((processedData) => {
        console.log(processedData);  // Output: Processed Data
        return "Saved Data";
    })
    .catch((error) => {
        console.log("Error:", error);  // Will catch any error that occurs in the chain
    });

// Output (after 1 second):
// Fetched Data
// Processed Data
// Saved Data


/**
 * --- Promises vs Callbacks ---
 * 
 * While both **callbacks** and **promises** are used for handling asynchronous code, promises provide several advantages:
 * 1. **Avoid callback hell**: Promises offer a cleaner, more readable way to handle multiple asynchronous tasks.
 * 2. **Better error handling**: Promises provide better handling of errors, as they can propagate errors through the chain.
 * 3. **Chaining**: Promises allow for more readable chaining of asynchronous operations.
 * 
 * However, callbacks are still used in many APIs and event handlers, but promises provide a more modern and flexible approach for asynchronous operations.
 */


/**
 * --- Conclusion ---
 * 
 * - **Promises** help manage asynchronous operations more cleanly and efficiently compared to traditional callback functions.
 * - They have three main states: Pending, Resolved, and Rejected, and can be handled using `.then()`, `.catch()`, and `.finally()`.
 * - Promises can be chained to handle multiple asynchronous tasks and can be used with `Promise.all()` or `Promise.race()` for managing multiple promises in parallel.
 * - Promises improve code readability, help avoid callback hell, and provide more structured error handling.
 */
