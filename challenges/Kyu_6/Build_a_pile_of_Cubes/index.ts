function findNb(m: number): number | undefined {
    let volume = 0;
    for(let i = 1, k = m**(1/3); i <= k; i++) {
        volume += i**3;

        if(volume === m ) {
            return i;
        }
        if(volume > m) {
            return -1;
        }
    }

    return -1;
}

console.log(findNb(4183059834009), 2022);
console.log(findNb(24723578342962), -1);
console.log(findNb(135440716410000), 4824);
console.log(findNb(40539911473216), 3568);
