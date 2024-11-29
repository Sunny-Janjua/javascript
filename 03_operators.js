// JavaScript Operators

// Operators in JavaScript are symbols or keywords used to perform
//  operations on values and variables. Operators can be categorized into different types, such as:
//  Arithmetic, Comparison, Logical, Assignment, Bitwise, Ternary, Nullish Coalescing, and Type Check.

// ================================================
// Arithmetic Operators
// These operators perform mathematical operations.

// Operator    Description                          Example
// +           Addition                            5 + 3 = 8
// -           Subtraction                         10 - 7 = 3
// *           Multiplication                      4 * 2 = 8
// /           Division                            20 / 4 = 5
// %           Modulus (Remainder)                 7 % 3 = 1
// **          Exponentiation                      2 ** 3 = 8
// ++          Increment                           x++ (x = 5 → 6)
// --          Decrement                           x-- (x = 5 → 4)

let a = 10, b = 3;

console.log(a + b);  // 13
console.log(a - b);  // 7
console.log(a * b);  // 30
console.log(a / b);  // 3.333...
console.log(a % b);  // 1
console.log(a ** b); // 1000
a++;                 // Increment
console.log(a);      // 11
b--;                 // Decrement
console.log(b);      // 2


// ================================================
// Comparison Operators
// These operators compare two values and return a Boolean (true or false).

// Operator    Description                        Example
// ==          Equal to                            5 == '5' = true
// ===         Strict equal to                     5 === '5' = false
// !=          Not equal to                        5 != 3 = true
// !==         Strict not equal to                 5 !== '5' = true
// >           Greater than                        10 > 5 = true
// <           Less than                           10 < 5 = false
// >=          Greater than or equal to            5 >= 5 = true
// <=          Less than or equal to               5 <= 3 = false

let x = 5, y = '5';

console.log(x == y);   // true (loose equality)
console.log(x === y);  // false (strict equality)
console.log(x != 3);   // true
console.log(x !== y);  // true
console.log(x > 2);    // true
console.log(x <= 5);   // true


// ================================================
// Logical Operators
// These operators are used to perform logical operations.

// Operator    Description            Example
// &&          Logical AND           true && false = false
// ||          Logical OR            true || false = true
// !           Logical NOT           !true = false

let a = true, b = false;

console.log(a && b);  // false
console.log(a || b);  // true
console.log(!a);      // false


// ================================================
// Assignment Operators
// These are used to assign values to variables.

// Operator    Description                        Example
// =           Assign                              x = 5
// +=          Add and assign                      x += 5 (x = x + 5)
// -=          Subtract and assign                 x -= 3 (x = x - 3)
// *=          Multiply and assign                 x *= 2 (x = x * 2)
// /=          Divide and assign                   x /= 2 (x = x / 2)
// %=          Modulus and assign                  x %= 3 (x = x % 3)
// **=         Exponentiation and assign           x **= 2 (x = x ** 2)

let x = 10;

x += 5;   // x = x + 5 → 15
x -= 3;   // x = x - 3 → 12
x *= 2;   // x = x * 2 → 24
x /= 6;   // x = x / 6 → 4
x %= 2;   // x = x % 2 → 0
x **= 3;  // x = x ** 3 → 8
console.log(x);  // Output: 8


// ================================================
// Ternary Operator
// A shorthand for if-else.

// Syntax    Description
// condition ? expr1 : expr2   If condition is true, execute expr1; otherwise, execute expr2

let age = 18;
let status = (age >= 18) ? "Adult" : "Minor";
console.log(status); // Output: "Adult"


// ================================================
// Other Operators
// Bitwise, Nullish Coalescing, and Type Check

// Bitwise Operators: & (AND), | (OR), ^ (XOR), ~ (NOT), << (Left shift), >> (Right shift)
// Example: let c = 5 & 3;  // 0101 & 0011 → 0001 (1 in decimal)

// Nullish Coalescing Operator: ??
// Used to assign a default value only if the left side is `null` or `undefined`
let username = null;
let defaultName = username ?? "Guest";
console.log(defaultName);  // Output: "Guest"

// Type Check Operators: typeof, instanceof
let num = 42;
console.log(typeof num);  // Output: "number"
console.log(num instanceof Number);  // Output: false


