function capitals(word: string): number[] {
    let result: number[] = [];

    for(let c of word) {
        if(c === c.toUpperCase()) { result.push(word.indexOf(c)) }
    }
    return result;
}

console.log(capitals('CodEWaRs'), [0,3,4,6]);
