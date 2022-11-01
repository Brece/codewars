"use strict";
function stringTransformer(str) {
    return str.split(' ')
        .reverse()
        .join(' ')
        .split('')
        .map(char => char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase())
        .join('');
}
console.log(stringTransformer('Example string'), 'STRING eXAMPLE');
