"use strict";
//union type
const greetings = (text) => {
    if (typeof text === 'string') {
        console.log(text);
    }
    else {
        console.log(text.join(' '));
    }
};
//literal type
greetings('hello');
greetings(['hello', 'its', 'me']);
let passFailGrade;
passFailGrade = 'fail';
let grade;
grade = 2;
const dakoPerson = {
    firstName: 'Yordan',
    lastName: 'Grigorov',
    age: 27,
    school: '23 sou',
    gpa: 4
};
const emoPerson = {
    firstName: 'Emil',
    lastName: 'Yordanov',
    age: 26
};
const printStudentInfo = (student) => {
    console.log(`Student ${student.firstName} ${student.lastName} ${student.age} ${student.school} ${student.gpa}`);
};
printStudentInfo(dakoPerson);
console.log(emoPerson);
let originPoint = {
    x: 0,
    y: 0
};
const changeCoordinate = (point, coordinateName, newValue) => {
    point[coordinateName] = newValue;
};
changeCoordinate(originPoint, 'x', 5);
console.log(originPoint);
class Dog {
    name;
    age;
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
    makesound(sound) {
        console.log(sound);
    }
}
const doggie = new Dog('Budy', 7);
doggie.makesound('meow');
//# sourceMappingURL=demo.js.map