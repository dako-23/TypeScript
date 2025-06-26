
interface Animal1 {
    makeSound(): string;
}

class Dog1 implements Animal1 {
    makeSound(): string {
        return 'Woof';
    }
}

const dog = new Dog1();

console.log(dog.makeSound());