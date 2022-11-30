"use strict";
function absentVowel(str) {
    const vowels = ["a", "e", "i", "o", "u"];
    const lowerStrArr = str.toLowerCase().split('');
    for (let v of vowels) {
        if (!lowerStrArr.includes(v)) {
            return vowels.indexOf(v);
        }
    }
    return -1;
}
console.log(absentVowel("John Doe hs seven red pples under his bsket"), 0);
console.log(absentVowel("Bb Smith sent us six neatly arranged range bicycles"), 3);
