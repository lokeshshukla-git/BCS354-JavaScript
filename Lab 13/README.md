# Experiment No. 13

## 1. Experiment Title
Reduce, Some, Every and Map

## 2. Aim
Use reduce, some, every and map on arrays, and keep the original array unchanged.

## 3. Software / Tools Required
- Programming language: JavaScript
- Code editor: Visual Studio Code
- Runtime: Node.js for `.js` programs
- Web browser: Microsoft Edge or Google Chrome for `.html` programs and DOM tasks

## 4. Theory
JavaScript provides several useful array methods. The "reduce()" method combines array elements into a single value. The "some()" method checks whether at least one element satisfies a condition, while "every()" checks whether all elements satisfy it. The "map()" method creates a new array by applying a function to every element of the original array.

## 5. Program / Queries / Commands

### Task 1: `task1.js`
```javascript
/*
Name: LOKESH SHUKLA
Roll No: 2510303281
Assignment No: 13
Task No: 1
*/

let prices = [120, 45, 300];

let total = prices.reduce((sum, price) => sum + price, 0);

console.log(total);
```

### Task 2: `task2.js`
```javascript
/*
Name: LOKESH SHUKLA
Roll No: 2510303281
Assignment No: 13
Task No: 2
*/

let marks = [72, 85, 30, 90];

console.log(marks.some(mark => mark < 40));

console.log(marks.every(mark => mark >= 35));
```

### Task 3: `task3.js`
```javascript
/*
Name: LOKESH SHUKLA
Roll No: 2510303281
Assignment No: 13
Task No: 3
*/

let marks = [72, 85, 64, 90];

let updatedMarks = marks.map(mark => mark + 5);

console.log(updatedMarks);
console.log(marks);
```

## 6. Input

- **Task 1:** prices = [120, 45, 300]; initial accumulator = 0.

- **Task 2:** marks = [72, 85, 30, 90]; thresholds = below 40 and at least 35.

- **Task 3:** marks = [72, 85, 64, 90]; add 5 to each value.

## 7. Output

### Task 1: Sum with reduce
```text
465
```

### Task 2: Check Conditions with some and every
```text
true
false
```

### Task 3: Transform Values with map
```text
[ 77, 90, 69, 95 ]
[ 72, 85, 64, 90 ]
```

## 8. Result
The tasks in Experiment 13 demonstrate the listed JavaScript concepts, and their text outputs are shown above.

## 9. Viva-Voce Questions
1. What does reduce return?
2. When does some return true?
3. Does map mutate the original array?
