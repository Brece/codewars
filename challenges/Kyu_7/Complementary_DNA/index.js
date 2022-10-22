"use strict";
function DNAStrand(dna) {
    return dna.split('').map(char => {
        switch (char) {
            case 'A':
                return 'T';
            case 'T':
                return 'A';
            case 'C':
                return 'G';
            case 'G':
                return 'C';
        }
    })
        .join('');
}
/**
let pairs = {A:'T',T:'A',C:'G',G:'C'};
const DNAStrand = dna => dna.replace(/./g, c => pairs[c]); // "Dot" matches any character except line breaks; "g"-tag for global
 */
console.log(DNAStrand("AAAA")); // "TTTT","String AAAA is"
console.log(DNAStrand("ATTGC")); // "TAACG","String ATTGC is"
console.log(DNAStrand("GTAT")); // "CATA","String GTAT is"
