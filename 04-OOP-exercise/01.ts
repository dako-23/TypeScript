
class Person1 {
    public firstName: string;
    public lastName: string;
    public age: number;

    constructor(fn: string, ln: string, age: number) {
        this.firstName = fn;
        this.lastName = ln;
        this.age = age;
    }

    public introduce(): string{
        return `My name is ${this.firstName} ${this.lastName} ${this.age}`
    }
}

const person = new Person1('John', 'Smith', 30); 
console.log(person.introduce());

