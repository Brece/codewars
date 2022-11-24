function inArray(arr1: string[], arr2: string[]): string[] {
    let subSet = new Set<string>();
    
    for(const sub of arr1) {
        if(sub !== undefined && sub.length > 0) {
            for(const word of arr2) {
                if(word.match(sub)){
                    subSet.add(sub);
                }
            }
        }
    }

    return Array.from(subSet).sort();
}

/* does only work when array1 consists of strings without spaces and length > 1

function inArray(array1: string[] ,array2: string[]): string[] {
    const joined = array2.join(" ");
    return array1.filter( e => joined.includes(e) ).sort();
}
*/

console.log(inArray(["xyz", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"]), ["live", "strong"]);
console.log(inArray(["live", "strong", "arp"], ["lively", "alive", "harp", "sharp", "armstrong"]), ["arp", "live", "strong"]);
console.log(inArray(["tarp", "mice", "bull"], ["lively", "alive", "harp", "sharp", "armstrong"]), []);
console.log(inArray(["live", "strong", "", "lyal", "lysh", "arp"], ["lively", "alive", "harp", "sharp", "armstrong"]), ["arp", "live", "strong"]);
