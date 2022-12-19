"use strict";
function solution(str, ending) {
    return str.slice(str.length - ending.length) === ending;
}
console.log(solution('abc', 'bc'), true);
console.log(solution('abc', 'd'), false);
module.exports = solution;
