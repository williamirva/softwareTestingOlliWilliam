import { expect } from 'chai';
import add from "../add.js";
describe('add function', () => {
    it('should do basic addition', () => {
        const result = add(1, 2);
        expect(result).to.equal(3);
    });

    it('should handle negative numbers', () => {
        const result = add(-7, 2);
        expect(result).to.equal(-5);
    });

    it('should handle decimal numbers', () => {
        const result = add(2.9, 3.7);
        expect(result).to.equal(6.6);
    });

    it('should handle zero', () => {
        const result1 = add(0, 1);
        const result2 = add(-1, 0);
        expect(result1).to.equal(1);
        expect(result2).to.equal(-1);
    });

    it('should handle large numbers', () => {
        const result = add(90000000001, 1);
        expect(result).to.equal(90000000002);
    });
});