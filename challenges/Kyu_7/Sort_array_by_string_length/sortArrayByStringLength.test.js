const Test = require('@codewars/test-compat');

describe("Example tests",function(){
  it("Test 1",function(){
    Test.assertDeepEquals(sortByLength(["Beg", "Life", "I", "To"]),["I", "To", "Beg", "Life"]);
  });
  it("Test 2",function(){
    Test.assertDeepEquals(sortByLength(["", "Moderately", "Brains", "Pizza"]),["", "Pizza", "Brains", "Moderately"]);
  });
  it("Test 3",function(){
    Test.assertDeepEquals(sortByLength(["Longer", "Longest", "Short"]),["Short", "Longer", "Longest"]);
  });
});
