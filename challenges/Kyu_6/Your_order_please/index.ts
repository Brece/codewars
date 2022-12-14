function order(words: string): string{
    if(words.length === 0) { return '' }

    let orderedStrArr: string[] = [];
    let order = words.match(/[1-9]/g);
    words.split(' ').forEach((word, index) => {
        orderedStrArr[Number(order[index]) - 1] = word;
    });
    return orderedStrArr.join(' ');
}

console.log(order("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est");
console.log(order("4of Fo1r pe6ople g3ood th5e the2"), "Fo1r the2 g3ood 4of th5e pe6ople");
console.log(order(""), "", "empty input should return empty string");