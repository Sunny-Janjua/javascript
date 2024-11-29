// Inheritance in JavaScript
// Inheritance allows one class to acquire the properties and methods of another class.
// It is a fundamental concept in object-oriented programming (OOP) that allows code reuse, 
// making it easier to maintain and extend functionality.

// 1. Basic Class-based Inheritance (ES6 Classes)
class Animal {
    constructor(name) {
      this.name = name;  // Define property 'name'
    }
  
    greet() {
      console.log(`Hello, I am a ${this.name}`);
    }
  }
  
  class Dog extends Animal {  // Dog class inherits from Animal
    constructor(name, breed) {
      super(name);  // Call the parent class constructor to initialize 'name'
      this.breed = breed;  // Define additional property 'breed'
    }
  
    introduce() {
      console.log(`I am a ${this.breed} breed.`);
    }
  }
  
  const dog = new Dog("Buddy", "Golden Retriever");
  dog.greet();       // Output: Hello, I am a Buddy (Inherited from Animal)
  dog.introduce();   // Output: I am a Golden Retriever breed. (Defined in Dog)
  
  // 2. Prototypal Inheritance (Pre-ES6)
  function Animal(name) {
    this.name = name;
  }
  
  Animal.prototype.greet = function() {
    console.log(`Hello, I am a ${this.name}`);
  };
  
  function Dog(name, breed) {
    Animal.call(this, name);  // Inherit properties from Animal
    this.breed = breed;
  }
  
  // Set up inheritance
  Dog.prototype = Object.create(Animal.prototype);  // Link Dog's prototype to Animal's prototype
  Dog.prototype.constructor = Dog;  // Ensure the constructor is Dog, not Animal
  
  const dog2 = new Dog("Max", "Bulldog");
  dog2.greet();  // Output: Hello, I am a Max (Inherited from Animal)
  console.log(dog2.breed);  // Output: Bulldog (Defined in Dog)
  
  // 3. Types of Inheritance in JavaScript
  
  // 3.1. Single Inheritance
  // This is when a class inherits from one parent class.
  // Example above (Dog inherits from Animal)
  
  // 3.2. Multilevel Inheritance
  // A class can inherit from another class, which itself inherits from a parent class.
  
  class LivingBeing {
    constructor(livingStatus) {
      this.livingStatus = livingStatus;
    }
  
    isAlive() {
      console.log(`This being is ${this.livingStatus}`);
    }
  }
  
  class Animal2 extends LivingBeing {
    constructor(livingStatus, species) {
      super(livingStatus);  // Call constructor of LivingBeing
      this.species = species;
    }
  
    describe() {
      console.log(`This is a ${this.species}`);
    }
  }
  
  class Dog3 extends Animal2 {
    constructor(livingStatus, species, breed) {
      super(livingStatus, species);  // Call constructor of Animal2
      this.breed = breed;
    }
  
    speak() {
      console.log(`Woof! I am a ${this.breed} ${this.species}`);
    }
  }
  
  const myDog = new Dog3("alive", "Canine", "Labrador");
  myDog.isAlive();    // Output: This being is alive (Inherited from LivingBeing)
  myDog.describe();   // Output: This is a Canine (Inherited from Animal2)
  myDog.speak();      // Output: Woof! I am a Labrador Canine (Defined in Dog3)
  
  // 3.3. Hierarchical Inheritance
  // Multiple classes can inherit from the same parent class.
  
  class Vehicle {
    constructor(type) {
      this.type = type;
    }
  
    move() {
      console.log(`${this.type} is moving`);
    }
  }
  
  class Car extends Vehicle {
    constructor(type, brand) {
      super(type);
      this.brand = brand;
    }
  
    honk() {
      console.log(`${this.brand} car honks!`);
    }
  }
  
  class Bike extends Vehicle {
    constructor(type, model) {
      super(type);
      this.model = model;
    }
  
    ringBell() {
      console.log(`${this.model} bike rings bell!`);
    }
  }
  
  const car = new Car("Car", "Toyota");
  car.move();    // Output: Car is moving (Inherited from Vehicle)
  car.honk();    // Output: Toyota car honks! (Defined in Car)
  
  const bike = new Bike("Bike", "Mountain");
  bike.move();   // Output: Bike is moving (Inherited from Vehicle)
  bike.ringBell(); // Output: Mountain bike rings bell! (Defined in Bike)
  
  // 3.4. Multiple Inheritance (Simulated via Mixins)
  JavaScript does not directly support multiple inheritance (a class inheriting from multiple classes). However, we can simulate multiple inheritance using **mixins**. A mixin is an object that contains methods that can be added to other classes.
  
  const Flyable = {
    fly() {
      console.log(`${this.name} is flying`);
    }
  };
  
  const Swimmable = {
    swim() {
      console.log(`${this.name} is swimming`);
    }
  };
  
  class Duck {
    constructor(name) {
      this.name = name;
    }
  }
  
  // Apply mixins (methods from Flyable and Swimmable)
  Object.assign(Duck.prototype, Flyable, Swimmable);
  
  const duck = new Duck("Donald");
  duck.fly();    // Output: Donald is flying
  duck.swim();   // Output: Donald is swimming
  
  // 4. Inheritance Summary
  
  // - **Single Inheritance**: A class inherits from only one parent class (e.g., Dog inherits from Animal).
  // - **Multilevel Inheritance**: A class inherits from another class, which itself inherits from another class (e.g., Dog inherits from Animal, and Animal inherits from LivingBeing).
  // - **Hierarchical Inheritance**: Multiple classes inherit from the same parent class (e.g., Car and Bike both inherit from Vehicle).
  // - **Multiple Inheritance**: JavaScript does not support multiple inheritance natively, but you can use mixins to achieve this behavior.
  
  
  // 5. Advantages of Inheritance
  
  // - Code Reusability: Inheritance allows us to reuse code from parent classes, reducing redundancy.
  // - Method Overriding: Subclasses can override methods of the parent class to provide specific implementations.
  // - Extendability: Inheritance makes it easier to extend and modify functionality as you can create subclasses with different behaviors.
  

  
  // Inheritance in JavaScript with 5 Examples for Each Type

// 1. **Single Inheritance** (One class inherits from another)

class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} makes a sound.`);
    }
  }
  
  class Dog extends Animal {
    constructor(name, breed) {
      super(name);  // Inherit 'name' from Animal class
      this.breed = breed;
    }
  
    speak() {
      console.log(`${this.name} barks!`);
    }
  }
  
  const dog1 = new Dog("Buddy", "Labrador");
  dog1.speak();  // Output: Buddy barks!
  
  const dog2 = new Dog("Max", "Bulldog");
  dog2.speak();  // Output: Max barks!
  
  // 2. **Multilevel Inheritance** (A class inherits from another class, which itself inherits from a parent class)
  
  class LivingBeing {
    constructor(status) {
      this.status = status;
    }
  
    aliveStatus() {
      console.log(`This living being is ${this.status}`);
    }
  }
  
  class Animal2 extends LivingBeing {
    constructor(status, species) {
      super(status);  // Inherit status from LivingBeing
      this.species = species;
    }
  
    speciesInfo() {
      console.log(`This is a ${this.species}.`);
    }
  }
  
  class Dog2 extends Animal2 {
    constructor(status, species, breed) {
      super(status, species);  // Inherit status and species from Animal2
      this.breed = breed;
    }
  
    breedInfo() {
      console.log(`This is a ${this.breed} breed.`);
    }
  }
  
  const dog3 = new Dog2("alive", "Canine", "Golden Retriever");
  dog3.aliveStatus();  // Output: This living being is alive
  dog3.speciesInfo();  // Output: This is a Canine.
  dog3.breedInfo();    // Output: This is a Golden Retriever breed.
  
  // 3. **Hierarchical Inheritance** (Multiple classes inherit from the same parent class)
  
  class Vehicle {
    constructor(type) {
      this.type = type;
    }
  
    move() {
      console.log(`${this.type} is moving.`);
    }
  }
  
  class Car extends Vehicle {
    constructor(type, brand) {
      super(type);
      this.brand = brand;
    }
  
    honk() {
      console.log(`${this.brand} car honks!`);
    }
  }
  
  class Bike extends Vehicle {
    constructor(type, model) {
      super(type);
      this.model = model;
    }
  
    ringBell() {
      console.log(`${this.model} bike rings bell!`);
    }
  }
  
  const car1 = new Car("Car", "Toyota");
  car1.move();  // Output: Car is moving.
  car1.honk();  // Output: Toyota car honks!
  
  const bike1 = new Bike("Bike", "Mountain");
  bike1.move();  // Output: Bike is moving.
  bike1.ringBell();  // Output: Mountain bike rings bell!
  
  // 4. **Multiple Inheritance (Simulated through Mixins)**
  
  const Flyable = {
    fly() {
      console.log(`${this.name} is flying.`);
    }
  };
  
  const Swimmable = {
    swim() {
      console.log(`${this.name} is swimming.`);
    }
  };
  
  class Duck {
    constructor(name) {
      this.name = name;
    }
  }
  
  // Apply mixins to Duck class
  Object.assign(Duck.prototype, Flyable, Swimmable);
  
  const duck1 = new Duck("Donald");
  duck1.fly();   // Output: Donald is flying.
  duck1.swim();  // Output: Donald is swimming.
  
  // 5. **Abstract Inheritance** (Simulating an abstract class with methods that should be implemented in subclasses)
  
  class AnimalAbstract {
    constructor(name) {
      if (new.target === AnimalAbstract) {
        throw new Error("Cannot instantiate an abstract class.");
      }
      this.name = name;
    }
  
    // Abstract method
    sound() {
      throw new Error("Method 'sound()' must be implemented.");
    }
  }
  
  class Dog3 extends AnimalAbstract {
    constructor(name) {
      super(name);
    }
  
    sound() {
      console.log(`${this.name} barks.`);
    }
  }
  
  class Cat extends AnimalAbstract {
    constructor(name) {
      super(name);
    }
  
    sound() {
      console.log(`${this.name} meows.`);
    }
  }
  
  const dog4 = new Dog3("Rex");
  dog4.sound();  // Output: Rex barks.
  
  const cat1 = new Cat("Whiskers");
  cat1.sound();  // Output: Whiskers meows.
  
  try {
    const animal1 = new AnimalAbstract("Generic");
  } catch (e) {
    console.log(e.message);  // Output: Cannot instantiate an abstract class.
  }
  