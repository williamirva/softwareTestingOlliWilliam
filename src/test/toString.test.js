import toString from "../toString.js";
import { assert } from "chai";
//Temp commenting because trying to figure out coveralls
// describe("toString", () => {
//   it("should convert null to an empty string", () => {
//     assert.strictEqual(toString(null), "");
//   });

  it("should preserve the sign of -0", () => {
    assert.strictEqual(toString(-0), "-0");
  });

  it("should convert an array to a string", () => {
    assert.strictEqual(toString([1, 2, 3]), "1,2,3");
  });
  it("should convert number 524 to string 524", () => {
    assert.strictEqual(toString(524), "524");
  });
  it("should handle decimals", () => {
    assert.strictEqual(toString(111.19), "111.19");
  });
});
