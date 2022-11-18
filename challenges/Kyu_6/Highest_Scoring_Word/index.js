"use strict";
function high(str) {
    let result = { 'word': '', 'points': 0 };
    str.split(' ').forEach(w => {
        let points = w.split('').reduce((a, b) => a + b.charCodeAt(0) - 96, 0);
        if (points > result.points) {
            result.word = w;
            result.points = points;
        }
    });
    return result.word;
}
console.log(high('man i need a taxi up to ubud'), 'taxi');
console.log(high('what time are we climbing up the volcano'), 'volcano');
console.log(high('take me to semynak'), 'semynak');
console.log(high('aa b'), 'aa');
console.log(high('b aa'), 'b');
console.log(high('bb d'), 'bb');
console.log(high('d bb'), 'd');
console.log(high('aaa b'), 'aaa');
