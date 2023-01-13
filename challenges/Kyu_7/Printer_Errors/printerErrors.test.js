const Test = require('@codewars/test-compat');

describe("printerError",function() {
  it("Basic tests",function() {   
    const s="aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz";
    Test.assertEquals(printerError(s), "3/56");
  })
});
