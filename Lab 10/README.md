# Experiment No. 10

## 1. Experiment Title
Objects and Destructuring

## 2. Aim
Create an object, read and change its properties, and take values out of an array and an object with destructuring.

## 3. Software / Tools Required
- Programming language: JavaScript
- Code editor: Visual Studio Code
- Runtime: Node.js for `.js` programs
- Web browser: Microsoft Edge or Google Chrome for `.html` programs and DOM tasks

## 4. Theory
Objects store data in the form of key-value pairs. Their properties can be accessed and modified using JavaScript. Destructuring is a feature that allows values to be extracted easily from arrays and objects and assigned to variables.

## 5. Program / Queries / Commands

### Task 1: `task1.js`
```javascript
/*
Name: LOKESH SHUKLA
Roll No: 2510303281
Assignment No: 10
Task No: 1
*/

let student = {
    name: "Lokesh",
    roll: 12,
    marks: 78
};

console.log(student.name);

student.marks = 81;

console.log(student.marks);
```

### Task 2: `task2.js`
```javascript
/*
Name: LOKESH SHUKLA
Roll No: 2510303281
Assignment No: 10
Task No: 2
*/

let subjects = ["Maths", "Science", "English"];

let [first, second] = subjects;

console.log(first);
console.log(second);
```

### Task 3: `task3.js`
```javascript
/*
Name: LOKESH SHUKLA
Roll No: 2510303281
Assignment No: 10
Task No: 3
*/

let student = {
    name: "Lokesh",
    roll: 12,
    marks: 81
};

let { name, roll } = student;

console.log(name);
console.log(roll);
```

## 6. Input

- **Task 1:** student = {name: "Lokesh", roll: 12, marks: 78}; updated marks = 81.

- **Task 2:** subjects = ["Maths", "Science", "English"].

- **Task 3:** student = {name: "Lokesh", roll: 12, marks: 81}.

## 7. Output

### Task 1: Read and Update Object Properties
```text
Lokesh
81
```

### Task 2: Array Destructuring
```text
Maths
Science
```

### Task 3: Object Destructuring
```text
Lokesh
12
```

## 8. Result
The tasks in Experiment 10 demonstrate the listed JavaScript concepts, and their text outputs are shown above.

## 9. Viva-Voce Questions
1. How are object properties accessed?
2. What is array destructuring?
3. Does destructuring remove values from the source object?
