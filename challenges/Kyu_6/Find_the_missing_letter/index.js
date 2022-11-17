"use strict";
function findMissingLetter(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].charCodeAt(0) + 1 !== arr[i + 1].charCodeAt(0)) {
            return String.fromCharCode(arr[i].charCodeAt(0) + 1);
        }
    }
    return '';
}
console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f']), 'e');
console.log(findMissingLetter(['O', 'Q', 'R', 'S']), 'P');
