function roundToNext5(n: number): number {
    if(n < 0) {
        return n % 5 ? n - (n % 5) : n;
    }
    return n % 5 ? n + 5 - (n % 5) : n;
}

/**
function roundToNext5(n){
    return Math.ceil(n/5)*5;
}
 */

const tests = [[0,0],[1,5],[-1,0],[-7, -5],[-5,-5],[3,5],[5,5],[7,10],[20,20],[39,40],[990,990],[121,125],[555,555]];
tests.forEach(([n, result]) => console.log(roundToNext5(n), result));
