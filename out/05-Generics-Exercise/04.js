"use strict";
function conditionalNumber(value) {
    if (typeof value === 'number') {
        console.log(value.toFixed(2));
    }
    else {
        console.log(value);
    }
}
conditionalNumber(20.3555);
conditionalNumber('wow');
conditionalNumber('a string');
// conditionalNumber<boolean>(30);
// conditionalNumber<number>('test');
//# sourceMappingURL=04.js.map