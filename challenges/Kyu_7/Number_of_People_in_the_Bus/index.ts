function number(busStops: Array<number[]>): number {
    let num = 0;

    busStops.forEach(([enter, exit]) => num = num + enter - exit);
    return num;
}

export = number;

console.log(number([[10,0],[3,5],[5,8]]),5);
console.log(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]),17);
console.log(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]),21);
console.log(number([[0,0]]),0);
