

function addCreatedAt(constructor: { new(...args: any[]): User24 }) {
    return class extends constructor {
        createdOn = new Date();
    }
}

@addCreatedAt
class User24 {

    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    displayUserInfo(): void {
        console.log(`${this.name} ${this.age}`);
    }
}

const user111 = new User24("Euro Jeep", 30);

user111.displayUserInfo()

console.log(user111);

console.log((user111 as any).createdOn);