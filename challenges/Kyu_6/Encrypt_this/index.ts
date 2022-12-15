const encryptThis = (str: string): string => {
    if(!str.length) { return '' }
    return str.split(' ')
        .map(w => {
            let encryptedWord = '';
            for(let i = 0; i < w.length; i++) {
                switch(i){
                    case 0:
                        encryptedWord += `${w.charCodeAt(0)}`;
                        break;
                    case 1:
                        encryptedWord += w[w.length - 1];
                        break;
                    case w.length - 1:
                        encryptedWord += w[1];
                        break;
                    default:
                        encryptedWord += w[i];
                }
            }
            return encryptedWord;
        })
        .join(' ');
}

export = encryptThis;

console.log(encryptThis('Hello'), '72olle');
console.log(encryptThis(''), '');