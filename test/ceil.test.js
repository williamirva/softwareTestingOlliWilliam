import { expect } from 'chai';
import ceil from "../src/ceil.js";
describe('ceil function', () => {
    it('should round up to the nearest integer', () => {
        expect(ceil(1.045)).to.equal(2);
    });

    it('should round up to two decimals precision', () => {
        expect(ceil(1.007, 2)).to.equal(1.01);
    });

    it('should round up to nearest thousand', () => {
        expect(ceil(1010, -3)).to.equal(2000);
    });

    it('should round up to nearest hundred', () => {
        expect(ceil(1010, -2)).to.equal(1100);
    });
});