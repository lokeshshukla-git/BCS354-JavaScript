# Experiment No. 15

## 1. Experiment Title
Promises and async/await with Local Data

## 2. Aim
Create a Promise that resolves or rejects, use async/await with try and catch, and load local data as a Promise.

## 3. Software / Tools Required
- Programming language: JavaScript
- Code editor: Visual Studio Code
- Runtime: Node.js for `.js` programs
- Web browser: Microsoft Edge or Google Chrome for `.html` programs and DOM tasks

## 4. Theory
A Promise represents the eventual success or failure of an asynchronous operation. It can be in pending, fulfilled or rejected states. The "async" and "await" keywords make asynchronous code easier to read and manage. The "try" and "catch" statements are used to handle errors during asynchronous operations.

## 5. Program / Queries / Commands

### Task 1: `task1.js`
```javascript
/*
Name: LOKESH SHUKLA
Roll No: 2510303281
Assignment No: 15
Task No: 1
*/

function checkMarks(marks) {
    return new Promise((resolve, reject) => {
        if (marks >= 0 && marks <= 100) {
            resolve(marks);
        } else {
            reject(new Error("Marks out of range"));
        }
    });
}

checkMarks(80)
    .then(result => console.log(result))
    .catch(error => console.log(error.message));
```

### Task 2: `task2.js`
```javascript
/*
Name: LOKESH SHUKLA
Roll No: 2510303281
Assignment No: 15
Task No: 2
*/

function checkMarks(marks) {
    return new Promise((resolve, reject) => {
        if (marks >= 0 && marks <= 100) {
            resolve(marks);
        } else {
            reject(new Error("Marks out of range"));
        }
    });
}

checkMarks(120)
    .then(result => console.log(result))
    .catch(error => console.log(error.message));
```

### Task 3: `task3.js`
```javascript
/*
Name: LOKESH SHUKLA
Roll No: 2510303281
Assignment No: 15
Task No: 3
*/

function checkMarks(marks) {
    return new Promise((resolve, reject) => {
        if (marks >= 0 && marks <= 100) {
            resolve(marks);
        } else {
            reject(new Error("Marks out of range"));
        }
    });
}

async function run() {
    try {
        console.log(await checkMarks(65));
        console.log(await checkMarks(-5));
    } catch (error) {
        console.log("Caught:", error.message);
    }
}

run();
```

### Task 4: `task4.js`
```javascript
/*
Name: LOKESH SHUKLA
Roll No: 2510303281
Assignment No: 15
Task No: 4
*/

function getUsers() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([
                { id: 1, name: "Asha" },
                { id: 2, name: "Rohan" },
                { id: 3, name: "Meera" }
            ]);
        }, 100);
    });
}

async function showUsers() {
    let users = await getUsers();

    users.forEach(user => {
        console.log(user.name);
    });
}

showUsers();
```

## 6. Input

- **Task 1:** marks = 80.

- **Task 2:** marks = 120.

- **Task 3:** First marks = 65; second marks = -5.

- **Task 4:** Three local user records: Asha, Rohan, and Meera; delay = 100 ms.

## 7. Output

### Task 1: Resolve a Promise
```text
80
```

### Task 2: Reject a Promise
```text
Marks out of range
```

### Task 3: Use async/await with try/catch
```text
65
Caught: Marks out of range
```

### Task 4: Load Local Users Asynchronously
```text
Asha
Rohan
Meera
```

## 8. Result
The tasks in Experiment 15 demonstrate the listed JavaScript concepts, and their text outputs are shown above.

## 9. Viva-Voce Questions
1. What are the main states of a Promise?
2. What does await do inside an async function?
3. What does catch handle?
