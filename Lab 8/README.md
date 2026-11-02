# Experiment No. 8

## 1. Experiment Title
Inheritance, Methods and Composition

## 2. Aim
Use extends to make a child class, write a method that checks a value, and place one object inside another.

## 3. Software / Tools Required
- Programming language: JavaScript
- Code editor: Visual Studio Code
- Runtime: Node.js for `.js` programs
- Web browser: Microsoft Edge or Google Chrome for `.html` programs and DOM tasks

## 4. Theory
Inheritance allows one class to use the properties and methods of another class. JavaScript uses the "extends" keyword to create a child class from a parent class. Composition is a technique in which one object contains another object to combine their functionality.

## 5. Algorithm / Procedure

### Task 1: Inheritance with Person and Teacher
1. Define Person.greet(); extend Person with Teacher; create a teacher and print the inherited greeting.
2. Run or open the corresponding program file.
3. Observe the console or browser result.

### Task 2: Locker PIN Check
1. Store a PIN in Locker; compare supplied PIN values with it; print the Boolean results.
2. Run or open the corresponding program file.
3. Observe the console or browser result.

### Task 3: Composition with Engine and Car
1. Create Engine to store power; place an Engine inside Car; call start() and print the message.
2. Run or open the corresponding program file.
3. Observe the console or browser result.

## 6. Program / Queries / Commands

### Task 1: `task1.js`
```javascript
/*
Name: LOKESH SHUKLA
Roll No: 2510303281
Assignment No: 8
Task No: 1
*/

class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        return "Hi, I am " + this.name;
    }
}

class Teacher extends Person {
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
}

let teacher1 = new Teacher("Lokesh", "Maths");

console.log(teacher1.greet());
```

### Task 2: `task2.js`
```javascript
/*
Name: LOKESH SHUKLA
Roll No: 2510303281
Assignment No: 8
Task No: 2
*/

class Locker {
    constructor(pin) {
        this.pin = pin;
    }

    checkPin(inputPin) {
        return this.pin === inputPin;
    }
}

let locker = new Locker(1234);

console.log(locker.checkPin(1111));
console.log(locker.checkPin(1234));
```

### Task 3: `task3.js`
```javascript
/*
Name: LOKESH SHUKLA
Roll No: 2510303281
Assignment No: 8
Task No: 3
*/

class Engine {
    constructor(power) {
        this.power = power;
    }
}

class Car {
    constructor(power) {
        this.engine = new Engine(power);
    }

    start() {
        return "Car starts with " + this.engine.power + " HP";
    }
}

let car = new Car(150);

console.log(car.start());
```

## 7. Input

- **Task 1:** Teacher("Lokesh", "Maths").

- **Task 2:** Locker PIN = 1234; test values = 1111 and 1234.

- **Task 3:** Car power = 150 HP.

## 8. Output

### Task 1: Inheritance with Person and Teacher
```text
Hi, I am Lokesh
```

### Task 2: Locker PIN Check
```text
false
true
```

### Task 3: Composition with Engine and Car
```text
Car starts with 150 HP
```

## 9. Result
The tasks in Experiment 8 demonstrate the listed JavaScript concepts, and their text outputs are shown above.

## 10. Viva-Voce Questions
1. What does extends indicate?
2. What does super() call?
3. How does composition differ from inheritance?
