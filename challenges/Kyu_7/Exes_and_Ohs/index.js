"use strict";
function XO(str) {
    let map = {};
    for (let c of str.toLowerCase()) {
        if (c === "o" || c === "x") {
            map[c] ? map[c] += 1 : map[c] = 1;
        }
    }
    return map["x"] || map["o"] ? map["x"] === map["o"] : true;
}
console.log(XO('xo'), true);
console.log(XO("xxOo"), true);
console.log(XO("xxxm"), false);
console.log(XO("Oo"), false);
console.log(XO("ooom"), false);
console.log(XO("zpzpzpp"), true);
