"use strict";
// O(a + b)
function arrayDiff(a, b) {
    const newSet = new Set(b);
    return a.filter(num => !newSet.has(num));
}
/**
function arrayDiff(a: number[], b: number[]): number[] {
    if(a.length === 0) { return [] }
    
    if(b.length === 1) {
        return a.filter(num => num !== b[0]);
        }
        
        let hashMap: {[key: number]: boolean} = {};
        for (const key of b){
            hashMap[key] = true;
        }
        return a.filter(num => !hashMap[num]);
    }
*/
console.log(arrayDiff([1, 2], [1]), [2], "a was [1,2], b was [1]");
console.log(arrayDiff([1, 2, 2], [1]), [2, 2], "a was [1,2,2], b was [1]");
console.log(arrayDiff([1, 2, 2], [2]), [1], "a was [1,2,2], b was [2]");
console.log(arrayDiff([1, 2, 2], []), [1, 2, 2], "a was [1,2,2], b was []");
console.log(arrayDiff([], [1, 2]), [], "a was [], b was [1,2]");
console.log(arrayDiff([1, 2, 3], [1, 2]), [3], "a was [1,2,3], b was [1,2]");
