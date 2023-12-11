import toNumber from "../src/toNumber.js";
import { assert } from "chai";
describe("toNumber", () => {
  it("should convert a decimal string to number", () => {
    assert.strictEqual(toNumber("105.3"), 105.3);
  });
  it("should handle hexadecimal string to number", () => {
    assert.strictEqual(toNumber("0x1"), 1);
  });
  it("should handle binary string to number", () => {
    assert.strictEqual(toNumber("0b101"), 5);
  });
  it("should handle null input", () => {
    const result = toNumber(null);
    assert.strictEqual(result, 0, "Failed to handle null input");
  });

  it("should handle undefined input", () => {
    const result = toNumber(undefined);
    assert.isNaN(result, "Undefined input should result in NaN");
  });
});
