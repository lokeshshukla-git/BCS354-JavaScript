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