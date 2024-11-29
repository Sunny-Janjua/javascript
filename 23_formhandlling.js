/*
  ** Form Handling in JavaScript
  
  HTML forms allow users to input data that can be sent to a server or used to update the page. In JavaScript, you can manipulate forms by listening for user input, validating form fields, preventing default form submission behavior, and collecting form data. Below is a step-by-step explanation with examples.
*/

// Basic HTML Form Structure
/*
  <form id="userForm">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name">
    <label for="email">Email:</label>
    <input type="email" id="email" name="email">
    <button type="submit">Submit</button>
  </form>
*/

// ** Form Submission with Event Listener
// By adding an event listener to the form, you can capture the submit event and prevent the default submission process. This allows you to handle the form data in JavaScript.

const form = document.querySelector("#userForm");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevents the form from submitting to the server

  // Capture form data
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;

  console.log("Name:", name);
  console.log("Email:", email);

  // You can then process or send the form data as required
});

/*
  ** Explanation:
  - We add an event listener for the `submit` event.
  - `event.preventDefault()` stops the form from submitting, allowing us to process the data manually in JavaScript.
  - The `value` property is used to capture the data entered in the form fields.
*/

// ** Accessing Form Elements
// You can access form elements in JavaScript using `document.querySelector()`, or by using the form's `elements` property to get all input fields by their name.

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");

console.log(nameInput.value); // Gets the current value of the name input
console.log(emailInput.value); // Gets the current value of the email input

/*
  ** Explanation:
  - By using `document.querySelector()`, we can access specific form elements by their ID, class, or name.
  - Alternatively, you can use `form.elements` to access all form fields as a collection.
*/

// ** Validating Form Data
// Form validation ensures that the user enters the correct type of data (e.g., ensuring an email is valid or a required field is filled). You can use HTML5 validation or manually validate using JavaScript.

const formValidation = document.querySelector("#userForm");

formValidation.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Validation for the 'name' field
  const name = document.querySelector("#name").value;
  if (name === "") {
    alert("Name is required!");
    return; // Prevent form submission if name is empty
  }

  // Validation for the 'email' field
  const email = document.querySelector("#email").value;
  if (!validateEmail(email)) {
    alert("Please enter a valid email address!");
    return; // Prevent form submission if email is invalid
  }

  alert("Form submitted successfully!");
});

// Email validation function
function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

/*
  ** Explanation:
  - We check if the name field is empty and display an alert if it is.
  - For email validation, a regular expression is used to check whether the entered email is valid.
  - If validation fails, the form submission is prevented.
*/

// ** Using `FormData` to Collect Form Data
// `FormData` is a built-in JavaScript object that can be used to easily collect and process form data. It's particularly useful for sending form data via AJAX or `fetch`.

const formDataExample = document.querySelector("#userForm");

formDataExample.addEventListener("submit", function(event) {
  event.preventDefault();

  const formData = new FormData(formDataExample);

  // Log form data key-value pairs
  formData.forEach(function(value, key) {
    console.log(`${key}: ${value}`);
  });
});

/*
  ** Explanation:
  - `FormData` allows you to create an object that holds all the form data in key-value pairs.
  - The `forEach()` method is used to loop through the `FormData` object and print each field's name and value.
*/

// ** Submitting Form Data via AJAX or Fetch
// After collecting form data, you can send it to the server using AJAX or the `fetch()` API.

const formSubmitAjax = document.querySelector("#userForm");

formSubmitAjax.addEventListener("submit", function(event) {
  event.preventDefault();

  const formData = new FormData(formSubmitAjax);

  fetch("/submit-form", {
    method: "POST",
    body: formData,
  })
    .then(response => response.json())
    .then(data => {
      console.log("Form submitted successfully:", data);
    })
    .catch(error => {
      console.error("Error:", error);
    });
});

/*
  ** Explanation:
  - We use the `fetch()` method to send form data to a server endpoint (`/submit-form`).
  - The data is sent as the body of the request in the `FormData` format.
  - The response is then handled, and data is logged in the console.
*/

// ** Resetting Form Fields
// You can reset the form fields to their default values using the `reset()` method.

const resetForm = document.querySelector("#userForm");

const resetButton = document.querySelector("#resetButton");

resetButton.addEventListener("click", function() {
  resetForm.reset(); // Resets all form fields to their initial values
});

/*
  ** Explanation:
  - The `reset()` method is used to reset the form to its default state, clearing all the input fields and restoring any pre-filled values.
*/

// ** Form Events
// Forms also have other events that you can listen for, such as `focus`, `blur`, `change`, and `input`.

// Example 1: `input` event
const inputField = document.querySelector("#name");
inputField.addEventListener("input", function(event) {
  console.log("Current value:", event.target.value);
});

// Example 2: `focus` and `blur` events
inputField.addEventListener("focus", function() {
  console.log("Input field is focused");
});

inputField.addEventListener("blur", function() {
  console.log("Input field lost focus");
});

/*
  ** Explanation:
  - The `input` event triggers every time the value of an input field changes.
  - The `focus` event is triggered when an input field gains focus, and `blur` is triggered when it loses focus.
*/

// ** Advanced: File Input Handling
// If your form has a file input field, you can handle file selection by using the `files` property of the input element.

const fileInput = document.querySelector("#fileInput");

fileInput.addEventListener("change", function(event) {
  const files = event.target.files; // List of selected files

  if (files.length > 0) {
    console.log("Selected file:", files[0].name); // Logs the name of the first selected file
  }
});

/*
  ** Explanation:
  - The `change` event on the file input is triggered when the user selects a file.
  - `event.target.files` contains the list of files selected in the input field.
*/

// ** Conclusion
// Form handling in JavaScript allows for the collection, validation, and submission of user input in a dynamic way. By using event listeners and manipulating form elements, you can create rich interactive forms that respond to user actions.
