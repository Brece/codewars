function rot13(message: string): string {
    let rotated = '';

    for(let c of message) {
        if(c.match(/[a-z]/)) { rotated += String.fromCharCode((c.charCodeAt(0) - 97 + 13) % 26 + 97) }
        else if (c.match(/[A-Z]/)) { rotated += String.fromCharCode((c.charCodeAt(0) - 65 + 13) % 26 + 65) }
        else { rotated += c; }
    }
    return rotated;
}

// console.log(rot13("test"), "grfg");
// console.log(rot13("Test"), "Grfg");
console.log(rot13("m"), "z");