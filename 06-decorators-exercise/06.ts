
function validateName(minLength: number) {
    return function (target: any, propName: string, descriptor: PropertyDescriptor) {
        const originalSetter = descriptor.set;

        descriptor.set = function (val: string) {
            if (val.length < minLength) {
                throw new Error('name must have a min length of 3 characters')
            }
            originalSetter?.call(this, val)
        }
        return descriptor;
    }
}

function validateAge1(minLength: number, maxLength: number) {
    return function (target: any, propName: string, descriptor: PropertyDescriptor) {
        const originalSetter = descriptor.set;

        descriptor.set = function (val: number) {
            if (val < minLength || val > maxLength) {
                throw new Error('age must be between 1 and 150')
            }
            originalSetter?.call(this, val)
        }
        return descriptor;
    }
}

function validatePassword(pass: RegExp) {
    return function (target: any, propName: string, descriptor: PropertyDescriptor) {
        const originalSetter = descriptor.set;

        descriptor.set = function (val: string) {
            if (!val.match(pass)) {
                throw new Error(`password needs to match ${pass}`)
            }

            originalSetter?.call(this, val)
        }
        return descriptor
    }
}


class User23 {

    private _name!: string;

    private _age!: number;

    private _password!: string;


    constructor(name: string, age: number, password: string) {

        this.name = name;

        this.age = age;

        this.password = password;

    }
    @validateName(1)
    set name(val: string) { this._name = val; }
    @validateAge1(1, 150)
    set age(val: number) { this._age = val; }
    @validatePassword(/^[a-zA-Z0-9!@]+$/g)
    set password(val: string) { this._password = val; }

    get name() { return this._name; }

    get age() { return this._age; }

}

// minLength = 3

// min = 1, max = 100

// regex = /^[a-zA-Z0-9]+$/g



let user2 = new User23('John', 30, '!test');

let user3 = new User23('John', 25, '@werty');

let user4 = new User23('Jo', 20, 'password123');