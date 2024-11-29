// Synchronous vs Asynchronous JavaScript

// ---------------------------------------------------------------
// Synchronous JavaScript
// ---------------------------------------------------------------

// Synchronous programming means that tasks are executed sequentially,
// one after the other. Each task must finish before the next task begins.
// This approach can sometimes block the flow of the program, especially 
// when tasks take time to complete (e.g., file reading, network requests, etc.).

console.log('Start');

// Example of a synchronous task that blocks the execution
function longRunningTask() {
  console.log('Task Started');
  let i = 0;
  while (i < 1000000000) { // Simulate a time-consuming task
    i++;
  }
  console.log('Task Finished');
}

longRunningTask();
console.log('End');

// Output:
// Start
// Task Started
// Task Finished
// End

// The program waits for longRunningTask to finish before it prints "End".

// ---------------------------------------------------------------
// Asynchronous JavaScript
// ---------------------------------------------------------------

// Asynchronous programming allows certain operations (like network 
// requests or file I/O) to run independently of the main program flow.
// This means the program doesn’t need to wait for a task to finish 
// before moving on to the next one. JavaScript provides ways to handle 
// asynchronous operations using callbacks, promises, and async/await.

console.log('Start');

// Example of an asynchronous task using setTimeout
function longRunningTask(callback) {
  console.log('Task Started');
  setTimeout(() => { // Simulating a time-consuming task with setTimeout
    console.log('Task Finished');
    callback();
  }, 2000); // Wait for 2 seconds before calling the callback
}

longRunningTask(() => {
  console.log('Callback function executed!');
});

console.log('End');

// Output:
// Start
// Task Started
// End
// Task Finished
// Callback function executed!

// The program doesn't wait for `longRunningTask` to finish. It continues
// executing and prints "End" immediately after starting the task. The callback
// is executed after the task is finished.


// ---------------------------------------------------------------
// Key Differences Between Synchronous and Asynchronous JavaScript
// ---------------------------------------------------------------

/* 
| **Aspect**             | **Synchronous JavaScript**                                           | **Asynchronous JavaScript**                                        |
|------------------------|-----------------------------------------------------------------------|--------------------------------------------------------------------|
| **Execution Flow**      | Executes tasks one after another.                                    | Executes tasks independently, without waiting for previous tasks.  |
| **Blocking/Non-Blocking**| Blocking: The program stops and waits for a task to complete.         | Non-blocking: The program continues to run while waiting for tasks.|
| **Example**             | `for`, `while`, and other loops that execute one step at a time.     | `setTimeout`, `fetch`, Promises, and `async/await`.                |
| **Performance**         | Can cause delays if tasks take time, like in a long-running loop.    | More efficient for tasks like I/O operations or network requests.  |
| **Concurrency**         | No concurrency; tasks must complete before the next one starts.      | Supports concurrency, allowing multiple tasks to run simultaneously.|
| **Error Handling**      | Errors are handled immediately, blocking the program flow.           | Errors are handled later, often with `.catch()` for promises or `try/catch` for async/await. |
*/

// ---------------------------------------------------------------
// Callbacks in Asynchronous JavaScript
// ---------------------------------------------------------------

// Callbacks are functions passed as arguments to other functions and
// are called when the task is completed. They are often used in 
// asynchronous operations.

function fetchData(callback) {
  setTimeout(() => {
    console.log("Data fetched!");
    callback();  // Call the callback function after the task is done
  }, 2000);
}

fetchData(() => {
  console.log("Callback executed after fetching data.");
});

// Output:
// Data fetched!
// Callback executed after fetching data.


// ---------------------------------------------------------------
// Promises in Asynchronous JavaScript
// ---------------------------------------------------------------

// Promises are used to handle asynchronous operations. They represent
// the eventual completion or failure of an asynchronous operation.

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "Fetched Data";
      resolve(data); // Operation successful
    }, 2000);
  });
}

fetchData()
  .then((data) => {
    console.log(data); // "Fetched Data"
  })
  .catch((error) => {
    console.log(error);
  });

// Output:
// Fetched Data


// ---------------------------------------------------------------
// Async/Await in Asynchronous JavaScript
// ---------------------------------------------------------------

// `async/await` provides a more readable way to write asynchronous code.
// An `async` function always returns a promise, and `await` can be used
// inside `async` functions to pause execution until the promise resolves.

async function fetchData() {
  const data = await new Promise((resolve) => {
    setTimeout(() => resolve("Fetched Data"), 2000);
  });
  console.log(data); // "Fetched Data"
}

fetchData();

// Output:
// Fetched Data


// ---------------------------------------------------------------
// Conclusion
// ---------------------------------------------------------------

// **Synchronous JavaScript** executes code one step at a time and waits for each task to complete before moving on.
// While easier to understand, it can block the flow of the program.

// **Asynchronous JavaScript** allows tasks to run independently, enabling non-blocking behavior and better performance, 
// especially when dealing with long-running operations like network requests or timers.

// **Callbacks, Promises, and Async/Await** are the primary ways to handle asynchronous operations in JavaScript, 
// each offering different syntax and behavior for managing asynchronous code flow.


// Synchronous JavaScript Example:

console.log("Start");

// Synchronous task: long-running function that blocks execution
function longRunningTask() {
  console.log("Task Started");

  let i = 0;
  while (i < 1000000000) { // Simulate a long-running task
    i++;
  }

  console.log("Task Finished");
}

longRunningTask();

console.log("End");

// Output:
// Start
// Task Started
// Task Finished
// End
// Note: The "End" is printed only after "Task Finished" because the function blocks the program flow.

// ---------------------------------------------------------------

// Asynchronous JavaScript Example:

console.log("Start");

// Asynchronous task: using setTimeout to simulate a delay
function longRunningTask(callback) {
  console.log("Task Started");

  setTimeout(() => {
    console.log("Task Finished");
    callback(); // callback executed after the task is done
  }, 2000); // Waits 2 seconds before calling the callback
}

longRunningTask(() => {
  console.log("Callback function executed after task completion!");
});

console.log("End");

// Output:
// Start
// Task Started
// End
// Task Finished
// Callback function executed after task completion!
// Note: "End" is printed before "Task Finished" because setTimeout allows the program to continue
// executing while it waits for the task to complete.

