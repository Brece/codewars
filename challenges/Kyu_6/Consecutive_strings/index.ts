function longestConsec(arr: string[], k: number): string {
    let arrLength = arr.length;
    let longestStr = '';

    if(arrLength === 0 || k > arrLength || k <= 0) { return longestStr }

    // for(let i = 0; i <= arrLength - k; i++) {
    //     let currentStr = '';
    //     for(let j = 0; j < k; j++) {
    //         currentStr += arr[i + j];
    //     }
    //     if(currentStr.length > longestStr.length) { longestStr = currentStr }
    // }

    for(let i = 0; i <= arrLength - k; i++) {
        let currentStr = arr.slice(i, i + k).join('');
        if(currentStr.length > longestStr.length) { longestStr = currentStr }
    }
    return longestStr;
}

console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2), "abigailtheta");
console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1), "oocccffuucccjjjkkkjyyyeehh");
console.log(longestConsec([], 3), "");
console.log(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2), "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck");
console.log(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2), "wlwsasphmxxowiaxujylentrklctozmymu");
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2), "");
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3), "ixoyx3452zzzzzzzzzzzz");
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15), "");
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0), "");
