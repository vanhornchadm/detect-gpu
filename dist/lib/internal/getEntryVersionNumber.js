"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEntryVersionNumber = function (entryString) {
    return entryString.replace(/[\D]/g, '');
}; // Grab and concat all digits in the string
//# sourceMappingURL=getEntryVersionNumber.js.map