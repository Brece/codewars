function revrot(str: string, sz: number): string {
    if(!str.length || sz <= 0 || sz > str.length) { return "" }

    let strArr = [...str];
    let subArr = [];

    // create sub arrays that meet the conditions
    for(let i = 0; i < str.length; i += sz) {
        let sub = strArr.slice(i, i + sz);
        if(sub.length === sz) {
            subArr.push(sub);
        }
    }

    // transform sub arrays
    return subArr.map((s: string[]) => {
        if(s.reduce((a, b) => a + Number(b)**3, 0) % 2 === 0) {
            // reverse sub
            return s.reverse().join('');
        }
        // shift positions
        let first: any = s.shift();
        s.push(first);
        return s.join('');
    }).join('');
}

console.log(revrot("1234", 0), "");
console.log(revrot("", 0), "");
console.log(revrot("1234", 5), "");
console.log(revrot("733049910872815764", 5), "330479108928157");

console.log(revrot("123456987654", 6), "234561876549");
console.log(revrot("123456987653", 6), "234561356789");
console.log(revrot("66443875", 4), "44668753");
console.log(revrot("66443875", 8), "64438756");
console.log(revrot("664438769", 8), "67834466");
console.log(revrot("123456779", 8), "23456771");
console.log(revrot("563000655734469485", 4), "0365065073456944");
