/*
Name: LOKESH SHUKLA
Roll No: 2510303281
Assignment No: 8
Task No: 3
*/

class Engine {
    constructor(power) {
        this.power = power;
    }
}

class Car {
    constructor(power) {
        this.engine = new Engine(power);
    }

    start() {
        return "Car starts with " + this.engine.power + " HP";
    }
}

let car = new Car(150);

console.log(car.start());