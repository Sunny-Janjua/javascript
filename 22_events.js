/*
  ** Events and Event Listeners in JavaScript

  In JavaScript, an event is an occurrence in the browser, such as a user clicking a button, typing on the keyboard, or moving the mouse. When these events occur, the browser creates an event object, which contains information about the event. JavaScript can respond to these events through **event listeners**.
*/

// Types of Events

// 1. Mouse Events
// - click: Triggered when an element is clicked
// - dblclick: Triggered when an element is double-clicked
// - mouseover: Triggered when the mouse pointer enters an element
// - mouseout: Triggered when the mouse pointer leaves an element

// 2. Keyboard Events
// - keydown: Triggered when a key is pressed down
// - keyup: Triggered when a key is released
// - keypress: Triggered when a key is pressed (deprecated, use keydown or keyup)

// 3. Form Events
// - submit: Triggered when a form is submitted
// - focus: Triggered when an input element gains focus
// - blur: Triggered when an input element loses focus

// 4. Window Events
// - load: Triggered when the page is fully loaded
// - resize: Triggered when the window is resized
// - scroll: Triggered when the user scrolls the page

// 5. Touch Events (for mobile devices)
// - touchstart: Triggered when the user touches an element
// - touchend: Triggered when the user stops touching an element
// - touchmove: Triggered when the user moves their finger on an element

/*
  ** Adding Event Listeners

  An **event listener** is a function that listens for a specific event on an element and executes a callback function when the event occurs. The `addEventListener()` method is used to attach an event listener to an element.
*/

// Syntax: element.addEventListener(event, callbackFunction, useCapture);
// - event: the type of event to listen for (e.g., 'click', 'keydown')
// - callbackFunction: the function to be executed when the event occurs
// - useCapture (optional): true for capturing phase, false for bubbling phase (default)

// Example 1: Basic Click Event
const button = document.querySelector("#myButton");

button.addEventListener("click", function() {
  alert("Button clicked!");
});

/*
  ** Explanation:
  - When the button with the ID 'myButton' is clicked, the alert is triggered.
*/

// Example 2: Mouseover Event
const heading = document.querySelector("#heading");

heading.addEventListener("mouseover", function() {
  heading.style.color = "blue"; // Changes text color when mouse is over the heading
});

/*
  ** Explanation:
  - When the mouse enters the element with the ID 'heading', the color of the text changes to blue.
*/

// Example 3: Keydown Event
const inputField = document.querySelector("#inputField");

inputField.addEventListener("keydown", function(event) {
  console.log("Key pressed: " + event.key); // Logs the key that was pressed
});

/*
  ** Explanation:
  - When a key is pressed inside the input field, it logs the key that was pressed (e.g., 'A', 'Enter').
*/

// Example 4: Form Submit Event
const form = document.querySelector("#myForm");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevents the form from submitting
  alert("Form Submitted!");
});

/*
  ** Explanation:
  - When the form with the ID 'myForm' is submitted, the event listener prevents the default form submission
    and shows an alert message.
*/

// Example 5: Window Load Event
window.addEventListener("load", function() {
  console.log("Page has finished loading!");
});

/*
  ** Explanation:
  - When the entire page (including all resources like images) has loaded, a message is logged to the console.
*/

// Removing Event Listeners

// If you want to remove an event listener, you can use the `removeEventListener()` method.
// It requires the same parameters as `addEventListener()`, including the reference to the event handler function.

// Example 6: Remove Click Event Listener
const buttonToRemove = document.querySelector("#removeButton");

function handleClick() {
  alert("This will be removed!");
}

buttonToRemove.addEventListener("click", handleClick);

// Later, remove the event listener
buttonToRemove.removeEventListener("click", handleClick);

/*
  ** Explanation:
  - A click event listener is first added to the button with the ID 'removeButton', but later it is removed.
  - The `handleClick` function reference is needed to remove the event listener.
*/

// Event Object

// When an event occurs, an event object is passed to the event handler. This object contains useful information about the event, such as:
// - event.target: The element that triggered the event
// - event.type: The type of the event (e.g., 'click', 'keydown')
// - event.preventDefault(): Prevents the default action of the event (e.g., form submission, link navigation)
// - event.stopPropagation(): Stops the event from propagating (bubbling or capturing)

// Example 7: Accessing Event Object
document.querySelector("#clickMe").addEventListener("click", function(event) {
  console.log("Event target:", event.target); // Logs the clicked element
  console.log("Event type:", event.type); // Logs 'click'
  event.preventDefault(); // Prevents default action
});

/*
  ** Explanation:
  - When the element with the ID 'clickMe' is clicked, the event object is logged to the console.
  - The `preventDefault()` method stops the default action of the click event, which may be a link navigation or form submission.
*/

// Event Propagation: Bubbling and Capturing

// 1. **Event Bubbling**: When an event is triggered on an element, it propagates upwards through its ancestors (from target to root).
// 2. **Event Capturing**: When an event is triggered on an element, it propagates downwards through its ancestors (from root to target).

// You can specify the phase using the third argument in `addEventListener()`:
// - true: Capturing phase
// - false: Bubbling phase (default)

// Example 8: Event Bubbling and Capturing
document.querySelector("#parent").addEventListener("click", function() {
  console.log("Parent clicked (bubbling)");
});

document.querySelector("#child").addEventListener("click", function() {
  console.log("Child clicked (capturing)");
}, true);

/*
  ** Explanation:
  - When you click the child element, the event propagates in the capturing phase first, logging 'Child clicked (capturing)' before 'Parent clicked (bubbling)'.
*/

// Delegated Event Listeners

// Event delegation is a technique where you attach a single event listener to a parent element, 
// and the event is propagated from the target element to the parent. This is useful for handling events on dynamically added elements.

// Example 9: Event Delegation
document.querySelector("#parent").addEventListener("click", function(event) {
  if (event.target && event.target.matches("button")) {
    console.log("Button inside parent clicked!");
  }
});

/*
  ** Explanation:
  - When any button inside the parent element is clicked, the event listener triggers.
  - The event listener checks if the target of the event is a button using `matches()`.
*/

// Conclusion

// In JavaScript, events allow us to respond to user actions and interact dynamically with the web page.
// Using event listeners, you can handle different types of events, manipulate the DOM, and control the behavior of your page.
