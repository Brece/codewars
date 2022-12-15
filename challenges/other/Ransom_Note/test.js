const {ransomNote, magazine} = require('./index');

describe('Ransom Note tests', () => {
    test("Should return true", () => {
        expect(ransomNote("sit ad est sint", magazine)).toBe(true);
    });
    
    test("Should return false", () => {
        expect(ransomNote("sit ad est love", magazine)).toBe(false);
    });
    
    test("Should return true", () => {
        expect(ransomNote("sit ad est sint in in", magazine)).toBe(true);
    });
    
    test("Should return false", () => {
        expect(ransomNote("sit ad est sint in in in in", magazine)).toBe(false);
    });
});
