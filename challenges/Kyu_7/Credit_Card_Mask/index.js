"use strict";
function maskify(str) {
    return str.split('').fill('#', 0, str.length <= 4 ? 0 : str.length - 4).join('');
}
console.log(maskify('4556364607935616'), '############5616');
console.log(maskify('1'), '1');
console.log(maskify(''), '');
console.log(maskify('111'), '111');
console.log(maskify('11111'), '#1111');
