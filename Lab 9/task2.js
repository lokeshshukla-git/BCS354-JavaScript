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