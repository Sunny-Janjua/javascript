// breakContinueExamples
// This file demonstrates the usage of `break` and `continue` statements
// in JavaScript, with detailed examples and explanations.

// --------------------------------------------
// **What are `break` and `continue`?**
// - `break`: Exits a loop or switch statement immediately when encountered.
// - `continue`: Skips the rest of the current loop iteration and proceeds to the next iteration.

// --------------------------------------------
// **1. The `break` Statement**
// The `break` statement is used to terminate a loop prematurely.

console.log("Examples of `break` statement:");

// Example 1: Breaking out of a `for` loop
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    console.log("Loop terminated at i =", i);
    break; // Exits the loop when i equals 5
  }
  console.log(`i = ${i}`);
}

// Example 2: Breaking out of a `while` loop
let count = 1;
while (count <= 10) {
  if (count === 4) {
    console.log("Exiting loop at count =", count);
    break; // Exits the loop when count equals 4
  }
  console.log(`count = ${count}`);
  count++;
}

// Example 3: Breaking out of a `switch` statement
let fruit = "Apple";
switch (fruit) {
  case "Banana":
    console.log("Banana is a great source of potassium.");
    break;
  case "Apple":
    console.log("Apple a day keeps the doctor away.");
    break; // Exits the switch block after executing this case
  case "Orange":
    console.log("Oranges are full of vitamin C.");
    break;
  default:
    console.log("Unknown fruit.");
}

// Example 4: Breaking nested loops
outerLoop: for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (i === 2 && j === 2) {
      console.log("Breaking out of both loops at i =", i, "and j =", j);
      break outerLoop; // Exits the outer loop
    }
    console.log(`i = ${i}, j = ${j}`);
  }
}

// Example 5: Exiting a search loop early
let numbers = [1, 3, 5, 7, 9];
for (let num of numbers) {
  if (num === 5) {
    console.log("Found 5, exiting the loop.");
    break;
  }
  console.log(`Current number: ${num}`);
}

// --------------------------------------------
// **2. The `continue` Statement**
// The `continue` statement skips the remaining code in the current iteration
// and proceeds to the next iteration of the loop.

console.log("\nExamples of `continue` statement:");

// Example 1: Skipping even numbers in a `for` loop
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue; // Skips even numbers
  }
  console.log(`Odd number: ${i}`);
}

// Example 2: Skipping specific iterations in a `while` loop
let index = 0;
while (index < 10) {
  index++;
  if (index === 5) {
    continue; // Skips the current iteration when index equals 5
  }
  console.log(`Index: ${index}`);
}

// Example 3: Using `continue` in a nested loop
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (j === 2) {
      continue; // Skips iteration where j equals 2
    }
    console.log(`i = ${i}, j = ${j}`);
  }
}

// Example 4: Skipping a condition in an array loop
let items = ["apple", "banana", "cherry", "date"];
for (let item of items) {
  if (item === "banana") {
    console.log("Skipping banana");
    continue; // Skips processing for "banana"
  }
  console.log(`Item: ${item}`);
}

// Example 5: Skipping certain conditions with logical checks
let scores = [85, 40, 72, 60, 95];
for (let score of scores) {
  if (score < 50) {
    console.log("Skipping low score:", score);
    continue; // Skips scores less than 50
  }
  console.log("Valid score:", score);
}



// - Use `break` to exit loops or switch statements entirely.
// - Use `continue` to skip specific iterations of a loop.
// - Both can improve the efficiency of your code by preventing unnecessary operations.
