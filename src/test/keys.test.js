import { expect } from 'chai';
import keys from "../keys.js";

describe('keys function', () => {
    it('should return names of products', () => {
        const obj = { maksamakkara: 10, perunajauhot: 20 };
        expect(keys(obj)).to.deep.equal(['maksamakkara', 'perunajauhot']);
    });

    it('should return empty array for empty object', () => {
        const obj = {};
        expect(keys(obj)).to.deep.equal([]);
    });

    it('should return product names for an array-like object', () => {
        const arrayLikeObj = { maksamakkara: '10', perunajauhot: '20', maito: 3 };
        expect(keys(arrayLikeObj)).to.deep.equal(['maksamakkara', 'perunajauhot', 'maito']);
    });

    it('should empty array like object', () => {
        const emptyArrayLikeObj = { };
        expect(keys(emptyArrayLikeObj)).to.deep.equal([]);
    });

    it('should handle integer input', () => {
        const nonObject = 105;
        expect(keys(nonObject)).to.deep.equal([]);
    });
});