"use strict";
function count(str) {
    let map = {};
    for (let char of str) {
        map[char] ? map[char]++ : map[char] = 1;
    }
    return map;
}
console.log(count("aba"), { a: 2, b: 1 });
console.log(count(""), {});
