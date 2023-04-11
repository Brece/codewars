function diamond(n: number): string|null {
    if(!(n%2) || n <= 0) { return null }

    let lines: string[] = [];
    for(let i = 1, j = Math.floor(n/2); i <= n; i+=2) {
        lines.push(`${' '.repeat(j)}${'*'.repeat(i)}\n`);
        j--;
    }
    
    let start = lines.join('');
    let end = '';
    for(let i = lines.length - 2; i >= 0; i--) {
        end += lines[i];
    }
    
    return start + end;
}

console.log(diamond(1), "*\n");
console.log(diamond(3), " *\n***\n *\n");
console.log(diamond(5), "  *\n ***\n*****\n ***\n  *\n");
console.log(diamond(2), null);
console.log(diamond(-3), null);
console.log(diamond(0), null);
