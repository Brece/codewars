function moveZeros(arr: any[]): any[] {
    let rest: any[] = [];
    let zeros: number[] = [];

    arr.forEach(e => e === 0 ? zeros.push(e) : rest.push(e));
    return rest.concat(zeros);
}

console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]), [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]);
