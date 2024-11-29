// Array and String Manipulations in JavaScript

// **Definition:**
// Array and String manipulations involve operations that can be performed to modify or retrieve information from arrays and strings.
// These operations include methods for adding/removing elements, accessing, searching, modifying, and iterating over arrays or strings.

// ----------------------------------------------
// **Array Manipulation**
// Arrays are ordered collections of elements in JavaScript. You can manipulate arrays using various methods.

// **1. Creating an Array:**
// Arrays can be created using square brackets or the Array constructor.

let arr1 = [1, 2, 3, 4, 5];   // Using square brackets
let arr2 = new Array(6, 7, 8);  // Using Array constructor

console.log(arr1);  // Output: [1, 2, 3, 4, 5]
console.log(arr2);  // Output: [6, 7, 8]


// **2. Accessing Array Elements:**
// You can access array elements by their index (starting from 0).

console.log(arr1[0]);  // Output: 1 (First element)
console.log(arr2[2]);  // Output: 8 (Third element)


// **3. Adding Elements to Arrays:**
// You can add elements to the beginning or end of an array.

// **push()** - Adds one or more elements to the end of an array.
arr1.push(6);   // Adds 6 to the end
console.log(arr1);  // Output: [1, 2, 3, 4, 5, 6]

// **unshift()** - Adds one or more elements to the beginning of an array.
arr1.unshift(0);   // Adds 0 to the beginning
console.log(arr1);  // Output: [0, 1, 2, 3, 4, 5, 6]


// **4. Removing Elements from Arrays:**
// You can remove elements from the beginning or end of an array.

// **pop()** - Removes the last element of an array.
arr1.pop();   // Removes 6
console.log(arr1);  // Output: [0, 1, 2, 3, 4, 5]

// **shift()** - Removes the first element of an array.
arr1.shift();   // Removes 0
console.log(arr1);  // Output: [1, 2, 3, 4, 5]


// **5. Finding Elements in an Array:**
// You can search for elements in an array using built-in methods.

// **indexOf()** - Returns the index of the first occurrence of an element.
console.log(arr1.indexOf(3));  // Output: 2 (The index of element 3)

// **includes()** - Returns true if the element exists in the array.
console.log(arr1.includes(4));  // Output: true


// **6. Array Iteration Methods:**
// You can iterate over the elements of an array using different methods.

// **forEach()** - Executes a provided function once for each array element.
arr1.forEach(element => console.log(element));  // Output: 1 2 3 4 5

// **map()** - Creates a new array with the results of calling a provided function on every element.
let doubledArr = arr1.map(x => x * 2);  // Output: [2, 4, 6, 8, 10]
console.log(doubledArr);


// **7. Filtering Elements:**
// You can filter out elements from an array using the **filter()** method.

// **filter()** - Creates a new array with all elements that pass the test implemented by the provided function.
let evenArr = arr1.filter(x => x % 2 === 0);  // Output: [2, 4]
console.log(evenArr);


// **8. Sorting Arrays:**
// You can sort arrays using the **sort()** method.

// **sort()** - Sorts the elements of an array in place.
let arr3 = [3, 1, 4, 2, 5];
arr3.sort((a, b) => a - b);  // Sorting in ascending order
console.log(arr3);  // Output: [1, 2, 3, 4, 5]


// ----------------------------------------------
// **String Manipulation**
// Strings in JavaScript are sequences of characters and have many built-in methods to modify or access their contents.

// **1. Creating a String:**
// Strings can be created using single quotes, double quotes, or backticks (for template literals).

let str1 = "Hello, World!";  // Using double quotes
let str2 = 'JavaScript is awesome';  // Using single quotes
let str3 = `I love coding`;  // Using backticks (Template literals)

console.log(str1);  // Output: Hello, World!
console.log(str2);  // Output: JavaScript is awesome
console.log(str3);  // Output: I love coding


// **2. Accessing String Characters:**
// You can access characters in a string using their index.

console.log(str1[0]);  // Output: "H" (First character of the string)


// **3. Modifying Strings:**
// Strings are immutable in JavaScript. You can modify strings by performing operations like concatenation or slicing.

// **concat()** - Joins two or more strings together.
let newStr = str1.concat(" How are you?");
console.log(newStr);  // Output: Hello, World! How are you?

// **slice()** - Extracts a section of a string and returns it as a new string.
let slicedStr = str1.slice(0, 5);  // Extracts characters from index 0 to 4
console.log(slicedStr);  // Output: Hello


// **4. String Search Methods:**
// You can search for substrings within a string.

// **indexOf()** - Returns the index of the first occurrence of a specified substring.
console.log(str1.indexOf("World"));  // Output: 7

// **includes()** - Returns true if the substring exists in the string.
console.log(str1.includes("Hello"));  // Output: true


// **5. String Case Manipulation:**
// You can change the case of characters in a string using the following methods.

// **toUpperCase()** - Converts all characters to uppercase.
console.log(str1.toUpperCase());  // Output: HELLO, WORLD!

// **toLowerCase()** - Converts all characters to lowercase.
console.log(str1.toLowerCase());  // Output: hello, world!


// **6. String Replacement:**
// You can replace parts of a string using the **replace()** method.

// **replace()** - Replaces the first occurrence of a substring with another string.
let updatedStr = str2.replace("awesome", "fantastic");
console.log(updatedStr);  // Output: JavaScript is fantastic


// **7. String Trimming:**
// You can trim whitespace from the beginning and end of a string using the **trim()** method.

let strWithSpaces = "   Trim this text   ";
console.log(strWithSpaces.trim());  // Output: "Trim this text"


// **8. Splitting a String into an Array:**
// You can split a string into an array of substrings using the **split()** method.

// **split()** - Splits a string into an array of substrings based on a delimiter.
let words = str2.split(" ");  // Splits the string at each space
console.log(words);  // Output: ["JavaScript", "is", "awesome"]


// **Key Points to Remember:**
// 1. **Array Manipulation:**
//    - Arrays are dynamic, and you can add, remove, and modify elements.
//    - Common methods include `push()`, `pop()`, `shift()`, `unshift()`, `map()`, `filter()`, `sort()`, etc.
//    - Arrays are zero-indexed, meaning the first element is at index 0.


// 2. **String Manipulation:**
//    - Strings are immutable in JavaScript, but you can manipulate them using methods like `slice()`, `concat()`, `replace()`, etc.
//    - You can change string case with methods like `toUpperCase()` and `toLowerCase()`, and trim spaces with `trim()`.
//    - Methods like `indexOf()`, `includes()`, and `split()` help in searching and splitting strings.

// By understanding and using these array and string manipulation methods, you can easily modify and interact with arrays and strings in JavaScript.
