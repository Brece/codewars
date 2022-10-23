"use strict";
function getMiddle(s) {
    const mid = s.length / 2;
    return s.length % 2 === 0 ? s.slice(mid - 1, mid + 1) : s[Math.round(mid - 1)];
}
console.log(getMiddle("test")); // "es"
console.log(getMiddle("testing")); // "t"
console.log(getMiddle("middle")); // "dd"
console.log(getMiddle("A")); // "A"
