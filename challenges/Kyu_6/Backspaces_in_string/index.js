"use strict";
function cleanString(s) {
    let result = [];
    s.split('').forEach(c => c === '#' ? result.pop() : result.push(c));
    return result.join('');
}
console.log(cleanString('abc#d##c'), 'ac');
console.log(cleanString('abc####d##c#'), '');
