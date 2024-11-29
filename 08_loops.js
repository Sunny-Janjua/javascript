// loops
// This file demonstrates the usage of loops in JavaScript,
// including for, while, and do-while loops, with detailed examples and explanations.

// --------------------------------------------
// **What are Loops?**
// Loops allow us to repeat a block of code multiple times until a specified condition is met.
// JavaScript provides three main types of loops: for, while, and do-while.

// --------------------------------------------
// **1. for Loop**
// The `for` loop is used when the number of iterations is known beforehand.
// Syntax: for(initialization; condition; increment/decrement) { code block }

console.log("Examples of for loop:");

// Example 1: Basic for loop
for (let i = 1; i <= 5; i++) {
  console.log(`Iteration ${i}`);
}

// Example 2: Printing an array
let fruits = ["Apple", "Banana", "Cherry", "Date"];
for (let i = 0; i < fruits.length; i++) {
  console.log(`Fruit: ${fruits[i]}`);
}

// Example 3: Nested for loop (Multiplication table)
console.log("Multiplication Table:");
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}

// Example 4: Iterating over a string
let word = "Hello";
for (let i = 0; i < word.length; i++) {
  console.log(`Character ${i + 1}: ${word[i]}`);
}

// Example 5: Skipping iterations with `continue`
console.log("Skipping even numbers:");
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) continue; // Skip even numbers
  console.log(i);
}

// --------------------------------------------
// **2. while Loop**
// The `while` loop is used when the number of iterations is not known beforehand.
// Syntax: while(condition) { code block }

console.log("\nExamples of while loop:");

// Example 1: Basic while loop
let counter = 1;
while (counter <= 5) {
  console.log(`Counter: ${counter}`);
  counter++;
}

// Example 2: Sum of numbers
let sum = 0;
let num = 1;
while (num <= 5) {
  sum += num; // Adds num to sum
  num++;
}
console.log(`Sum of numbers from 1 to 5: ${sum}`);

// Example 3: User input simulation (using a counter here)
let attempts = 3;
while (attempts > 0) {
  console.log(`You have ${attempts} attempts remaining.`);
  attempts--;
}

// Example 4: Printing odd numbers
let odd = 1;
console.log("Odd numbers less than 10:");
while (odd < 10) {
  console.log(odd);
  odd += 2; // Increment by 2
}

// Example 5: Infinite loop prevention
let limit = 1;
while (true) {
  console.log("This is iteration", limit);
  if (limit === 3) break; // Stops the infinite loop
  limit++;
}

// --------------------------------------------
// **3. do-while Loop**
// The `do-while` loop is similar to the `while` loop but guarantees at least one execution of the code block.
// Syntax: do { code block } while(condition);

console.log("\nExamples of do-while loop:");

// Example 1: Basic do-while loop
let index = 1;
do {
  console.log(`Index: ${index}`);
  index++;
} while (index <= 5);

// Example 2: User prompt simulation (loop runs at least once)
let userResponse;
do {
  userResponse = "Hello"; // Replace with a prompt in a browser
  console.log(`You entered: ${userResponse}`);
} while (userResponse !== "exit");

// Example 3: Checking numbers
let number = 10;
do {
  console.log(`Current number: ${number}`);
  number--;
} while (number > 5);

// Example 4: Generating a countdown
let countdown = 3;
do {
  console.log(`Countdown: ${countdown}`);
  countdown--;
} while (countdown > 0);

// Example 5: Running at least once even if condition is false
let value = 0;
do {
  console.log("This will run at least once!");
} while (value !== 0);



// - **for**: Best when the number of iterations is known in advance.
// - **while**: Ideal for unknown iterations but based on a condition.
// - **do-while**: Guarantees execution of the loop body at least once.
// Experiment with these examples to understand how loops work in JavaScript!
