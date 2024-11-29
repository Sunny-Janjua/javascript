// Variables in JavaScript: var, let, const

// Variables in JavaScript are used to store data values. The way we declare variables 
// has evolved over time, resulting in three primary keywords: var, let, and const.

// var
// Scope: Function-scoped (available within the function it is declared).
// Hoisting: Variables declared with var are hoisted and initialized as undefined.
// Re-declaration: Allowed within the same scope.


var message = "Hello, world!";
console.log(message); // Hello, world!

function greet() {
    var name = "Sunny";
    console.log(name); // Sunny
  }
  greet();


//   3. **Re-declaration:** javascript
  var count = 1;
  var count = 2; // No error
  console.log(count); // 2

  console.log(a); // undefined (hoisted)
  var a = 5;

  for (var i = 0; i < 3; i++) {
    console.log(i)
    setTimeout(() => console.log(i), 1000);
  }
  // Output: 3, 3, 3 (due to `var` being function-scoped)
  
  
//   let
//   Scope: Block-scoped (available only within the block it is declared).
//   Hoisting: Variables declared with let are hoisted but are not initialized (Temporal Dead Zone).
//   Re-declaration: Not allowed in the same scope.


if (true) {
    let num = 10;
    console.log(num); // 10
  }


//   2. **No Re-declaration:** javascript
  let count = 5;
  let count = 10; // Error: Identifier 'count' has already been declared


//   4. **Correct Loop Scope with `let`:** javascript
  for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000);
  }
  // Output: 0, 1, 2 (each iteration has its own `i`)
  

  let name = "Sunny";
  name = "Hussnain"; // Allowed
  console.log(name); // Hussnain

  

//   const
//   Scope: Block-scoped (like let).
//   Hoisting: Variables declared with const are hoisted but not initialized.
//   Re-declaration: Not allowed.
//   Reassignment: Not allowed. const variables are immutable but not their contents if they hold an object.

const PI = 3.14;


// 2. **Objects and Arrays with `const`:** javascript
  const person = { name: "John" };
  person.name = "Doe"; // Allowed
  console.log(person.name); // Doe


//   3. **Reassignment of Arrays with `const`:** javascript
const car = { brand: "Toyota" };
car.brand = "Honda"; // Allowed
console.log(car.brand); // Honda

const arr = [1, 2, 3];
arr.push(4); // Allowed
console.log(arr); // [1, 2, 3, 4]



// ### **Key Differences:**
// | Feature          | `var`                | `let`                  | `const`                |
// |-------------------|----------------------|------------------------|------------------------|
// | **Scope**         | Function-scoped      | Block-scoped           | Block-scoped           |
// | **Hoisting**      | Yes (initialized as `undefined`) | Yes (TDZ applies) | Yes (TDZ applies) |
// | **Re-declaration**| Allowed             | Not allowed            | Not allowed            |
// | **Re-assignment** | Allowed             | Allowed                | Not allowed            |

// ---

// ### **When to Use?**
// - Use **`let`** for variables that may change during runtime.
// - Use **`const`** for constants or values that should not change.
// - Avoid using **`var`** unless maintaining old code.

// Would you like additional examples or further clarification? 😊
