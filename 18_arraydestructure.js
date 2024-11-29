// Destructuring Arrays and Objects in JavaScript

// 1. Array Destructuring
// Array destructuring allows you to unpack values from an array into distinct variables.

console.log("Array Destructuring Example:");
let colors = ["red", "blue", "green"];

// Destructure the array into individual variables
let [firstColor, secondColor, thirdColor] = colors;
console.log(firstColor);  // Output: "red"
console.log(secondColor); // Output: "blue"
console.log(thirdColor);  // Output: "green"

// Skipping elements during destructuring
let [first, , third] = colors;
console.log(first);  // Output: "red"
console.log(third);  // Output: "green"

// Default Values in Array Destructuring
let [primaryColor = "yellow", secondaryColor = "orange"] = ["blue"];
console.log(primaryColor);   // Output: "blue" (from array)
console.log(secondaryColor); // Output: "orange" (default value)

// Swapping values using destructuring
let a = 1, b = 2;
[a, b] = [b, a];
console.log(a); // Output: 2
console.log(b); // Output: 1

// Rest Operator in Array Destructuring
let [firstColor1, ...restColors] = colors;
console.log(firstColor1);  // Output: "red"
console.log(restColors);   // Output: ["blue", "green"]


// 2. Object Destructuring
// Object destructuring allows you to unpack properties from an object into individual variables.

console.log("\nObject Destructuring Example:");
let person = {
  name: "John",
  age: 30,
  city: "New York"
};

// Destructure the object into variables
let { name, age, city } = person;
console.log(name); // Output: "John"
console.log(age);  // Output: 30
console.log(city); // Output: "New York"

// Destructuring with Renaming
let { name: fullName, age: years } = person;
console.log(fullName); // Output: "John"
console.log(years);    // Output: 30

// Default Values in Object Destructuring
let { name: personName, country = "USA" } = person;
console.log(personName); // Output: "John"
console.log(country);    // Output: "USA" (default value)

// Nested Destructuring in Objects
let employee = {
  id: 101,
  personalInfo: {
    name: "Jane",
    age: 28
  }
};

// Destructuring nested object properties
let { personalInfo: { name: empName, age: empAge } } = employee;
console.log(empName); // Output: "Jane"
console.log(empAge);  // Output: 28

// Destructuring Function Arguments
function displayPerson({ name, age }) {
  console.log(name, age);
}
displayPerson(person); // Output: "John 30"

// Rest Operator in Object Destructuring
let { name: employeeName, ...otherDetails } = person;
console.log(employeeName);  // Output: "John"
console.log(otherDetails);  // Output: { age: 30, city: "New York" }
