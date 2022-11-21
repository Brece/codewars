function removeConsecutiveDuplicates(str: string): string {
    return str.split(' ').filter((w, i, arr) => w !== arr[i + 1]).join(' ');
}

console.log(removeConsecutiveDuplicates('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'), '\nalpha beta gamma delta alpha beta gamma delta');
