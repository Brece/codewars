"use strict";
function solution(str) {
    let pairsArr = [];
    for (let i = 0; i < str.length; i += 2) {
        let pair = str.slice(i, i + 2);
        if (pair.length === 1) {
            pair += '_';
        }
        pairsArr.push(pair);
    }
    return pairsArr;
}
console.log(solution("abcdef"), ["ab", "cd", "ef"]);
console.log(solution("abcdefg"), ["ab", "cd", "ef", "g_"]);
console.log(solution(""), []);
