import toNumber from "../toNumber.js";
import { assert } from "chai";
describe("toNumber", () => {
    it("should convert a decimal string to number", () => {
        assert.strictEqual(toNumber("105.3"), 105.3);
    });
    it('should handle hexadecimal string to number', () => {
        assert.strictEqual(toNumber('0x1'), 1);
    });
    it('should handle binary string to number', () => {
        assert.strictEqual(toNumber('0b101'), 5);
    });
});