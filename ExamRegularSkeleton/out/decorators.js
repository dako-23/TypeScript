"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decorator3 = void 0;
exports.decorator1 = decorator1;
exports.decorator2 = decorator2;
exports.decorator4 = decorator4;
exports.decorator5 = decorator5;
function decorator1() { }
function decorator2(_target, _propertyKey, descriptor) {
    const originalGetter = descriptor.get;
    descriptor.get = function () {
        const basePrice = this._price;
        originalGetter?.call(this);
        return basePrice * 1.2;
    };
    return descriptor;
}
exports.decorator3 = decorator2;
function decorator4() { }
function decorator5(constructor) {
    class newAbstractClass extends constructor {
        static MotelName = 'Monthly Motel';
    }
    return newAbstractClass;
}
//# sourceMappingURL=decorators.js.map