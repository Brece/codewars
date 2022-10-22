"use strict";
function getCount(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return str.split('').filter(char => vowels.includes(char)).length;
}
console.log(getCount("abracadabra")); // 5
console.log(getCount("abr gasdlgij aljgöm elrkgm pag lamdfglaerg aegmad gmoiandg g ac adab ra")); // 19
