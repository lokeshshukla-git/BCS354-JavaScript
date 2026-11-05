# Experiment No. 5

## 1. Experiment Title
Arrays, Array Methods and Nested Arrays

## 2. Aim
Create an array, read its items, use forEach and filter, and read a value from an array inside an array.

## 3. Software / Tools Required
- Programming language: JavaScript
- Code editor: Visual Studio Code
- Runtime: Node.js for `.js` programs
- Web browser: Microsoft Edge or Google Chrome for `.html` programs and DOM tasks

## 4. Theory
An array is used to store multiple values in a single variable. JavaScript provides methods such as "forEach()" to access each element and "filter()" to create a new array based on a condition. Nested arrays are arrays that contain other arrays and can be used to store data in rows and columns.

## 5. Program / Queries / Commands

### Task 1: `task1.js`
```javascript
/*
Name: LOKESH SHUKLA
Roll No: 2510303281
Assignment No: 5
Task No: 1
*/

let marks = [72, 85, 64, 90];

console.log("Number of marks:", marks.length);
console.log("First mark:", marks[0]);
```

### Task 2: `task2.js`
```javascript
/*
Name: LOKESH SHUKLA
Roll No: 2510303281
Assignment No: 5
Task No: 2
*/

let subjects = ["Maths", "Science", "English"];

subjects.forEach(function(subject) {
    console.log(subject);
});
```

### Task 3: `task3.js`
```javascript
/*
Name: LOKESH SHUKLA
Roll No: 2510303281
Assignment No: 5
Task No: 3
*/

let marks = [72, 85, 45, 90];

let passedMarks = marks.filter(function(mark) {
    return mark >= 60;
});

console.log(passedMarks);
```

### Task 4: `task4.js`
```javascript
/*
Name: LOKESH SHUKLA
Roll No: 2510303281
Assignment No: 5
Task No: 4
*/

let grid = [
    [1, 2, 3],
    [4, 5, 6]
];

console.log(grid[1][2]);
```

## 6. Input

- **Task 1:** marks = [72, 85, 64, 90].

- **Task 2:** subjects = ["Maths", "Science", "English"].

- **Task 3:** marks = [72, 85, 45, 90]; threshold = 60.

- **Task 4:** grid = [[1,2,3],[4,5,6]]; access grid[1][2].

## 7. Output

### Task 1: Array Length and First Element
```text
Number of marks: 4
First mark: 72
```

### Task 2: forEach over Subjects
```text
Maths
Science
English
```

### Task 3: Filter Passing Marks
```text
[ 72, 85, 90 ]
```

### Task 4: Nested Array Indexing
```text
6
```

## 8. Result
The tasks in Experiment 5 demonstrate the listed JavaScript concepts, and their text outputs are shown above.

## 9. Viva-Voce Questions
1. From which number do JavaScript array indexes start?
2. What does forEach do?
3. Does filter change the original array?
