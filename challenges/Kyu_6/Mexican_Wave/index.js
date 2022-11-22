"use strict";
function wave(str) {
    let result = [];
    str.split('').forEach((char, i, arr) => {
        if (char !== ' ') {
            let newArr = [...arr];
            newArr[i] = char.toUpperCase();
            result.push(newArr.join(''));
        }
    });
    return result;
}
console.log(wave("hello"), ["Hello", "hEllo", "heLlo", "helLo", "hellO"]);
console.log(wave("codewars"), ["Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS"]);
console.log(wave(""), []);
console.log(wave("two words"), ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"]);
console.log(wave(" gap "), [" Gap ", " gAp ", " gaP "]);
