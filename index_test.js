var assert = require("assert");
var Calculate = require("../index.js");

describe("Calculate", () => {
  describe(".factorial", () => {
    it("5! === 120", () => {
      const expect = 120;
      const number = 5;

      const result = Calculate.factorial(number);

      assert.equal(expect, result);
    });

    it("3! === 6", () => {
      const expect = 6;
      const number = 3;

      const result = Calculate.factorial(number);

      assert.equal(expect, result);
    });

    it("0! === 1", () => {
      const expect = 1;
      const number = 0;

      const result = Calculate.factorial(number);

      assert.equal(expect, result);
    });
  });
});
