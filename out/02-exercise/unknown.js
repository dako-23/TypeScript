"use strict";
const unknown = (arg) => {
    if ('value' in arg && typeof arg.value === 'string') {
        return arg.value;
    }
    return '-';
};
//# sourceMappingURL=unknown.js.map