import { expect } from 'chai';
import isEmpty from "../src/isEmpty.js";

describe('isEmpty function (e-commerce context)', () => {
    it('should return true for an empty cart (empty array)', () => {
        const emptyCart = [];
        const result = isEmpty(emptyCart);
        expect(result).to.equal(true);
    });

    it('should return false for a non-empty cart (non-empty array)', () => {
        const nonEmptyCart = [
            { id: 1, name: 'Product A', price: 19.99, quantity: 2 },
            { id: 2, name: 'Product B', price: 29.99, quantity: 1 },
        ];

        const result = isEmpty(nonEmptyCart);
        expect(result).to.equal(false);
    });

    it('should return true for an empty set of favorite products (empty Set)', () => {
        const emptyFavorites = new Set();
        const result = isEmpty(emptyFavorites);
        expect(result).to.equal(true);
    });
});