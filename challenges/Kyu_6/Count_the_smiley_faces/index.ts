function countSmileys(arr: string[]): number {
    let count = 0;
    arr.forEach((str => {
        if(str.match(/[:;][-~]?[D\)]/)) { count++ }
    }));

    return count;
}

console.log(countSmileys([]), 0);
console.log(countSmileys([':D',':~)',';~D',':)']), 4);
console.log(countSmileys([':)',':(',':D',':O',':;']), 2);
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']), 1);
