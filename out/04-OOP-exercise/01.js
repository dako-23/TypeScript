"use strict";
class Person1 {
    firstName;
    lastName;
    age;
    constructor(fn, ln, age) {
        this.firstName = fn;
        this.lastName = ln;
        this.age = age;
    }
    introduce() {
        return `My name is ${this.firstName} ${this.lastName} ${this.age}`;
    }
}
const person = new Person1('John', 'Smith', 30);
console.log(person.introduce());
//# sourceMappingURL=01.js.map