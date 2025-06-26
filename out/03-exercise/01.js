"use strict";
const optionalMultiplier = (param1, param2, param3) => {
    const num1 = param1 == undefined ? 1 : Number(param1);
    const num2 = param2 == undefined ? 1 : Number(param2);
    const num3 = param3 == undefined ? 1 : Number(param3);
    return num1 * num2 * num3;
};
console.log(optionalMultiplier('2', '2'));
//# sourceMappingURL=01.js.map