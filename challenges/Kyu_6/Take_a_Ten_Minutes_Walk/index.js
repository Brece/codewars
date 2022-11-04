"use strict";
function isValidWalk(walk) {
    if (walk.length !== 10) {
        return false;
    }
    let v = 0, h = 0;
    walk.forEach(str => {
        if (str === "n") {
            v++;
        }
        if (str === "s") {
            v--;
        }
        if (str === "w") {
            h--;
        }
        if (str === "e") {
            h++;
        }
    });
    return v === 0 && h === 0;
}
console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']), 'should return true');
console.log(isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']), 'should return false');
console.log(isValidWalk(['w']), 'should return false');
console.log(isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']), 'should return false');
