function log(target: any, methodName: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value

    descriptor.value = function (...args: any[]) {
        console.log(`Function ${methodName} called with arguments: ${args.join(', ')}`);

        return originalMethod(args)
    }
    return descriptor;
}


class Person13 {
    fName: string;
    lName: string;

    constructor(fname: string, lname: string) {
        this.fName = fname
        this.lName = lname
    }

    @log
    static getFullName(firstName: string, lastName: string): string {
        // console.log(firstName, lastName);
        return `${firstName} ${lastName}`

    }

}


let person1 = new Person13('John', 'Does');

Person13.getFullName(person1.fName, person1.lName)

Person13.getFullName('Benny', 'Tres');