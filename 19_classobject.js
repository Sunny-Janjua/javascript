// Objects and Classes in JavaScript

// 1. Objects in JavaScript
// Objects are collections of key-value pairs. The keys are also called properties, and the values can be any type of data, including functions.

console.log("Objects Example:");

// Creating an object
let person = {
  name: "Alice",
  age: 25,
  greet: function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
};

console.log(person.name); // Output: "Alice"
console.log(person.age);  // Output: 25
person.greet();           // Output: "Hello, my name is Alice and I am 25 years old."

// Accessing object properties using dot notation
console.log(person.name);  // Output: "Alice"

// Accessing object properties using bracket notation
let propertyName = "age";
console.log(person[propertyName]); // Output: 25

// Adding new properties to an object
person.city = "New York";
console.log(person.city); // Output: "New York"

// Deleting properties from an object
delete person.city;
console.log(person.city); // Output: undefined


// 2. Classes in JavaScript
// Classes are blueprints for creating objects with shared properties and methods. Classes were introduced in ES6 (ECMAScript 2015).

console.log("\nClasses Example:");

// Defining a class
class Person {
  // Constructor method to initialize properties
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to greet
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Creating instances of the class
let person1 = new Person("John", 30);
let person2 = new Person("Jane", 28);

// Accessing properties and methods of class instances
console.log(person1.name); // Output: "John"
console.log(person2.age);  // Output: 28
person1.greet();           // Output: "Hello, my name is John and I am 30 years old."
person2.greet();           // Output: "Hello, my name is Jane and I am 28 years old."

// Inheritance in Classes
// A subclass inherits properties and methods from a parent class.

class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age); // Call the parent class's constructor
    this.jobTitle = jobTitle;
  }

  // Method specific to Employee class
  work() {
    console.log(`${this.name} is working as a ${this.jobTitle}.`);
  }
}

// Creating an instance of the Employee class
let employee1 = new Employee("Eve", 35, "Software Developer");

// Accessing properties and methods of the subclass
console.log(employee1.name);   // Output: "Eve"
console.log(employee1.jobTitle); // Output: "Software Developer"
employee1.greet();             // Output: "Hello, my name is Eve and I am 35 years old."
employee1.work();              // Output: "Eve is working as a Software Developer."

// Getters and Setters in Classes
// Getters and setters allow you to define special methods to access or modify properties.

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  // Getter for area property
  get area() {
    return Math.PI * this.radius * this.radius;
  }

  // Setter for radius property
  set radius(value) {
    if (value > 0) {
      this._radius = value;
    } else {
      console.log("Radius must be positive.");
    }
  }

  get radius() {
    return this._radius;
  }
}

let circle1 = new Circle(5);
console.log(circle1.area);  // Output: 78.53981633974483 (area of the circle)

circle1.radius = -10;  // Output: "Radius must be positive."
console.log(circle1.radius);  // Output: 5 (default radius)
