// conditionalStatements
// This file demonstrates the usage of conditional statements in JavaScript,
// including if, if-else, if-else if-else, and switch statements with detailed examples.

// --------------------------------------------
// **1. if Statement**
// The `if` statement is used to execute a block of code if a condition evaluates to `true`.

let age = 20; // Define an age variable
if (age >= 18) {
  console.log("You are eligible to vote."); // Executes if the condition is true
}

// Nested if example
let score = 85; // Define a score variable
if (score >= 50) {
  console.log("You passed the exam.");
  if (score >= 90) {
    console.log("Excellent performance!"); // Executes if score >= 90
  }
}

// --------------------------------------------
// **2. if-else Statement**
// The `if-else` statement specifies a block of code to execute if the condition is `false`.

let number = 5; // Define a number variable
if (number % 2 === 0) {
  console.log("The number is even.");
} else {
  console.log("The number is odd."); // Executes if number % 2 !== 0
}

// Using comparison operators in an if-else statement
let temperature = 30; // Define temperature in degrees Celsius
if (temperature > 35) {
  console.log("It's a hot day.");
} else {
  console.log("The weather is pleasant."); // Executes if temperature <= 35
}

// --------------------------------------------
// **3. if-else if-else Statement**
// This structure evaluates multiple conditions in sequence.

let marks = 78; // Define marks variable
if (marks >= 90) {
  console.log("Grade: A"); // Executes if marks >= 90
} else if (marks >= 75) {
  console.log("Grade: B"); // Executes if marks >= 75 and < 90
} else if (marks >= 50) {
  console.log("Grade: C"); // Executes if marks >= 50 and < 75
} else {
  console.log("Grade: F"); // Executes if none of the above conditions are true
}

// --------------------------------------------
// **4. switch Statement**
// The `switch` statement evaluates an expression and matches it to a `case`.

let day = 3; // Define a day as a number (1 = Monday, 2 = Tuesday, etc.)
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day"); // Executes if day is not between 1 and 7
}

// Fruit selection example using switch
let fruit = "Apple"; // Define a fruit variable
switch (fruit) {
  case "Banana":
    console.log("Bananas are rich in potassium.");
    break;
  case "Apple":
    console.log("An apple a day keeps the doctor away.");
    break;
  case "Orange":
    console.log("Oranges are a great source of vitamin C.");
    break;
  default:
    console.log("Unknown fruit."); // Executes if fruit is not listed
}

// --------------------------------------------
// **Advanced Examples**
// Using Logical Operators in if statements

let time = 12; // Define time in 24-hour format
if (time > 6 && time < 18) {
  console.log("It's daytime."); // Executes if both conditions are true
} else {
  console.log("It's nighttime."); // Executes otherwise
}

// Combining conditions in switch
let userRole = "admin"; // Define a user role
switch (userRole) {
  case "admin":
  case "manager":
    console.log("You have full access."); // Executes if userRole is admin or manager
    break;
  case "user":
    console.log("You have limited access."); // Executes if userRole is user
    break;
  default:
    console.log("No access granted."); // Executes if userRole is none of the above
}


// - Use `if` for simple conditions.
// - Use `if-else` for binary (true/false) decisions.
// - Use `if-else if-else` for multiple sequential conditions.
// - Use `switch` for comparing a value against multiple specific cases.

// Experiment with these examples to understand the behavior of conditional statements!
