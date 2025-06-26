"use strict";
const stringArr = (arg) => {
    return Array.isArray(arg) && arg.length >= 1 && arg.every(el => typeof el === 'string');
};
let arr = ['test', '1234'];
if (stringArr(arr)) {
    console.log(arr.length);
}
//# sourceMappingURL=stringArray.js.map