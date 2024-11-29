// --- Try, Catch, Finally in JavaScript ---

/**
 * The `try...catch...finally` statement is used to handle errors in JavaScript.
 * 
 * - **try**: The block of code where you suspect an error might occur. If an error occurs, it will be thrown and caught in the `catch` block.
 * - **catch**: The block of code that handles the error. This block only runs if an error is thrown inside the `try` block.
 * - **finally**: The block of code that will always run after the `try` and `catch` blocks, whether or not an error occurred. This is useful for clean-up actions.
 * 
 * The `try...catch...finally` syntax helps handle errors gracefully and ensures that certain code always runs, regardless of success or failure.
 */

// Example 1: Basic try...catch block

/**
 * In this example, we try to parse a JSON string. If it is invalid, an error is thrown and caught in the `catch` block.
 */
function parseJSON() {
    try {
        const data = '{"name": "John", "age": 30}';  // Valid JSON string
        const parsedData = JSON.parse(data);  // Trying to parse JSON
        console.log('Parsed Data:', parsedData);  // Output the parsed data
    } catch (error) {
        console.error('Error parsing JSON:', error);  // Output error if parsing fails
    }
}

parseJSON();
// Output: Parsed Data: { name: 'John', age: 30 }

// Example 2: Catching a specific error type

/**
 * You can also handle specific types of errors by checking the error type in the `catch` block.
 * In this case, we intentionally divide by zero to show an error.
 */
function divideNumbers(a, b) {
    try {
        if (b === 0) {
            throw new Error('Division by zero is not allowed');  // Custom error
        }
        const result = a / b;
        console.log('Result:', result);
    } catch (error) {
        console.error('Error:', error.message);  // Catching the custom error
    }
}

divideNumbers(10, 0);  // Will throw and catch a division by zero error
// Output: Error: Division by zero is not allowed

// Example 3: Using finally block

/**
 * The `finally` block runs regardless of whether an error occurred in the `try` block or not.
 * It's useful for performing cleanup actions, like closing files, releasing resources, or logging.
 */
function readFile() {
    try {
        const fileContent = "This is a file content";
        console.log('Reading file:', fileContent);
        // Simulating an error by throwing it
        throw new Error('File not found');
    } catch (error) {
        console.error('Error:', error.message);
    } finally {
        console.log('Finally: File reading attempt finished');  // This will always run
    }
}

readFile();
// Output:
// Reading file: This is a file content
// Error: File not found
// Finally: File reading attempt finished

// Example 4: Using try...catch for async operations

/**
 * The `try...catch` block can also be used in asynchronous functions, particularly with `async/await` syntax.
 * This allows you to handle errors in asynchronous operations like `fetch` or other promise-based functions.
 */
async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');  // Fetching posts
        if (!response.ok) {
            throw new Error('Failed to fetch posts');
        }
        const data = await response.json();  // Parsing JSON
        console.log(data);  // Output the fetched data
    } catch (error) {
        console.error('Error:', error.message);  // Catching the fetch error
    } finally {
        console.log('Finally: Fetch operation complete');  // This will always run
    }
}

fetchData();
// Output: 
// [{...}, {...}, {...}] (The array of posts)
// Finally: Fetch operation complete

// Example 5: Using try...catch...finally with a return statement

/**
 * The `finally` block executes after the return statement in the `try` or `catch` block.
 * Even if a return is called in `try` or `catch`, the `finally` block will run first before returning the value.
 */
function demoFinallyWithReturn() {
    try {
        console.log('In try block');
        return 'Returned from try block';  // Return from try block
    } catch (error) {
        console.error('In catch block');
        return 'Returned from catch block';  // Will not be executed
    } finally {
        console.log('In finally block');  // Will always run
    }
}

console.log(demoFinallyWithReturn());
// Output:
// In try block
// In finally block
// Returned from try block


/**
 * --- Key Concepts of Try, Catch, Finally ---
 * 
 * 1. **Try Block**: The `try` block contains code that may throw an error. If an error occurs, the flow moves to the `catch` block.
 * 2. **Catch Block**: The `catch` block is used to handle the error that occurred in the `try` block. You can also access the error object to get more details about the issue.
 * 3. **Finally Block**: The `finally` block will execute after both the `try` and `catch` blocks, regardless of whether an error occurred or not. It's typically used for clean-up operations (like closing resources).
 * 4. **Error Propagation**: If an error occurs in the `try` block, it can be caught and handled in the `catch` block, preventing the script from terminating unexpectedly.
 * 
 * --- When to Use Try, Catch, Finally ---
 * 
 * - Use `try...catch` when you have code that might throw an error, and you want to handle the error gracefully.
 * - Use `finally` to ensure that some code runs, regardless of whether there was an error or not (e.g., cleaning up resources).
 * - It's best to catch errors only when you can handle them. Otherwise, you can let the error propagate to higher levels.
 * 
 * --- Conclusion ---
 * 
 * The `try...catch...finally` structure provides a robust way to manage errors and exceptions in your JavaScript code. It allows you to control what happens when an error occurs, and ensures that cleanup or final operations can always be performed in the `finally` block.
 */
