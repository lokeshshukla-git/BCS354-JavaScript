# Experiment No. 7

## 1. Experiment Title
Constructor Functions and Classes

## 2. Aim
Create objects with a constructor function and with an ES6 class, and add a method through the prototype.

## 3. Software / Tools Required
- Programming language: JavaScript
- Code editor: Visual Studio Code
- Runtime: Node.js for `.js` programs
- Web browser: Microsoft Edge or Google Chrome for `.html` programs and DOM tasks

## 4. Theory
Constructor functions are used to create multiple objects with similar properties. JavaScript classes provide a structured way to create objects using constructors and methods. The prototype allows methods to be shared by objects created from the same constructor function.

## 5. Program / Queries / Commands

### Task 1: `task1.js`
```javascript
/*
Name: LOKESH SHUKLA
Roll No: 2510303281
Assignment No: 7
Task No: 1
*/

function Student(name, marks) {
    this.name = name;
    this.marks = marks;
}

let student1 = new Student("LOKESH", 88);

console.log(student1.name);
console.log(student1.marks);
```

### Task 2: `task2.js`
```javascript
/*
Name: LOKESH SHUKLA
Roll No: 2510303281
Assignment No: 7
Task No: 2
*/

class Book {
    constructor(title, pages) {
        this.title = title;
        this.pages = pages;
    }

    summary() {
        return this.title + " has " + this.pages + " pages";
    }
}

let book1 = new Book("Algorithms", 320);

console.log(book1.summary());
```

### Task 3: `task3.js`
```javascript
/*
Name: LOKESH SHUKLA
Roll No: 2510303281
Assignment No: 7
Task No: 3
*/

function Student(name, marks) {
    this.name = name;
    this.marks = marks;
}

Student.prototype.result = function() {
    if (this.marks >= 40) {
        return "Pass";
    } else {
        return "Fail";
    }
};

let student1 = new Student("Lokesh", 88);

console.log(student1.result());
```

## 6. Input

- **Task 1:** Student("LOKESH", 88).

- **Task 2:** title = "Algorithms"; pages = 320.

- **Task 3:** Student("Lokesh", 88).

## 7. Output

### Task 1: Constructor Function
```text
LOKESH
88
```

### Task 2: Class and Summary Method
```text
Algorithms has 320 pages
```

### Task 3: Prototype Method
```text
Pass
```

## 8. Result
The tasks in Experiment 7 demonstrate the listed JavaScript concepts, and their text outputs are shown above.

## 9. Viva-Voce Questions
1. What does the new keyword do with a constructor function?
2. What is a class constructor used for?
3. What is a prototype in JavaScript?
