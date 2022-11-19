"use strict";
function validBraces(braces) {
    if (braces.length % 2) {
        return false;
    }
    let matchingBraces = { '(': ')', '{': '}', '[': ']' };
    let closingArr = [];
    for (let i = 0; i < braces.length; i++) {
        if (braces[i].match(/[({\[]/)) {
            closingArr.push(matchingBraces[braces[i]]);
            continue;
        }
        if (braces[i] === closingArr[closingArr.length - 1]) {
            closingArr.pop();
        }
        else {
            return false;
        }
    }
    return closingArr.length === 0;
}
console.log(validBraces("()))"), false);
console.log(validBraces("()"), true);
console.log(validBraces("[]"), true);
console.log(validBraces("{}"), true);
console.log(validBraces("(){}[]"), true);
console.log(validBraces("([{}])"), true);
console.log(validBraces("(}"), false);
console.log(validBraces("[(])"), false);
console.log(validBraces("({})[({})]"), true);
console.log(validBraces("(})"), false);
console.log(validBraces("(({{[[]]}}))"), true);
console.log(validBraces("{}({})[]"), true);
console.log(validBraces(")(}{]["), false);
console.log(validBraces("())({}}{()][]["), false);
console.log(validBraces("(((({{"), false);
console.log(validBraces("}}]]))}])"), false);
