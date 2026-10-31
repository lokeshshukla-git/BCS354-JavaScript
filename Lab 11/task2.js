/*
Name: LOKESH SHUKLA
Roll No: 2510303281
Assignment No: 11
Task No: 2
*/

function makeCounter() {
    let count = 0;

    return function() {
        count++;
        return count;
    };
}

let counter = makeCounter();

console.log(counter());
console.log(counter());