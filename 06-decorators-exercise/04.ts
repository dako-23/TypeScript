class MockAuthrizationService {

    constructor(private userRole: 'Guest' | 'PersonalDataAdministrator' | 'Admin') { }

    canViewData(property: string) {

        switch (this.userRole) {
            case 'Admin': return true;
            case 'PersonalDataAdministrator': return ['name', 'age'].includes(property);
            default: return false;
        }
    }
}

let mockAuthorizationService = new MockAuthrizationService('Admin');


function authorizeUser(authService: MockAuthrizationService) {
    return function (target: any, propName: string, descriptor: PropertyDescriptor) {
        console.log(propName);

        const originalGetter = descriptor.get

        descriptor.get = function () {
            const hasSuccess = authService.canViewData(propName)

            if (!hasSuccess) {
                throw new Error('ne moje brat')
            }
            return originalGetter?.call(this)
        }
        return descriptor
    }

}


class User14 {
    private _name: string
    private _age: number
    private _creditCardNumber: string

    constructor(name: string, age: number, creditCardNumber: string) {
        this._name = name
        this._age = age
        this._creditCardNumber = creditCardNumber
    }
    @authorizeUser(mockAuthorizationService)
    get name() {
        return this._name
    }

    @authorizeUser(mockAuthorizationService)
    get age() {
        return this._age
    }

    @authorizeUser(mockAuthorizationService)
    get creditCardNumber() {
        return this._creditCardNumber
    }
}

const user0 = new User14("John Doe", 30, 'ABCD-1234');

console.log(user0.name);

console.log(user0.age);

console.log(user0.creditCardNumber);