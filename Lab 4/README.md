# Experiment No. 4

## 1. Experiment Title
Writing Functions

## 2. Aim
Write a function with a return value, an arrow function, and a default parameter.

## 3. Software / Tools Required
- Programming language: JavaScript
- Code editor: Visual Studio Code
- Runtime: Node.js for `.js` programs
- Web browser: Microsoft Edge or Google Chrome for `.html` programs and DOM tasks

## 4. Theory
Functions are reusable blocks of code that perform specific tasks. They can accept parameters and return values. JavaScript also supports arrow functions, which provide a shorter way to write functions. Default parameters allow a function to use predefined values when an argument is not provided.

## 5. Program / Queries / Commands

### Task 1: `task1.js`
```javascript
/*
Name: LOKESH SHUKLA
Roll No: 2510303281
Assignment No: 4
Task No: 1
*/

function greet(name) {
    return "Hello, " + name;
}

console.log(greet("Lokesh"));
```

### Task 2: `task2.js`
```javascript
/*
Name: LOKESH SHUKLA
Roll No: 2510303281
Assignment No: 4
Task No: 2
*/

const square = (number) => {
    return number * number;
};

console.log(square(6));
```

### Task 3: `task3.js`
```javascript
/*
Name: LOKESH SHUKLA
Roll No: 2510303281
Assignment No: 4
Task No: 3
*/

function billWithTax(amount, taxRate = 0.18) {
    return amount + (amount * taxRate);
}

console.log(billWithTax(100));
```

## 6. Input

- **Task 1:** name = "Lokesh" (value used in the task file).

- **Task 2:** square(6).

- **Task 3:** amount = 100; taxRate omitted, so the default 0.18 is used.

## 7. Output

### Task 1: Function with a Return Value
```text
Hello, Lokesh
```

### Task 2: Arrow Function
```text
36
```

### Task 3: Default Parameter
```text
118
```

## 8. Result
The tasks in Experiment 4 demonstrate the listed JavaScript concepts, and their text outputs are shown above.

## 9. Viva-Voce Questions
1. What does return do in a function?
2. How is an arrow function written?
3. When is a default parameter value used?
