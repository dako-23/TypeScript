//union type
const greetings = (text: string | string[]): void => {

    if (typeof text === 'string') {
        console.log(text);
    } else {
        console.log(text.join(' '));
    }

}

//literal type
greetings('hello');
greetings(['hello', 'its', 'me']);

let passFailGrade: 'pass' | 'fail';
passFailGrade = 'fail'

let grade: 1 | 2 | 3 | 4 | 5 | 6;
grade = 2

//custom types
type Person = {
    firstName: string;
    lastName: string;
    age: number;
}

type StudentProfile = {
    school: string;
    gpa: number;
}

type FullStudent = Person & StudentProfile;

const dakoPerson: FullStudent = {
    firstName: 'Yordan',
    lastName: 'Grigorov',
    age: 27,
    school: '23 sou',
    gpa: 4
}

const emoPerson: Person = {
    firstName: 'Emil',
    lastName: 'Yordanov',
    age: 26
}

const printStudentInfo = (student: FullStudent): void => {
    console.log(`Student ${student.firstName} ${student.lastName} ${student.age} ${student.school} ${student.gpa}`);
}

printStudentInfo(dakoPerson)
console.log(emoPerson);


//keyoff

type Point = {
    x: number;
    y: number;
}


let originPoint: Point = {
    x: 0,
    y: 0
}

const changeCoordinate = (point: Point, coordinateName: keyof (Point), newValue: number): void => {
    point[coordinateName] = newValue;
}

changeCoordinate(originPoint, 'x', 5);
console.log(originPoint);


//interfaces

interface Animal {
    name: string;
    age: number;
    makesound(sound: string): void;
}

class Dog implements Animal {
    name: string;
    age: number;

    constructor(n: string, a: number) {
        this.name = n
        this.age = a
    }

    makesound(sound: string): void {
        console.log(sound);
    }
}

const doggie = new Dog('Budy', 7)
doggie.makesound('meow')

