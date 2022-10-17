"use strict";
function shark(pontoonDistance, sharkDistance, yourSpeed, sharkSpeed, dolphin) {
    return pontoonDistance / yourSpeed < sharkDistance / (dolphin ? sharkSpeed / 2 : sharkSpeed) ? 'Alive!' : 'Shark Bait!';
}
console.log(shark(12, 50, 4, 8, true)); // "Alive!"
console.log(shark(7, 55, 4, 16, true)); // "Alive!"
console.log(shark(24, 0, 4, 8, true)); // "Shark Bait!"
