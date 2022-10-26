function upArray(arr: number[]): number[] | null | undefined {
    if(arr.find(num => num < 0 || num > 9) || arr.length === 0) { return null }

    let uppedArr = String(BigInt(arr.join('')) + BigInt(1))
                        .split('')
                        .map(num => Number(num));
    if(uppedArr.length < arr.length) {
        for(let i = 0; i <= arr.length - uppedArr.length; i++) {
            uppedArr.unshift(0);
        }
    }
    return uppedArr;
}

/** solution without type conversions
function upArray(arr) {
    if ((typeof arr === 'undefined') || (arr === null) || (arr.length === 0)) {
        return null;
    }

    for (var i = 0; i < arr.length; i++) {
        if ((arr[i] < 0) || (typeof arr[i] !== 'number') || (arr[i] > 9)) {
            return null;
        }
    }
    // if its 9 and more than one digit we have to check all previous digits
    // whether they are also a 9
    for (var j = arr.length - 1; j > -1; j--) {
        if (arr[j] !== 9) {
            arr[j] = arr[j] + 1;
            break;
        } else {
            arr[j] = 0;
        }

        if (j === 0) {
            arr.unshift(1);
        }
    }
    return arr;
}
 */
console.log(upArray([4,3,2,5])); // [4,3,2,6]
console.log(upArray([2,3,9,9])); // [2,4,0,0]
console.log(upArray([9,9])); // [1,0,0]
console.log(upArray([0,7])); // [0,8]
console.log(upArray([1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0])); // [1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,1]
console.log(upArray([1,-9])); // null
console.log(upArray([1,10])); // null