"use strict";
// ASCII char code: a = 97, z = 122
function alphabetPosition(text) {
    return text.toLowerCase().split('')
        .filter(char => {
        let code = char.charCodeAt(0);
        return !(code < 97) && !(code > 122);
    })
        .map(char => (char.charCodeAt(0) - 96).toString())
        .join(' ');
}
console.log(alphabetPosition("The sunset sets at twelve o' clock."), "Expected: 20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");
console.log(alphabetPosition("The narwhal bacons at midnight."), "Expected: 20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20");
