# Experiment No. 6

## 1. Experiment Title
JSON Text

## 2. Aim
Convert an object to JSON text, convert JSON text back to an object, and catch invalid JSON.

## 3. Software / Tools Required
- Programming language: JavaScript
- Code editor: Visual Studio Code
- Runtime: Node.js for `.js` programs
- Web browser: Microsoft Edge or Google Chrome for `.html` programs and DOM tasks

## 4. Theory
JSON stands for JavaScript Object Notation. It is a lightweight format used to store and exchange data. JavaScript provides "JSON.stringify()" to convert an object into JSON text and "JSON.parse()" to convert JSON text back into an object. The "try" and "catch" statements help handle invalid JSON data.

## 5. Program / Queries / Commands

### Task 1: `task1.js`
```javascript
/*
Name: LOKESH SHUKLA
Roll No: 2510303281
Assignment No: 6
Task No: 1
*/

let student = {
    name: "Rohan",
    marks: [70, 80]
};

let jsonText = JSON.stringify(student);

console.log(jsonText);
```

### Task 2: `task2.js`
```javascript
/*
Name: LOKESH SHUKLA
Roll No: 2510303281
Assignment No: 6
Task No: 2
*/

let jsonText = '{"city":"Pune","pin":411001}';

let data = JSON.parse(jsonText);

console.log(data.city);
```

### Task 3: `task3.js`
```javascript
/*
Name: LOKESH SHUKLA
Roll No: 2510303281
Assignment No: 6
Task No: 3
*/

let jsonText = '{name: Rohan}';

try {
    let data = JSON.parse(jsonText);
    console.log(data);
} catch (error) {
    console.log("Invalid JSON");
}
```

## 6. Input

- **Task 1:** name = "Rohan"; marks = [70, 80].

- **Task 2:** JSON text: {"city":"Pune","pin":411001}.

- **Task 3:** Invalid JSON text: {name: Rohan}.

## 7. Output

### Task 1: Object to JSON Text
```text
{"name":"Rohan","marks":[70,80]}
```

### Task 2: JSON Text to Object
```text
Pune
```

### Task 3: Handle Invalid JSON
```text
Invalid JSON
```

## 8. Result
The tasks in Experiment 6 demonstrate the listed JavaScript concepts, and their text outputs are shown above.

## 9. Viva-Voce Questions
1. What does JSON.stringify return?
2. Why must JSON property names be quoted?
3. What is the purpose of try/catch?
