/*
  ** DOM (Document Object Model) Explanation and Examples
  The Document Object Model (DOM) is an interface that allows JavaScript to interact with HTML or XML documents. The DOM represents the document as a tree structure, where each node is an object representing a part of the document.
  
  Key Characteristics:
  - The DOM is a tree structure.
  - It is dynamic (changes can be made at runtime).
  - It allows manipulation of the structure, content, and style of web pages.
*/

// Accessing Elements in the DOM
// Methods to select elements in the DOM

// 1. getElementById() - Access element by ID
const elementById = document.getElementById("myElement");

// 2. getElementsByClassName() - Access elements by class name
const elementsByClass = document.getElementsByClassName("myClass");

// 3. getElementsByTagName() - Access elements by tag name
const paragraphs = document.getElementsByTagName("p");

// 4. querySelector() - Access first element matching a CSS selector
const firstButton = document.querySelector("button");

// 5. querySelectorAll() - Access all elements matching a CSS selector
const allButtons = document.querySelectorAll("button");

// Manipulating Elements in the DOM
// Once you access elements, you can manipulate them:

// 1. Change text content
const title = document.getElementById("title");
title.textContent = "Updated Title";

// 2. Change HTML content
const content = document.getElementById("content");
content.innerHTML = "<p>Updated content with HTML.</p>";

// 3. Change style (CSS)
const paragraph = document.querySelector("p");
paragraph.style.color = "blue";  // Changes the text color to blue

// 4. Change attributes
const link = document.querySelector("a");
link.setAttribute("href", "https://www.new-url.com");

// Creating and Removing Elements in the DOM
// 1. Create a new element
const newDiv = document.createElement("div");
newDiv.textContent = "This is a new div!";
document.body.appendChild(newDiv); // Adds the new div to the body

// 2. Remove an element
const oldElement = document.getElementById("oldElement");
oldElement.remove(); // Removes the element with ID 'oldElement'

// 3. Append an element as a child to another element
const container = document.getElementById("container");
container.appendChild(newDiv);

// Handling Events in the DOM
// Events allow you to interact with the user. For example, handling clicks:

// 1. Add an event listener
const button = document.getElementById("myButton");
button.addEventListener("click", function() {
  alert("Button clicked!");
});

// 2. Remove an event listener
const handleClick = function() {
  alert("Button clicked!");
};
button.addEventListener("click", handleClick);
button.removeEventListener("click", handleClick);

// DOM Properties and Methods

// 1. document.getElementById() - Accesses an element by ID
const header = document.getElementById("header");

// 2. document.createElement() - Creates a new HTML element
const newSpan = document.createElement("span");
newSpan.textContent = "Hello";

// 3. element.appendChild() - Appends a new child element to a parent element
document.body.appendChild(newSpan);

// 4. element.remove() - Removes an element from the DOM
newSpan.remove();

// 5. element.innerHTML - Accesses or sets HTML content
const article = document.getElementById("article");
article.innerHTML = "<h2>Updated Article</h2><p>This is the content.</p>";

// 6. element.textContent - Accesses or sets text content
const paragraphText = document.getElementById("para");
paragraphText.textContent = "This is updated text content.";

// 7. element.style - Accesses or sets the CSS styles
const div = document.getElementById("myDiv");
div.style.backgroundColor = "lightgreen";

// 8. element.setAttribute() - Sets an attribute of an element
const img = document.getElementById("image");
img.setAttribute("src", "new-image.jpg");

// 9. element.getAttribute() - Gets the value of an attribute
const srcValue = img.getAttribute("src");

// 10. element.classList - Accesses class list and modifies classes
div.classList.add("newClass");
div.classList.remove("oldClass");

// DOM Events

// 1. click - Event when an element is clicked
button.addEventListener("click", function() {
  console.log("Button was clicked!");
});

// 2. mouseover - Event when mouse pointer hovers over an element
button.addEventListener("mouseover", function() {
  console.log("Mouse is over the button.");
});

// 3. keydown - Event when a key is pressed down
document.addEventListener("keydown", function(event) {
  console.log(`Key pressed: ${event.key}`);
});

// 4. load - Event when the page has finished loading
window.addEventListener("load", function() {
  console.log("Page has loaded.");
});

// Event Bubbling and Capturing
// Events propagate through the DOM in two ways: Capturing and Bubbling.
// By default, events bubble from the target element up to the root (document).

// Example of Event Capturing
document.querySelector("#parent").addEventListener("click", function() {
  console.log("Parent Clicked!");
}, true); // true for capturing phase

// Example of Event Bubbling
document.querySelector("#child").addEventListener("click", function() {
  console.log("Child Clicked!");
}); // false for bubbling phase (default)

// DOM Manipulation Best Practices
// 1. Minimize DOM manipulations: Avoid frequent changes to the DOM as it can be slow.
const newElement = document.createElement("p");
newElement.textContent = "A new paragraph!";
document.body.appendChild(newElement);

// 2. Use textContent over innerHTML: When you're working with text, use textContent for security and performance reasons.
const textOnlyElement = document.createElement("p");
textOnlyElement.textContent = "This is text content";
document.body.appendChild(textOnlyElement);

// 3. Use event delegation: Attach a single event listener to a parent instead of attaching it to multiple child elements.
document.querySelector("#parent").addEventListener("click", function(event) {
  if (event.target.tagName === "BUTTON") {
    alert("Button clicked inside parent!");
  }
});

// Conclusion
// The DOM is a powerful interface that allows JavaScript to interact with HTML and XML documents dynamically. By using methods such as getElementById(), querySelector(), and event listeners, you can access and modify elements, handle user interactions, and create a dynamic and interactive webpage.
