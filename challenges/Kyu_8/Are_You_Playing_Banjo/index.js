"use strict";
function areYouPlayingBanjo(name) {
    return name[0].toLowerCase() === 'r' ? `${name} plays banjo` : `${name} does not play banjo`;
}
console.log(areYouPlayingBanjo('Randy'));
console.log(areYouPlayingBanjo('rudolf'));
console.log(areYouPlayingBanjo('Sandy'));
