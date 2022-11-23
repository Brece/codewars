function titleCase(title: string, minorWords?: string|undefined): string {
    if(title === '') { return '' }

    let minorWordsSet = minorWords ? new Set(minorWords.toLowerCase().split(' ')) : new Set('') ;

    return title.split(' ').map((w, i) => {
        let newWord = w.toLowerCase();

        return !minorWordsSet.has(newWord) || i === 0 ? newWord[0].toUpperCase() + newWord.slice(1) : newWord;
    }).join(' ');
}

console.log(titleCase(''), '');
console.log(titleCase('a clash of KINGS', 'a an the of'), 'A Clash of Kings');
console.log(titleCase('THE WIND IN THE WILLOWS', 'The In'), 'The Wind in the Willows');
console.log(titleCase('the quick brown fox'), 'The Quick Brown Fox');
