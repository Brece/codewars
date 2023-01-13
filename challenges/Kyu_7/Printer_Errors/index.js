"use strict";
function printerError(s) {
    return `${s.match(/[n-z]/g)?.length || 0}/${s.length}`;
}
const s = "aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz";
console.log(printerError(s), "3/56");
