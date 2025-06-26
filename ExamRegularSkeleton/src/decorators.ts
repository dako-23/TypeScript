export function decorator1() { }

export function decorator2(_target: any, _propertyKey: string, descriptor: PropertyDescriptor) {

    const originalGetter = descriptor.get;

    descriptor.get = function () {
        const basePrice: number = (this as { _price: number })._price;

        originalGetter?.call(this);
        
        return basePrice * 1.2;
    };
    return descriptor
}
export const decorator3 = decorator2

export function decorator4() { }

export function decorator5<T extends abstract new (...args: any[]) => {}>(constructor: T) {

    abstract class newAbstractClass extends constructor {
        public static readonly MotelName = 'Monthly Motel';


    }
    return newAbstractClass;
}