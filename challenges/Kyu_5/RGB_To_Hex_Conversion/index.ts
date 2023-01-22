function rgb(r: number, g: number, b: number): string {
    return [...arguments].map(n => {
        let num = n;

        if(num < 0) { num = 0 }
        if(num > 255) { num = 255 }

        let hex = num.toString(16).toUpperCase();
        
        return hex.length === 1 ? '0' + hex : hex;
    }).join('');
}

console.log(rgb(0, 0, 0), '000000');
console.log(rgb(0, 0, -20), '000000');
console.log(rgb(300,255,255), 'FFFFFF');
console.log(rgb(173,255,47), 'ADFF2F');
