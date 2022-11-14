function findUniq(arr: number[]): number|undefined {
    let map: { [key: number]: number } = {};

    for(let i = 0; i < 3; i++) {
        map[arr[i]] = map[arr[i]] + 1 || 1;
    }

    let notUnique = Number(Object.keys(map).find(key => map[Number(key)] > 1));

    return arr.find(n => n !== notUnique);
}

/*
function findUniq(arr: number[]): number {
    let [a,b,c] = arr;
    if( a != b && a!=c ) return a;
    for( let x of arr ) if( x!=a ) return x
}
*/

console.log(findUniq([ 1, 0, 0 ]), 1);
console.log(findUniq([ 0, 1, 0 ]), 1);
console.log(findUniq([ 0, 0, 1 ]), 1);
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]), 2);
console.log(findUniq([ 1, 1, 2, 1, 1 ]), 2);
console.log(findUniq([ 3, 10, 3, 3, 3 ]), 10);
