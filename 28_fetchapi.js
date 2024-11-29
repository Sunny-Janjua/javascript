// --- Fetch API in JavaScript ---

/**
 * The Fetch API is a modern, promise-based API that allows you to make network requests (like HTTP requests) in JavaScript.
 * It is used to fetch resources (e.g., data from a server), similar to how `XMLHttpRequest` worked, but with a simpler and more flexible interface.
 * 
 * The Fetch API returns a **Promise**, which resolves to the `Response` object representing the response to the request.
 * You can use the `.then()` method to handle successful responses, and `.catch()` for handling errors.
 * 
 * The Fetch API is more flexible than older methods like `XMLHttpRequest` and provides a better syntax for making asynchronous requests.
 * 
 * Let's go through some examples to better understand how it works:
 */

// Example 1: Basic Fetch Request (GET request)
/**
 * The most basic usage of the Fetch API is to make a simple GET request to retrieve data.
 * 
 * Fetch returns a promise, which resolves to the `Response` object. You need to call `.json()` or `.text()` on the response object to extract the data.
 */
function getData() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            if (!response.ok) { // Check if the response is successful
                throw new Error('Network response was not ok');
            }
            return response.json();  // Convert the response to JSON
        })
        .then(data => {
            console.log(data);  // Output the fetched data (list of posts)
        })
        .catch(error => {
            console.log('Fetch error:', error);  // Handle any errors
        });
}

// Calling the function to fetch data
getData();
// Output: List of posts from the API


// Example 2: Fetch with Error Handling (Handling Non-200 Status Codes)
/**
 * It's important to check whether the response is successful or not. The Fetch API does not reject the promise on 4xx or 5xx HTTP status codes,
 * so we manually check `response.ok` to verify that the request was successful.
 */
function getDataWithErrorHandling() {
    fetch('https://jsonplaceholder.typicode.com/invalidEndpoint')  // Invalid endpoint
        .then(response => {
            if (!response.ok) {
                throw new Error('Request failed with status ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);  // This won't be reached
        })
        .catch(error => {
            console.error('Error occurred:', error);  // Output error message
        });
}

// Calling the function to demonstrate error handling
getDataWithErrorHandling();
// Output: Error occurred: Error: Request failed with status 404


// Example 3: POST Request with Fetch (Sending Data)
/**
 * The Fetch API allows you to make POST requests to send data to the server.
 * You can set the `method`, `headers`, and `body` properties to customize the request.
 */
function postData() {
    const data = {
        title: 'New Post',
        body: 'This is a new post.',
        userId: 1
    };

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',  // Specify the request method (POST)
        headers: {
            'Content-Type': 'application/json',  // Specify the type of content being sent
        },
        body: JSON.stringify(data)  // Convert the data to JSON string
    })
        .then(response => response.json())  // Parse the response JSON
        .then(result => {
            console.log('Post Created:', result);  // Output the result (newly created post)
        })
        .catch(error => {
            console.log('Error:', error);  // Handle any errors
        });
}

// Calling the function to create a post
postData();
// Output: Newly created post object


// Example 4: Fetch with Async/Await (Using Async Functions)
/**
 * Instead of using `.then()` and `.catch()`, you can use async/await for a more readable and synchronous-looking syntax.
 * This works the same as using `.then()`, but with cleaner code.
 */
async function fetchWithAsyncAwait() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error('Failed to fetch');
        }
        const data = await response.json();  // Await the JSON response
        console.log(data);  // Output the data
    } catch (error) {
        console.log('Error occurred:', error);  // Handle errors
    }
}

// Calling the async function
fetchWithAsyncAwait();
// Output: List of posts from the API


// Example 5: Fetching Data with Query Parameters (GET request with params)
/**
 * You can also pass query parameters in the URL when making GET requests.
 * The Fetch API works seamlessly with query parameters.
 */
function fetchWithQueryParams() {
    const userId = 1;
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);  // Output posts for the given user ID
        })
        .catch(error => {
            console.error('Error:', error);  // Handle errors
        });
}

// Calling the function with query parameters
fetchWithQueryParams();
// Output: Posts created by user with ID 1


/**
 * --- Key Concepts of Fetch API ---
 * 
 * 1. **GET Requests**: Fetch is used to request data from a server. You can retrieve resources like JSON data, text, or files.
 * 2. **POST Requests**: Fetch is used to send data to a server (e.g., creating or updating resources). The body of the request contains the data.
 * 3. **Promise-based**: The Fetch API returns a Promise, which you can handle using `.then()` for success and `.catch()` for errors.
 * 4. **Async/Await**: You can also use async/await with Fetch API to make asynchronous code look more synchronous and easier to read.
 * 5. **Error Handling**: You must manually check `response.ok` to detect errors (e.g., 404 or 500 status codes), as Fetch does not automatically reject on HTTP errors.
 * 
 * --- Benefits of Fetch API ---
 * 
 * 1. **Cleaner Syntax**: Fetch uses promises, making it more readable than older `XMLHttpRequest` (XHR) approaches.
 * 2. **Easier to Handle JSON**: Fetch supports working with JSON directly with `.json()` method.
 * 3. **Flexible**: Fetch supports all HTTP methods (GET, POST, PUT, DELETE, etc.), custom headers, and more.
 * 4. **Integration with Async/Await**: Fetch works seamlessly with `async/await`, making asynchronous code cleaner and easier to handle.
 * 
 * --- Conclusion ---
 * 
 * The Fetch API provides a modern and flexible approach to making HTTP requests. It's a powerful tool for interacting with remote resources and APIs, and it simplifies many of the tasks that were more complicated with older methods like `XMLHttpRequest`.
 * 
 * Whether you're making simple GET requests or more complex POST requests with data, Fetch provides an easy-to-use and promise-based approach.
 * 
 * Always remember to handle errors properly when using Fetch, as it does not reject promises on HTTP errors. Instead, check `response.ok` and handle failed responses appropriately.
 */
