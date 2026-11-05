# Experiment No. 14

## 1. Experiment Title
Timers and Intervals

## 2. Aim
Run code after a delay with setTimeout, cancel a timer, and repeat code with setInterval.

## 3. Software / Tools Required
- Programming language: JavaScript
- Code editor: Visual Studio Code
- Runtime: Node.js for `.js` programs
- Web browser: Microsoft Edge or Google Chrome for `.html` programs and DOM tasks

## 4. Theory
JavaScript provides timer functions to control when code executes. The "setTimeout()" method executes code after a specified delay, while "clearTimeout()" cancels a scheduled timer. The "setInterval()" method repeatedly executes code after a fixed time interval, and "clearInterval()" stops it.

## 5. Program / Queries / Commands

### Task 1: `task1.js`
```javascript
/*
Name: LOKESH SHUKLA
Roll No: 2510303281
Assignment No: 14
Task No: 1
*/

console.log("Start");

setTimeout(() => {
    console.log("Timer done");
}, 0);

console.log("End");
```

### Task 2: `task2.js`
```javascript
/*
Name: LOKESH SHUKLA
Roll No: 2510303281
Assignment No: 14
Task No: 2
*/

let timer = setTimeout(() => {
    console.log("Not shown");
}, 1000);

clearTimeout(timer);

console.log("Cancelled");
```

### Task 3: `task3.js`
```javascript
/*
Name: LOKESH SHUKLA
Roll No: 2510303281
Assignment No: 14
Task No: 3
*/

let count = 0;

let timer = setInterval(() => {
    count++;

    console.log("Tick " + count);

    if (count === 3) {
        clearInterval(timer);
    }
}, 200);
```

## 6. Input

- **Task 1:** Delay = 0 ms.

- **Task 2:** Delay = 1000 ms; timeout is cancelled before it fires.

- **Task 3:** Interval = 200 ms; stop count = 3.

## 7. Output

### Task 1: Zero-Delay setTimeout
```text
Start
End
Timer done
```

### Task 2: Cancel a Timeout
```text
Cancelled
```

### Task 3: Stop an Interval after Three Ticks
```text
Tick 1
Tick 2
Tick 3
```

## 8. Result
The tasks in Experiment 14 demonstrate the listed JavaScript concepts, and their text outputs are shown above.

## 9. Viva-Voce Questions
1. Does a zero-delay timeout run immediately?
2. What does clearTimeout need?
3. How does clearInterval stop repeating work?
