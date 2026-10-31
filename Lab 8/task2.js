/*
Name: LOKESH SHUKLA
Roll No: 2510303281
Assignment No: 8
Task No: 2
*/

class Locker {
    constructor(pin) {
        this.pin = pin;
    }

    checkPin(inputPin) {
        return this.pin === inputPin;
    }
}

let locker = new Locker(1234);

console.log(locker.checkPin(1111));
console.log(locker.checkPin(1234));