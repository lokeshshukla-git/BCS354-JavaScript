# Experiment No. 9

## 1. Experiment Title
DOM, Validation, Storage and Quiz

## 2. Aim
Change a page with a click, check form values in code, save text in local storage, and build a small quiz.

## 3. Software / Tools Required
- Programming language: JavaScript
- Code editor: Visual Studio Code
- Runtime: Node.js for `.js` programs
- Web browser: Microsoft Edge or Google Chrome for `.html` programs and DOM tasks

## 4. Theory
The Document Object Model (DOM) allows JavaScript to access and modify HTML elements. Events such as button clicks can be used to change page content. Form validation checks user input, while "localStorage" stores data in the browser. JavaScript can also be used to create interactive quizzes.

## 5. Program / Queries / Commands

### Task 1: `task1.html`
```html
<!--
Name: LOKESH SHUKLA
Roll No: 2510303281
Assignment No: 9
Task No: 1
-->

<!DOCTYPE html>
<html>
<head>
    <title>DOM Example</title>
</head>
<body>

    <h1 id="heading">Welcome</h1>

    <button onclick="changeText()">Change text</button>

    <script>
        function changeText() {
            document.getElementById("heading").innerText = "Button clicked";
        }
    </script>

</body>
</html>
```

### Task 2: `task2.js`
```javascript
/*
Name: LOKESH SHUKLA
Roll No: 2510303281
Assignment No: 9
Task No: 2
*/

function validateForm(name) {
    let errors = [];

    if (name === "") {
        errors.push("Name is required");
    }

    return errors;
}

console.log(validateForm("Lokesh"));
console.log(validateForm(""));
```

### Task 3: `task3.html`
```html
<!--
Name: LOKESH SHUKLA
Roll No: 2510303281
Assignment No: 9
Task No: 3
-->

<!DOCTYPE html>
<html>
<head>
    <title>Local Storage Example</title>
</head>
<body>

    <h2>Save Your Note</h2>

    <input type="text" id="note" placeholder="Enter your note">

    <button onclick="saveNote()">Save</button>

    <script>
        let noteBox = document.getElementById("note");

        window.onload = function() {
            noteBox.value = localStorage.getItem("note") || "";
        };

        function saveNote() {
            localStorage.setItem("note", noteBox.value);
            alert("Note saved!");
        }
    </script>

</body>
</html>
```

### Task 4: `task4.html`
```html
<!--
Name: LOKESH SHUKLA
Roll No: 2510303281
Assignment No: 9
Task No: 4
-->

<!DOCTYPE html>
<html>
<head>
    <title>Simple Quiz</title>
</head>
<body>

    <h2>What is 2 + 3?</h2>

    <input type="radio" name="answer" value="4"> 4
    <br>

    <input type="radio" name="answer" value="5"> 5
    <br>

    <input type="radio" name="answer" value="6"> 6
    <br><br>

    <button onclick="checkAnswer()">Check answer</button>

    <p id="result"></p>

    <script>
        function checkAnswer() {
            let answer = document.querySelector(
                'input[name="answer"]:checked'
            );

            if (answer && answer.value === "5") {
                document.getElementById("result").innerText = "Correct";
            } else {
                document.getElementById("result").innerText = "Try again";
            }
        }
    </script>

</body>
</html>
```

## 6. Input

- **Task 1:** Browser action: click “Change text”.

- **Task 2:** Names tested: "Lokesh" and an empty string.

- **Task 3:** Browser input: type a note in the text box and click Save.

- **Task 4:** Browser input: select one radio option (4, 5, or 6) and click Check answer; the possible states are listed below.

## 7. Output

### Task 1: Change Heading on Button Click
```text
Before click: Welcome
After click: Button clicked
```

### Task 2: Validate a Name
```text
[]
[ 'Name is required' ]
```

### Task 3: Save a Note in localStorage
```text
Text shown: [entered note]
After Save: Note saved!
After reopening: [saved note]
```

### Task 4: Interactive Addition Quiz
```text
Selected 5: Correct
Selected 4 or 6: Try again
```

## 8. Result
The tasks in Experiment 9 demonstrate the listed JavaScript concepts, and their text outputs are shown above.

## 9. Viva-Voce Questions
1. What does the DOM represent?
2. What does localStorage store?
3. How can JavaScript read a selected radio button?
