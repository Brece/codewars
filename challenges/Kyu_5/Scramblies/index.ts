function scramble(str1: string, str2: string): boolean {
	let wordMap = new Map();
	for(let c of str2) {
		wordMap.set(c, wordMap.get(c) + 1 || 1);
	}

	for(let i = 0, c = str1[0]; i < str1.length; i++) {
		c = str1[i];
		if(wordMap.has(c)) {
			wordMap.set(c, wordMap.get(c) - 1);
			if(wordMap.get(c) === 0) { wordMap.delete(c) }
			if(wordMap.size === 0) { return true; }
		}
	}
	return false;
}

console.log(scramble('rkqodlw',           'world'      ), true );
console.log(scramble('cedewaraaossoqqyt', 'codewars'   ), true );
console.log(scramble('katas',             'steak'      ), false);
console.log(scramble('scriptjavx',        'javascript' ), false);
console.log(scramble('scriptingjava',     'javascript' ), true );
console.log(scramble('scriptsjava',       'javascripts'), true );
console.log(scramble('javscripts',        'javascript' ), false);
console.log(scramble('jscripts',          'javascript' ), false);
console.log(scramble('aabbcamaomsccdd',   'commas'     ), true );
console.log(scramble('commas',            'commas'     ), true );
console.log(scramble('sammoc',            'commas'     ), true );
console.log(scramble("abcdefghijklmnopqrstuvwxyz".repeat(10_000), "zyxcba".repeat(9_000)), true);
