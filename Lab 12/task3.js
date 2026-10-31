/*
Name: LOKESH SHUKLA
Roll No: 2510303281
Assignment No: 12
Task No: 3
*/

function repeatAction(times, action) {
    for (let i = 1; i <= times; i++) {
        action(i);
    }
}

repeatAction(3, round => {
    console.log("Round " + round);
});