// --- Async/Await in JavaScript ---

/**
 * **Async/Await** is a more modern way to handle asynchronous operations in JavaScript, introduced in ECMAScript 2017 (ES8).
 * It provides a way to write asynchronous code that looks and behaves more like synchronous code, improving readability and maintainability.
 * 
 * The `async` keyword is used to declare a function as asynchronous, and the `await` keyword is used to wait for a promise to resolve or reject before continuing the execution of the code.
 * 
 * Async/Await is built on top of promises, meaning that it can be used with promise-based code.
 * 
 * Async/Await makes asynchronous code easier to write and understand compared to traditional `.then()` and `.catch()` chaining.
 * 
 * Here’s a detailed explanation and examples:
 */

// Example 1: Basic Async/Await
/**
 * The `async` keyword is used to declare a function as asynchronous.
 * The `await` keyword is used inside an async function to pause execution until the promise is resolved.
 */

async function myAsyncFunction() {
    let result = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Async Task Completed");
        }, 2000);
    });
    console.log(result);  // Output: Async Task Completed
}

// Calling the async function
myAsyncFunction();

// Output (after 2 seconds):
// Async Task Completed


/**
 * Example 2: Using Async/Await with Promise Rejection
 * 
 * Just like with Promises, you can also handle errors in Async/Await using `try` and `catch`.
 * If a promise is rejected, the code will jump to the `catch` block.
 */

async function myAsyncFunctionWithError() {
    try {
        let result = await new Promise((resolve, reject) => {
            setTimeout(() => {
                reject("Something went wrong!");
            }, 2000);
        });
        console.log(result);  // This won't run because of rejection
    } catch (error) {
        console.log(error);  // Output: Something went wrong!
    }
}

// Calling the async function with rejection
myAsyncFunctionWithError();

// Output (after 2 seconds):
// Something went wrong!


/**
 * Example 3: Awaiting Multiple Promises Sequentially
 * 
 * You can use multiple `await` expressions to handle multiple promises sequentially.
 * The code execution will pause at each `await` until the promise is resolved, one after the other.
 */

async function sequentialAsyncTasks() {
    let task1 = await new Promise((resolve) => {
        setTimeout(() => resolve("Task 1 Completed"), 1000);
    });
    console.log(task1);  // Output: Task 1 Completed

    let task2 = await new Promise((resolve) => {
        setTimeout(() => resolve("Task 2 Completed"), 1500);
    });
    console.log(task2);  // Output: Task 2 Completed

    let task3 = await new Promise((resolve) => {
        setTimeout(() => resolve("Task 3 Completed"), 500);
    });
    console.log(task3);  // Output: Task 3 Completed
}

// Calling the async function with multiple sequential tasks
sequentialAsyncTasks();

// Output (with 1-second, 1.5-second, and 0.5-second intervals between each):
// Task 1 Completed
// Task 2 Completed
// Task 3 Completed


/**
 * Example 4: Parallel Async Operations with `Promise.all()`
 * 
 * While `await` is used to handle tasks sequentially, if you want to run multiple asynchronous tasks in parallel, 
 * you can use `Promise.all()` with `async`/`await` to wait for all promises to resolve simultaneously.
 * This is particularly useful for tasks that don't depend on each other.
 */

async function parallelAsyncTasks() {
    let task1 = new Promise((resolve) => {
        setTimeout(() => resolve("Task 1 Completed"), 2000);
    });

    let task2 = new Promise((resolve) => {
        setTimeout(() => resolve("Task 2 Completed"), 1500);
    });

    let task3 = new Promise((resolve) => {
        setTimeout(() => resolve("Task 3 Completed"), 1000);
    });

    let results = await Promise.all([task1, task2, task3]);

    console.log(results);  // Output: ["Task 1 Completed", "Task 2 Completed", "Task 3 Completed"]
}

// Calling the async function with parallel tasks
parallelAsyncTasks();

// Output (after 2 seconds, as it's the longest task):
// ["Task 1 Completed", "Task 2 Completed", "Task 3 Completed"]


/**
 * Example 5: Async/Await with Returning Values
 * 
 * You can return values from async functions like regular functions, but the return value will be wrapped in a promise.
 * You need to `await` the result to get the actual value.
 */

async function calculateSum(a, b) {
    let sum = a + b;
    return sum;  // This will return a Promise that resolves to the sum
}

async function getSum() {
    let result = await calculateSum(5, 3);
    console.log(result);  // Output: 8
}

// Calling the async function
getSum();

// Output:
// 8


/**
 * --- Key Concepts of Async/Await ---
 * 
 * 1. **Async Functions**: Functions declared with the `async` keyword always return a Promise.
 * 2. **Await**: The `await` keyword is used inside an `async` function to pause the execution until a promise resolves or rejects.
 * 3. **Try/Catch**: Errors in async functions are caught using `try` and `catch` blocks, similar to synchronous error handling.
 * 4. **Returning Values**: Async functions can return values, which will automatically be wrapped in a promise.
 * 5. **Promise.all()**: Use `Promise.all()` to wait for multiple promises to resolve in parallel.
 * 
 * --- Benefits of Async/Await ---
 * 
 * 1. **Cleaner Syntax**: Async/Await makes asynchronous code look more like synchronous code, which improves readability.
 * 2. **Easier to Debug**: Since async functions look like normal functions, it’s easier to step through them in a debugger.
 * 3. **Error Handling**: Error handling with try/catch is simpler and more consistent, reducing the complexity of managing errors in async operations.
 * 4. **Chaining Simplification**: Async/Await simplifies chaining promises and handling their results, avoiding callback hell and complicated `.then()` chains.
 */


/**
 * --- Conclusion ---
 * 
 * - **Async/Await** is a modern way of working with asynchronous code that is more readable and manageable than callbacks or promises alone.
 * - The `async` keyword is used to define asynchronous functions, and the `await` keyword is used inside them to pause execution until a promise is resolved.
 * - Async/Await makes code easier to understand and manage, especially when dealing with multiple asynchronous operations, sequential or parallel.
 * - It also simplifies error handling with `try` and `catch`, and it is built on top of promises, meaning all promise-based functionality applies here too.
 * 
 * Use Async/Await for a cleaner, more synchronous-feeling way of handling asynchronous tasks in JavaScript.
 */
