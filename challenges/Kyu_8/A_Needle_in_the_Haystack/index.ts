function findNeedle(haystack: string[]): string {
    return "found the needle at position " + haystack.indexOf("needle");
}

console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"])); // index 5
