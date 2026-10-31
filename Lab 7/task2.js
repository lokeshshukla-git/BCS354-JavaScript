/*
Name: LOKESH SHUKLA
Roll No: 2510303281
Assignment No: 7
Task No: 2
*/

class Book {
    constructor(title, pages) {
        this.title = title;
        this.pages = pages;
    }

    summary() {
        return this.title + " has " + this.pages + " pages";
    }
}

let book1 = new Book("Algorithms", 320);

console.log(book1.summary());