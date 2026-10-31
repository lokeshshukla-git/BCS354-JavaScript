/*
Name: LOKESH SHUKLA
Roll No: 2510303281
Assignment No: 4
Task No: 3
*/

function billWithTax(amount, taxRate = 0.18) {
    return amount + (amount * taxRate);
}

console.log(billWithTax(100));