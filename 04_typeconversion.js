// Type Conversion in JavaScript
// Type conversion refers to converting one data type to another. JavaScript performs two types of type conversion:

// Implicit Type Conversion (Type Coercion)
// The JavaScript engine automatically converts types during operations when necessary.

// Explicit Type Conversion
// You explicitly convert a value to another type using built-in methods.

// Implicit Type Conversion
// JavaScript automatically converts data types to make operations possible.
// This is common in operations involving numbers and strings.

console.log(5 + "5"); // "55"

console.log(0 || "Sunny"); // "Sunny"

console.log("10" - 2); // 8

console.log(true + 1); // 2

// Explicit Type Conversion
// You can manually convert types using built-in methods.

console.log(String(5)); // "5"

console.log(Boolean(0)); // false

console.log(Number("10")); // 10

let num = 42;

// Using String()
let str1 = String(num);
console.log(str1); // "42"

// Using toString()
let str2 = num.toString();
console.log(str2); // "42"

console.log(Number("123")); // 123
console.log(Number("Sunny")); // NaN

console.log(parseInt("123px")); // 123

console.log(parseFloat("123.45px")); // 123.45

console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false

// Operation	Example      	Result
// String       Concatenation	"Sunny" + 5	"Sunny5"
// Subtraction	"10" - 2	8
// Boolean  Conversion	Boolean("")	false
// Numeric Conversion	Number("42px")	NaN
// Truthy Check	if("Sunny")	true
