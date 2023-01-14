function mxdiflg(a1: string[], a2: string[]): number {
    if(!a1.length || !a2.length) { return -1 }

    const lengthArr1 = a1.map(e => e.length);
    const lengthArr2 = a2.map(e => e.length);

    return Math.max(
        Math.abs(Math.max(...lengthArr1) - Math.min(...lengthArr2)),
        Math.abs(Math.max(...lengthArr2) - Math.min(...lengthArr1))
    );
}

const s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
const s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];
console.log(mxdiflg(s1, s2), 13);
