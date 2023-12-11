import { expect } from "chai";
import upperFirst from "../src/upperFirst.js";

describe("upperFirst function", () => {
  it("should convert the first character of a string to uppercase", () => {
    const result1 = upperFirst("maito");
    expect(result1).to.equal("Maito");

    const result2 = upperFirst("LEHMÄ");
    expect(result2).to.equal("LEHMÄ");
  });

  it("should handle an empty string", () => {
    const result3 = upperFirst("");
    expect(result3).to.equal("");
  });

  it("should handle undefined or null input", () => {
    const result4 = upperFirst(undefined);
    expect(result4).to.equal("");

    const result5 = upperFirst(null);
    expect(result5).to.equal("");
  });

  it("should handle number string inputs", () => {
    const result6 = upperFirst("123");
    expect(result6).to.equal("123");
  });
});
