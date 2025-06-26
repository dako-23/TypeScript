class MockCensorService<T extends { [key: string]: any }> {

    constructor(private censoredProperties: string[]) { }

    censorProperties(items: T[]) {

        let censoredItems = items.slice();

        censoredItems.forEach(i => {
            this.censoredProperties.forEach(prop => { delete i[prop]; });
        });

        return censoredItems;
    }
}

let userCensorService = new MockCensorService<User22>(['creditCardNumber'])
let employeeCensorService = new MockCensorService<Employee12>(['birthday', 'salary'])

function addCreatedAt1<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        createdAt = new Date();
    }
}

function getLatest(seconds: number) {

    return function (target: any, propName: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value

        descriptor.value = function () {
            const allItems = originalMethod.call(this);
            const currentTime = new Date();

            const recentItems = allItems.filter((item: any) => currentTime.getTime() - allItems.createdAt.getTime() <= seconds * 1000)

            return recentItems
        }
        return descriptor
    }
}

function censorProps<T extends { [key: string]: any }>(censorService: MockCensorService<T>) {
    return function (target: any, propName: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value

        descriptor.value = function () {
            const allItems = originalMethod.call(this);
            const censoredItems = censorService.censorProperties(allItems)
            return censoredItems
        }
        return descriptor;
    }
}

function log(target: any, propName: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function () {
        console.log(`Method ${propName} called successfully`);
        return originalMethod.call(this);
    }
    return descriptor;
}


@addCreatedAt1
class User22 {

    constructor(

        public name: string, public age: number, public creditCardNumber: string) { }


    getInfo() {
        return `${this.name}, Age: ${this.age} CreditCardNumber:

${this.creditCardNumber}`;
    }

}

@addCreatedAt1
class Employee12 {

    constructor(public name: string, public birthday: Date, public salary: number) { }

    getInfo() {
        return `${this.name}, Birthday: ${this.birthday?.toLocaleDateString()}

Salary: ${this.salary}`;
    }
}

class UsersService {

    private _users: User[];

    private _employees: Employee[];

    constructor(users: User[], employees: Employee[]) {

        this._users = users; this._employees = employees;

    }


    addUser(user: User) { this._users.push(user); }

    addEmployee(employee: Employee) { this._employees.push(employee); }

    @getLatest(5)
    @censorProps(userCensorService)
    getUsers() { return this._users; }

    @log
    @getLatest(10)
    @censorProps(employeeCensorService)
    getEmployees() { return this._employees; }

}
