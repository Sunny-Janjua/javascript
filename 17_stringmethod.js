// String Methods Demonstration in JavaScript

// 1. slice() - Extracts a section of a string and returns it as a new string
// The slice() method takes two arguments: start index and end index (end not included).
console.log("slice() Example:");
let text = "JavaScript is awesome";
// Extract "Script"
let slicedText = text.slice(4, 10);
console.log(slicedText); // Output: "Script"

// 2. substring() - Similar to slice but does not accept negative indexes
// The substring() method extracts characters from start index to end index (end not included).
console.log("\nsubstring() Example:");
let str = "Programming";
// Extract "gram"
let subString = str.substring(3, 7);
console.log(subString); // Output: "gram"

// 3. includes() - Checks if a string contains a specified substring
// The includes() method returns true if the string contains the specified value, otherwise false.
console.log("\nincludes() Example:");
let sentence = "Learning JavaScript is fun";
// Check if "JavaScript" is present
let containsWord = sentence.includes("JavaScript");
console.log(containsWord); // Output: true

// 4. indexOf() - Returns the position of the first occurrence of a specified value
// The indexOf() method searches for a substring and returns its position, or -1 if not found.
console.log("\nindexOf() Example:");
let phrase = "Find the first index of this word";
// Find the position of "first"
let firstIndex = phrase.indexOf("first");
console.log(firstIndex); // Output: 10

// 5. lastIndexOf() - Returns the position of the last occurrence of a specified value
// The lastIndexOf() method searches the string from the end and returns the last occurrence index.
console.log("\nlastIndexOf() Example:");
let repeatedText = "Repeat, repeat, and repeat again";
// Find the last occurrence of "repeat"
let lastIndex = repeatedText.lastIndexOf("repeat");
console.log(lastIndex); // Output: 19

// 6. toLowerCase() - Converts the string to lowercase
// The toLowerCase() method transforms all characters in the string to lowercase.
console.log("\ntoLowerCase() Example:");
let upperText = "HELLO WORLD";
// Convert to lowercase
let lowerText = upperText.toLowerCase();
console.log(lowerText); // Output: "hello world"

// 7. toUpperCase() - Converts the string to uppercase
// The toUpperCase() method transforms all characters in the string to uppercase.
console.log("\ntoUpperCase() Example:");
let lowerCaseText = "good morning";
// Convert to uppercase
let upperCaseText = lowerCaseText.toUpperCase();
console.log(upperCaseText); // Output: "GOOD MORNING"

// 8. split() - Splits a string into an array of substrings based on a separator
// The split() method divides a string into an array based on a specified delimiter.
console.log("\nsplit() Example:");
let csvData = "apple,banana,cherry";
// Split into an array
let fruits = csvData.split(",");
console.log(fruits); // Output: ["apple", "banana", "cherry"]

// 9. replace() - Replaces the first occurrence of a substring with a new value
// The replace() method replaces a substring with a new string.
console.log("\nreplace() Example:");
let message = "Hello there, John";
// Replace "John" with "Doe"
let updatedMessage = message.replace("John", "Doe");
console.log(updatedMessage); // Output: "Hello there, Doe"

// 10. replaceAll() - Replaces all occurrences of a substring with a new value
// The replaceAll() method replaces all instances of a substring in the string.
console.log("\nreplaceAll() Example:");
let messyText = "Messy messy messy";
// Replace all "messy" with "clean"
let cleanedText = messyText.replaceAll("messy", "clean");
console.log(cleanedText); // Output: "Clean clean clean"

// 11. trim() - Removes whitespace from both ends of a string
// The trim() method removes whitespace from the beginning and end of the string.
console.log("\ntrim() Example:");
let paddedText = "   Trim me!   ";
// Trim the whitespace
let trimmedText = paddedText.trim();
console.log(trimmedText); // Output: "Trim me!"

// 12. startsWith() - Checks if the string starts with a specified value
// The startsWith() method returns true if the string starts with the specified substring.
console.log("\nstartsWith() Example:");
let greeting = "Good morning!";
// Check if it starts with "Good"
let startsWithGood = greeting.startsWith("Good");
console.log(startsWithGood); // Output: true

// 13. endsWith() - Checks if the string ends with a specified value
// The endsWith() method returns true if the string ends with the specified substring.
console.log("\nendsWith() Example:");
let farewell = "Goodbye for now";
// Check if it ends with "now"
let endsWithNow = farewell.endsWith("now");
console.log(endsWithNow); // Output: true

// 14. charAt() - Returns the character at a specified index
// The charAt() method returns the character at a given position in the string.
console.log("\ncharAt() Example:");
let word = "Character";
// Get the character at index 4
let char = word.charAt(4);
console.log(char); // Output: "a"

// 15. charCodeAt() - Returns the Unicode value of the character at a specified index
// The charCodeAt() method returns the Unicode of the character at the given index.
console.log("\ncharCodeAt() Example:");
let letter = "A";
// Get the Unicode value of the character
let unicodeValue = letter.charCodeAt(0);
console.log(unicodeValue); // Output: 65

// 16. padStart() - Pads the string from the start with a specified string
// The padStart() method pads the beginning of the string to a certain length.
console.log("\npadStart() Example:");
let number = "5";
// Pad the string to length 3 with "0"
let paddedNumber = number.padStart(3, "0");
console.log(paddedNumber); // Output: "005"

// 17. padEnd() - Pads the string from the end with a specified string
// The padEnd() method pads the end of the string to a certain length.
console.log("\npadEnd() Example:");
let word2 = "Hi";
// Pad the string to length 5 with "!"
let paddedWord = word2.padEnd(5, "!");
console.log(paddedWord); // Output: "Hi!!!"

// 18. repeat() - Repeats the string a specified number of times
// The repeat() method repeats the string and concatenates the results.
console.log("\nrepeat() Example:");
let laugh = "Ha";
// Repeat 3 times
let repeatedLaugh = laugh.repeat(3);
console.log(repeatedLaugh); // Output: "HaHaHa"
