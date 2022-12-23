"use strict";
function longest(s1, s2) {
    let uniques = new Set(s1 + s2);
    return [...uniques].sort().join('');
}
console.log(longest("aretheyhere", "yestheyarehere"), "aehrsty");
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"), "abcdefghilnoprstu");
console.log(longest("inmanylanguages", "theresapairoffunctions"), "acefghilmnoprstuy");
