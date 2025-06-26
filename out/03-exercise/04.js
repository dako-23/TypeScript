"use strict";
const httpCodes = (httpCode) => {
    if ('printChars' in httpCode) {
        console.log(httpCode.text.slice(0, httpCode.printChars));
    }
    else {
        console.log(httpCode.text);
    }
};
httpCodes({ code: 200, text: 'OK' });
//# sourceMappingURL=04.js.map