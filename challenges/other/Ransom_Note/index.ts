interface Map {
    [key: string]: number
}

/** first solution with TWO hash maps

function ransomNote(note: string, text: string): boolean {
    let noteMap: Map = {};
    let textMap: Map = {};

    note.split(' ').forEach(w => noteMap[w] ? noteMap[w] += 1 : noteMap[w] = 1);
    text.split(' ').forEach(w => textMap[w] ? textMap[w] += 1 : textMap[w] = 1);

    for(let i = 0, words = Object.keys(noteMap); i < words.length; i++) {
        if(!textMap[words[i]] || noteMap[words[i]] > textMap[words[i]]) { return false }
    }
    return true;
}
 */

// second solution with only ONE hash map
function ransomNote(note: string, text: string): boolean {
	const magazineWords = magazine.split(" ");
	const magazineHash: Map = {};

	magazineWords.forEach(word => {
		if (!magazineHash[word]) { magazineHash[word] = 0 };
		magazineHash[word]++;
	});

	const noteWords = note.split(" ");
	let possible = true;

	noteWords.forEach(word => {
		if (magazineHash[word]) {
			magazineHash[word]--;
			if (magazineHash[word] < 0) { possible = false };
		} else {
            possible = false;
        }
	});

	return possible;
};

const magazine =  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

console.log(ransomNote("sit ad est love", magazine), false);

export = { ransomNote, magazine };

