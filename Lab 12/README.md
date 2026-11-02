# Experiment No. 12

## 1. Experiment Title
Callbacks and Higher-Order Functions

## 2. Aim
Pass a function as an argument to another function and call it.

## 3. Software / Tools Required
- Programming language: JavaScript
- Code editor: Visual Studio Code
- Runtime: Node.js for `.js` programs
- Web browser: Microsoft Edge or Google Chrome for `.html` programs and DOM tasks

## 4. Theory
A callback is a function passed as an argument to another function and executed when required. A higher-order function is a function that accepts another function as an argument or returns a function. These concepts help make JavaScript programs reusable and flexible.

## 5. Algorithm / Procedure

### Task 1: Apply a Function Twice
1. Define applyTwice to call the passed function two times; pass addTen and value 5; print the final result.
2. Run or open the corresponding program file.
3. Observe the console or browser result.

### Task 2: Format Marks with a Callback
1. Define formatMarks to call a callback; pass 76 and a formatting arrow function; print the returned text.
2. Run or open the corresponding program file.
3. Observe the console or browser result.

### Task 3: Repeat an Action
1. Define repeatAction to loop from 1 through times and call action with each round; invoke it for three rounds.
2. Run or open the corresponding program file.
3. Observe the console or browser result.

## 6. Program / Queries / Commands

### Task 1: `task1.js`
```javascript
/*
Name: LOKESH SHUKLA
Roll No: 2510303281
Assignment No: 12
Task No: 1
*/

function applyTwice(func, value) {
    return func(func(value));
}

function addTen(number) {
    return number + 10;
}

console.log(applyTwice(addTen, 5));
```

### Task 2: `task2.js`
```javascript
/*
Name: LOKESH SHUKLA
Roll No: 2510303281
Assignment No: 12
Task No: 2
*/

function formatMarks(marks, callback) {
    return callback(marks);
}

console.log(
    formatMarks(76, marks => "Marks: " + marks + "/100")
);
```

### Task 3: `task3.js`
```javascript
/*
Name: LOKESH SHUKLA
Roll No: 2510303281
Assignment No: 12
Task No: 3
*/

function repeatAction(times, action) {
    for (let i = 1; i <= times; i++) {
        action(i);
    }
}

repeatAction(3, round => {
    console.log("Round " + round);
});
```

## 7. Input

- **Task 1:** addTen adds 10; initial value = 5.

- **Task 2:** marks = 76.

- **Task 3:** times = 3; action prints the round number.

## 8. Output

### Task 1: Apply a Function Twice
```text
25
```

### Task 2: Format Marks with a Callback
```text
Marks: 76/100
```

### Task 3: Repeat an Action
```text
Round 1
Round 2
Round 3
```

## 9. Result
The tasks in Experiment 12 demonstrate the listed JavaScript concepts, and their text outputs are shown above.

## 10. Viva-Voce Questions
1. What is a callback function?
2. What makes a function higher-order?
3. What value does applyTwice produce here?
