function toWeirdCase(str: string): string {
    let index = 0;
    return [...str].map(c => {
        if(!c.match(/\w/)) { 
            index = 0;
            return c;
        }
        
        let newC;
        if(index % 2) {
            newC = c.toLowerCase();
        } else {
            newC = c.toUpperCase()
        }
        index++;
        return newC;
    }).join('');

}

console.log(toWeirdCase('This'), 'ThIs');
console.log(toWeirdCase('is'), 'Is');
console.log(toWeirdCase('This is a test'), 'ThIs Is A TeSt');
