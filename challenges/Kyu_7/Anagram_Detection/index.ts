function isAnagram (test: string, original: string): boolean {
    if(original.length !== test.length) { return false }

    let oMap: { [key: string]: number} = {},
        tMap: { [key: string]: number} = {};

    for(let i = 0,
            o = original.toLowerCase(),
            t = test.toLowerCase();
            i < o.length;
            i++) {
        oMap[o[i]] = oMap[o[i]] + 1 || 1;
        tMap[t[i]] = tMap[t[i]] + 1  || 1;
    }

    for(let l in oMap) {
        if(oMap[l] !== tMap[l]) { return false }
    }
    return true;
}

console.log(isAnagram("foefet", "toffee"), true);
console.log(isAnagram("Buckethead", "DeathCubeK"), true);
console.log(isAnagram("Twoo", "WooT"), true);
console.log(isAnagram("dumble", "bumble"), false);
console.log(isAnagram("ound", "round"), false);
console.log(isAnagram("apple", "pale"), false);
