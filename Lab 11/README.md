# Experiment No. 11

## 1. Experiment Title
Scope and Closures

## 2. Aim
Explain block scope and global scope, and use a function that returns a function that keeps a value between calls.

## 3. Software / Tools Required
- Programming language: JavaScript
- Code editor: Visual Studio Code
- Runtime: Node.js for `.js` programs
- Web browser: Microsoft Edge or Google Chrome for `.html` programs and DOM tasks

## 4. Theory
Scope determines where a variable can be accessed in a program. Global variables can be accessed from different parts of a program, while block-scoped variables are limited to their block. A closure is created when an inner function remembers and uses variables from its outer function, even after the outer function has finished executing.

## 5. Algorithm / Procedure

### Task 1: Block Scope
1. Declare outer level; declare another level inside a block; print the inner and then outer value.
2. Run or open the corresponding program file.
3. Observe the console or browser result.

### Task 2: Closure Counter
1. Create makeCounter with count=0; return an inner function that increments and returns count; call it twice.
2. Run or open the corresponding program file.
3. Observe the console or browser result.

### Task 3: Global Variable in a Function
1. Declare school outside the function; print it from showSchool(); call the function.
2. Run or open the corresponding program file.
3. Observe the console or browser result.

## 6. Program / Queries / Commands

### Task 1: `task1.js`
```javascript
/*
Name: LOKESH SHUKLA
Roll No: 2510303281
Assignment No: 11
Task No: 1
*/

let level = "outer";

{
    let level = "inner";
    console.log(level);
}

console.log(level);
```

### Task 2: `task2.js`
```javascript
/*
Name: LOKESH SHUKLA
Roll No: 2510303281
Assignment No: 11
Task No: 2
*/

function makeCounter() {
    let count = 0;

    return function() {
        count++;
        return count;
    };
}

let counter = makeCounter();

console.log(counter());
console.log(counter());
```

### Task 3: `task3.js`
```javascript
/*
Name: LOKESH SHUKLA
Roll No: 2510303281
Assignment No: 11
Task No: 3
*/

let school = "Sample College";

function showSchool() {
    console.log("Welcome to " + school);
}

showSchool();
```

## 7. Input

- **Task 1:** Outer level = "outer"; block level = "inner".

- **Task 2:** Initial count = 0; invoke the returned function twice.

- **Task 3:** school = "Sample College".

## 8. Output

### Task 1: Block Scope
```text
inner
outer
```

### Task 2: Closure Counter
```text
1
2
```

### Task 3: Global Variable in a Function
```text
Welcome to Sample College
```

## 9. Result
The tasks in Experiment 11 demonstrate the listed JavaScript concepts, and their text outputs are shown above.

## 10. Viva-Voce Questions
1. What does block scope mean?
2. What is a closure?
3. Can a function read a variable declared in an outer scope?
