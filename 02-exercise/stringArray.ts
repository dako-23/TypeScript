

const stringArr = (arg: unknown): arg is string[] => {
    return Array.isArray(arg) && arg.length >= 1 && arg.every(el => typeof el === 'string')
}

let arr: unknown = ['test', '1234'];

if (stringArr(arr)) {
    console.log(arr.length);
}