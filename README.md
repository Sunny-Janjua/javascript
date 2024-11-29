 Features
🔹 JavaScript Basics: Variables, functions, loops, and events.
🔹 DOM Manipulation: Interacting with and modifying the DOM.
🔹 Asynchronous Programming: Promises, async/await, and API calls.
🔹 Modules: Organizing code into ES6 modules.
🔹 Data Structures: Arrays, objects, maps, and sets.
🔹 Object-Oriented Programming: Classes and prototypes.
🔹 Error Handling: Try-catch, error objects, and debugging.# javascript

// 1️⃣ JavaScript Basics  
let name = "Sunny";  
const age = 25;  
console.log(`Hello, ${name}. Age: ${age}`);  

// 2️⃣ DOM Manipulation  
document.querySelector("#button").addEventListener("click", () => {  
  alert("Button clicked!");  
});  

// 3️⃣ Async/Await Example  
async function fetchData() {  
  try {  
    const response = await fetch("https://api.example.com/data");  
    const data = await response.json();  
    console.log(data);  
  } catch (error) {  
    console.error("Error fetching data:", error);  
  }  
}  
fetchData();  

// 4️⃣ OOP Example  
class Person {  
  constructor(name, age) {  
    this.name = name;  
    this.age = age;  
  }  

  greet() {  
    return `Hello, I'm ${this.name} and I'm ${this.age} years old.`;  
  }  
}  

const sunny = new Person("Sunny", 25);  
console.log(sunny.greet());  
