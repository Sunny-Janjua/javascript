// Array Methods (map, filter, reduce, forEach, etc.)

// **Definition:**
// JavaScript provides several built-in methods that help manipulate arrays. These methods are useful for performing common operations like transforming, filtering, and reducing data in arrays.
// Let's explore some of the most commonly used array methods in detail.


// **1. map() Method:**
// The `map()` method creates a new array populated with the results of calling a provided function on every element in the calling array.

let numbers = [1, 2, 3, 4, 5];

// Using map to square each number
let squaredNumbers = numbers.map(num => num * num);

console.log(squaredNumbers);  // Output: [1, 4, 9, 16, 25]

// map does not modify the original array, it returns a new array.


/**
 * Syntax: 
 * array.map(function(currentValue, index, arr), thisValue)
 *
 * currentValue: The current element being processed in the array.
 * index: The index of the current element being processed.
 * arr: The array that map() was called upon.
 * thisValue: Optional. A value to use as `this` when executing the function.
 */


// **2. filter() Method:**
// The `filter()` method creates a new array with all elements that pass the test implemented by the provided function.

let numbers2 = [10, 20, 30, 40, 50];

// Using filter to keep only numbers greater than 25
let largeNumbers = numbers2.filter(num => num > 25);

console.log(largeNumbers);  // Output: [30, 40, 50]

// filter does not modify the original array, it returns a new array.


/**
 * Syntax:
 * array.filter(function(currentValue, index, arr), thisValue)
 *
 * currentValue: The current element being processed.
 * index: The index of the current element being processed.
 * arr: The array that filter() was called upon.
 * thisValue: Optional. A value to use as `this` when executing the function.
 */


// **3. reduce() Method:**
// The `reduce()` method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

let numbers3 = [1, 2, 3, 4, 5];

// Using reduce to calculate the sum of all numbers
let sum = numbers3.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum);  // Output: 15

// The second argument (0) is the initial value of the accumulator.


/**
 * Syntax:
 * array.reduce(function(accumulator, currentValue, index, arr), initialValue)
 *
 * accumulator: The accumulator accumulates the callback's return values. It's the accumulated value previously returned.
 * currentValue: The current element being processed.
 * index: The index of the current element being processed.
 * arr: The array that reduce() was called upon.
 * initialValue: An initial value to start the accumulation. If not provided, the first element of the array is used.
 */


// **4. forEach() Method:**
// The `forEach()` method executes a provided function once for each array element. Unlike `map()` and `filter()`, `forEach()` does not return a new array.

let fruits = ["apple", "banana", "cherry"];

// Using forEach to print each fruit in the array
fruits.forEach(fruit => console.log(fruit));

// Output:
// apple
// banana
// cherry

// forEach does not return anything, it simply executes the function on each element.


/**
 * Syntax:
 * array.forEach(function(currentValue, index, arr), thisValue)
 *
 * currentValue: The current element being processed.
 * index: The index of the current element being processed.
 * arr: The array that forEach() was called upon.
 * thisValue: Optional. A value to use as `this` when executing the function.
 */


// **5. some() Method:**
// The `some()` method checks if at least one element in the array satisfies the condition in the provided function. It returns true if the condition is met, otherwise false.

let numbers4 = [1, 2, 3, 4, 5];

// Using some to check if there's any number greater than 4
let hasLargeNumbers = numbers4.some(num => num > 4);

console.log(hasLargeNumbers);  // Output: true


/**
 * Syntax:
 * array.some(function(currentValue, index, arr), thisValue)
 *
 * currentValue: The current element being processed.
 * index: The index of the current element being processed.
 * arr: The array that some() was called upon.
 * thisValue: Optional. A value to use as `this` when executing the function.
 */


// **6. every() Method:**
// The `every()` method checks if all elements in the array satisfy the condition in the provided function. It returns true if all elements pass the test, otherwise false.

let numbers5 = [10, 20, 30, 40];

// Using every to check if all numbers are greater than 5
let allLargeNumbers = numbers5.every(num => num > 5);

console.log(allLargeNumbers);  // Output: true


/**
 * Syntax:
 * array.every(function(currentValue, index, arr), thisValue)
 *
 * currentValue: The current element being processed.
 * index: The index of the current element being processed.
 * arr: The array that every() was called upon.
 * thisValue: Optional. A value to use as `this` when executing the function.
 */


// **7. find() Method:**
// The `find()` method returns the value of the first element in the array that satisfies the provided testing function.

let numbers6 = [5, 10, 15, 20];

// Using find to get the first number greater than 12
let foundNumber = numbers6.find(num => num > 12);

console.log(foundNumber);  // Output: 15

// find returns only the first element that satisfies the condition.


/**
 * Syntax:
 * array.find(function(currentValue, index, arr), thisValue)
 *
 * currentValue: The current element being processed.
 * index: The index of the current element being processed.
 * arr: The array that find() was called upon.
 * thisValue: Optional. A value to use as `this` when executing the function.
 */


// **8. sort() Method:**
// The `sort()` method sorts the elements of an array in place. By default, the elements are sorted as strings.

let numbers7 = [40, 10, 100, 25];

// Using sort to sort numbers in ascending order
numbers7.sort((a, b) => a - b);

console.log(numbers7);  // Output: [10, 25, 40, 100]


/**
 * Syntax:
 * array.sort(compareFunction)
 *
 * compareFunction: A function that defines the sort order.
 * The function takes two arguments and should return a value that indicates whether one element is greater than, equal to, or less than the other.
 */


// **9. flat() Method:**
// The `flat()` method flattens an array of arrays into a single array.

let nestedArray = [1, [2, 3], [4, 5], 6];

// Using flat to flatten the nested array
let flatArray = nestedArray.flat();

console.log(flatArray);  // Output: [1, 2, 3, 4, 5, 6]


/**
 * Syntax:
 * array.flat(depth)
 *
 * depth: The number of levels of nesting to flatten. The default is 1.
 */


// **10. join() Method:**
// The `join()` method joins all elements of an array into a single string, separated by a specified separator.

let colors = ["red", "green", "blue"];

// Using join to join array elements into a string
let colorString = colors.join(", ");

console.log(colorString);  // Output: red, green, blue


// --------------------------------------------------------------------------------------


let numbers = [1, 2, 3, 4, 5];
let squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers);  // Output: [1, 4, 9, 16, 25]


let fruits = ["apple", "banana", "cherry"];
let uppercasedFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(uppercasedFruits);  // Output: ["APPLE", "BANANA", "CHERRY"]


let numbers2 = [10, 20, 30, 40, 50];
let incrementedNumbers = numbers2.map(num => num + 5);
console.log(incrementedNumbers);  // Output: [15, 25, 35, 45, 55]


let celsius = [0, 10, 20, 30, 40];
let fahrenheit = celsius.map(temp => temp * 9/5 + 32);
console.log(fahrenheit);  // Output: [32, 50, 68, 86, 104]



let numbers = [5, 10, 15, 20, 25];
let filteredNumbers = numbers.filter(num => num > 10);
console.log(filteredNumbers);  // Output: [15, 20, 25]


let numbers2 = [1, 2, 3, 4, 5, 6];
let oddNumbers = numbers2.filter(num => num % 2 !== 0);
console.log(oddNumbers);  // Output: [1, 3, 5]


let words = ["apple", "banana", "kiwi", "cherry", "orange"];
let longWords = words.filter(word => word.length > 5);
console.log(longWords);  // Output: ["banana", "cherry", "orange"]


let students = [
    { name: "John", score: 85 },
    { name: "Jane", score: 45 },
    { name: "Bob", score: 65 },
    { name: "Alice", score: 40 }
];
let passedStudents = students.filter(student => student.score >= 50);
console.log(passedStudents);  
// Output: [{ name: "John", score: 85 }, { name: "Bob", score: 65 }]


let users = [
    { name: "Alice", active: true },
    { name: "Bob", active: false },
    { name: "Charlie", active: true }
];
let activeUsers = users.filter(user => user.active);
console.log(activeUsers);  // Output: [{ name: "Alice", active: true }, { name: "Charlie", active: true }]


let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);  // Output: 15


let numbers2 = [1, 2, 3, 4];
let product = numbers2.reduce((acc, num) => acc * num, 1);
console.log(product);  // Output: 24


let numbers3 = [10, 20, 5, 50, 30];
let maxNumber = numbers3.reduce((acc, num) => (num > acc ? num : acc), numbers3[0]);
console.log(maxNumber);  // Output: 50


let fruits = ["apple", "banana", "apple", "orange", "banana", "banana"];
let fruitCount = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {});
console.log(fruitCount);  
// Output: { apple: 2, banana: 3, orange: 1 }



let numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => console.log(num));
// Output:
// 1
// 2
// 3
// 4
// 5


let fruits = ["apple", "banana", "cherry"];
fruits.forEach((fruit, index) => console.log(`${index}: ${fruit}`));
// Output:
// 0: apple
// 1: banana
// 2: cherry


let words = ["hello", "world", "javascript"];
words.forEach((word, index, arr) => arr[index] = word.toUpperCase());
console.log(words);  // Output: ["HELLO", "WORLD", "JAVASCRIPT"]


let users = [
    { name: "John", age: 25 },
    { name: "Jane", age: 30 },
    { name: "Doe", age: 35 }
];
users.forEach(user => console.log(`${user.name} is ${user.age} years old`));
// Output:
// John is 25 years old
// Jane is 30 years old
// Doe is 35 years old



// Array Methods Demonstration in JavaScript

// 1. map() - Creates a new array by applying a function to each element
// The map() method transforms each element of an array and returns a new array.
console.log("map() Example:");
let numbers = [1, 2, 3, 4, 5];
// Square each number
let squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers);  // Output: [1, 4, 9, 16, 25]

// 2. filter() - Creates a new array with all elements that pass a test
// The filter() method filters elements based on a condition, returning an array with only the elements that meet the condition.
console.log("\nfilter() Example:");
let numbers2 = [5, 10, 15, 20, 25];
// Filter numbers greater than 10
let filteredNumbers = numbers2.filter(num => num > 10);
console.log(filteredNumbers);  // Output: [15, 20, 25]

// 3. reduce() - Applies a function to each element to reduce the array to a single value
// The reduce() method reduces the array to a single value, such as summing all the elements.
console.log("\nreduce() Example:");
let numbers3 = [1, 2, 3, 4, 5];
// Sum all numbers
let sum = numbers3.reduce((acc, num) => acc + num, 0);
console.log(sum);  // Output: 15

// 4. forEach() - Executes a function once for each array element
// The forEach() method allows you to execute a provided function for each element of an array. It's often used for side effects.
console.log("\nforEach() Example:");
let fruits = ["apple", "banana", "cherry"];
// Log each fruit
fruits.forEach(fruit => console.log(fruit));
// Output:
// apple
// banana
// cherry

// 5. some() - Tests whether at least one element in the array passes the provided function
// The some() method checks if at least one element satisfies the condition. It returns true if any element passes the test.
console.log("\nsome() Example:");
let numbers4 = [5, 10, 15, 20];
// Check if any number is greater than 10
let hasLargeNumbers = numbers4.some(num => num > 10);
console.log(hasLargeNumbers);  // Output: true

// 6. find() - Returns the first element in the array that satisfies the provided testing function
// The find() method searches the array for the first element that meets the condition and returns it.
console.log("\nfind() Example:");
let users = [
    { name: "John", age: 25 },
    { name: "Jane", age: 35 },
    { name: "Doe", age: 45 }
];
// Find the first user whose age is greater than 30
let userOver30 = users.find(user => user.age > 30);
console.log(userOver30);  // Output: { name: "Jane", age: 35 }

// 7. every() - Tests whether all elements in the array pass the provided function
// The every() method checks if all elements satisfy the given condition. It returns true if all elements meet the condition.
console.log("\nevery() Example:");
let numbers5 = [10, 20, 30, 40, 50];
// Check if all numbers are greater than 5
let areAllNumbersGreaterThan5 = numbers5.every(num => num > 5);
console.log(areAllNumbersGreaterThan5);  // Output: true

// 8. concat() - Combines two or more arrays into a new array
// The concat() method combines two or more arrays into a single array and returns the result.
console.log("\nconcat() Example:");
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
// Concatenate both arrays
let combinedArray = array1.concat(array2);
console.log(combinedArray);  // Output: [1, 2, 3, 4, 5, 6]

// 9. slice() - Returns a shallow copy of a portion of an array into a new array
// The slice() method extracts a section of the array and returns it as a new array without modifying the original array.
console.log("\nslice() Example:");
let numbers6 = [1, 2, 3, 4, 5, 6];
// Slice elements from index 2 to index 4 (not including index 4)
let slicedArray = numbers6.slice(2, 4);
console.log(slicedArray);  // Output: [3, 4]

// 10. sort() - Sorts the elements of an array in place
// The sort() method sorts the elements of an array and modifies the original array.
console.log("\nsort() Example:");
let numbers7 = [40, 10, 100, 25, 5];
// Sort the numbers in ascending order
let sortedNumbers = numbers7.sort((a, b) => a - b);
console.log(sortedNumbers);  // Output: [5, 10, 25, 40, 100]

// 11. indexOf() - Returns the first index of the element that matches the provided value
// The indexOf() method returns the index of the first occurrence of a given element in the array.
console.log("\nindexOf() Example:");
let fruits2 = ["apple", "banana", "cherry"];
// Get the index of "banana"
let index = fruits2.indexOf("banana");
console.log(index);  // Output: 1

// 12. join() - Joins all elements of the array into a string
// The join() method joins all the elements of an array into a single string, separated by a specified separator.
console.log("\njoin() Example:");
let fruits3 = ["apple", "banana", "cherry"];
// Join all fruits into a single string with comma separation
let joinedFruits = fruits3.join(", ");
console.log(joinedFruits);  // Output: "apple, banana, cherry"

// 13. reverse() - Reverses the elements of an array in place
// The reverse() method reverses the order of elements in an array and modifies the original array.
console.log("\nreverse() Example:");
let numbers8 = [1, 2, 3, 4, 5];
// Reverse the order of the numbers
let reversedNumbers = numbers8.reverse();
console.log(reversedNumbers);  // Output: [5, 4, 3, 2, 1]

// 14. findIndex() - Returns the index of the first element that matches the provided condition
// The findIndex() method searches for the first element that satisfies the condition and returns its index.
console.log("\nfindIndex() Example:");
let students = [
    { name: "John", grade: "B" },
    { name: "Jane", grade: "A" },
    { name: "Alice", grade: "C" }
];
// Find the index of the student with grade "A"
let indexOfStudent = students.findIndex(student => student.grade === "A");
console.log(indexOfStudent);  // Output: 1
