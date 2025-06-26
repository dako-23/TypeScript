

type InputParam<T> = T extends number ? number : string

function conditionalNumber<T>(value: InputParam<T>): void {

    if (typeof value === 'number') {
        console.log(value.toFixed(2));
    } else {
        console.log(value);

    }

}


conditionalNumber<number>(20.3555);

conditionalNumber<string>('wow');

conditionalNumber<boolean>('a string');

// conditionalNumber<boolean>(30);

// conditionalNumber<number>('test');