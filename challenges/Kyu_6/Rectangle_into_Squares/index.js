"use strict";
function sqInRect(lng, wdth) {
    if (lng === wdth) {
        return null;
    }
    let a = lng;
    let b = wdth;
    let result = [];
    while (a > 0 && b > 0) {
        result.push(Math.min(a, b));
        a > b ? a -= b : b -= a;
    }
    return result;
}
console.log(sqInRect(5, 5), null);
console.log(sqInRect(5, 3), [3, 2, 1, 1]);
console.log(sqInRect(3, 5), [3, 2, 1, 1]);
console.log(sqInRect(20, 14), [14, 6, 6, 2, 2, 2]);
