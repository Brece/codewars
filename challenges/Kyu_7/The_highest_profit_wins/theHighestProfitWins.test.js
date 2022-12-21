const assert = require('chai').assert;

describe("minMax", () => {
  const testCases = [
    [[1, 2, 3, 4, 5], [1, 5]],
    [[2334454, 5], [5, 2334454]],
    [[5], [5, 5]]
  ];
  for(const [input, expected] of testCases) {
    it(`should work for ${JSON.stringify(input)}`, () => {
      assert.deepEqual(minMax(input), expected);
    });
  }
});
