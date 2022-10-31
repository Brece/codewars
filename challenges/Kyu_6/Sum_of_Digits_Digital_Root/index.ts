function digitalRoot(n: number): number {
    return n < 10 ? n : digitalRoot(n.toString().split('').reduce((a, b) => Number(a) + Number(b), 0));
}

console.log(digitalRoot(16), 7);
console.log(digitalRoot(456), 6);
console.log(digitalRoot(942), 6);
console.log(digitalRoot(132189), 6);
console.log(digitalRoot(493193), 2);
