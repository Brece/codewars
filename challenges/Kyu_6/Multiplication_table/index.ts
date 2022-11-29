function multiplicationTable(size: number): [number[]] {
    let matrix: any = [];

    for(let i = 1; i <= size; i++) {
        let row = [];

        for(let j = 1; j <= size; j++) {
            row.push(i * j);
        }
        matrix.push(row);
    }
    return matrix;
}

console.log(multiplicationTable(3), [[1,2,3], [2,4,6], [3,6,9]]);
