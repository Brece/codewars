function strCount(str: string, letter: string): number { 
    return str.length > 0 ? str.split('').filter(char => char === letter).length : 0;
}

function strCount_2(str: string, letter: string): number { 
    console.log(str.split(letter).length - 1);
    return 0;
}


console.log(strCount('Heoollo', 'o')); // 3
console.log(strCount('Hello', 'l')); // 2
console.log(strCount('', 'z')); // 0
console.log(strCount_2('oooo o doodo odo oo', 'o')); // 12
