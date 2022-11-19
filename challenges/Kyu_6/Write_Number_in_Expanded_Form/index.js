"use strict";
function expandedForm(num) {
    let numArr = num.toString().split('');
    let numLength = numArr.length;
    return numArr.map((n, i) => n !== '0' ? n + '0'.repeat(numLength - i - 1) : n)
        .filter(n => n !== '0')
        .join(' + ');
}
console.log(expandedForm(12), '10 + 2');
console.log(expandedForm(42), '40 + 2');
console.log(expandedForm(70304), '70000 + 300 + 4');
