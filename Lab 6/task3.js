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