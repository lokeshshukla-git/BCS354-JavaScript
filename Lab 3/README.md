# Experiment No. 3

## 1. Experiment Title
Conditions and Loops

## 2. Aim
Choose between cases with if, else if and else, and repeat work with a for loop and a while loop.

## 3. Software / Tools Required
- Programming language: JavaScript
- Code editor: Visual Studio Code
- Runtime: Node.js for `.js` programs
- Web browser: Microsoft Edge or Google Chrome for `.html` programs and DOM tasks

## 4. Theory
Conditional statements help a program make decisions based on conditions. The "if", "else if" and "else" statements execute different blocks of code. Loops such as "for" and "while" are used to repeat a block of code until a specified condition is met.

## 5. Program / Queries / Commands

### Task 1: `task1.js`
```javascript
/*
Name: LOKESH SHUKLA
Roll No: 2510303281
Assignment No: 3
Task No: 1
*/

let marks = 72;

if (marks >= 75) {
    console.log("Grade A");
} else if (marks >= 60) {
    console.log("Grade B");
} else {
    console.log("Grade C");
}
```

### Task 2: `task2.js`
```javascript
/*
Name: LOKESH SHUKLA
Roll No: 2510303281
Assignment No: 3
Task No: 2
*/

for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

### Task 3: `task3.js`
```javascript
/*
Name: LOKESH SHUKLA
Roll No: 2510303281
Assignment No: 3
Task No: 3
*/

let total = 0;
let number = 1;

while (total <= 20) {
    total = total + number;
    number++;
}

console.log("Total:", total);
```

## 6. Input

- **Task 1:** marks = 72.

- **Task 2:** Loop range: 1 through 5.

- **Task 3:** Initial total = 0; first number = 1; continue until total > 20.

## 7. Output

### Task 1: Grade from Marks
```text
Grade B
```

### Task 2: Print Numbers with for
```text
1
2
3
4
5
```

### Task 3: Accumulate Until the Total Exceeds 20
```text
Total: 21
```

## 8. Result
The tasks in Experiment 3 demonstrate the listed JavaScript concepts, and their text outputs are shown above.

## 9. Viva-Voce Questions
1. What is the difference between if and else-if?
2. When does a for loop stop?
3. How is a while loop condition checked?
