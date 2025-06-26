"use strict";
let names = { fName: 'John', lName: 'Doe', age: 22, getPersonInfo() { return `${this.fName} ${this.lName}, age ${this.age}`; } };
let locations = { city: 'Boston', street: 'Nowhere street', number: 13, postalCode: 51225, getAddressInfo() { return `${this.street} ${this.number}, ${this.city}${this.postalCode}`; } };
const combinedInfo = (names, locations) => {
    return function (combinedObject) {
        console.log(`Hello, ${combinedObject.getPersonInfo()} from ${combinedObject.getAddressInfo()}`);
    };
};
let combinedFunction = combinedInfo(names, locations);
let combinedPerson = Object.assign({}, names, locations);
combinedFunction(combinedPerson);
//# sourceMappingURL=06.js.map