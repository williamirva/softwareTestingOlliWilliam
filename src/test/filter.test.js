import { expect } from 'chai';
import filter from "../filter.js";
describe('filter function', () => {
    it('should return an empty array', () => {
        const result = filter([], () => true);
        expect(result).to.deep.equal([[]]);
    });

    it('should filter products that are in discount', () => {
        const products = [
            { 'maksamakkara': 1, 'discount': true },
            { 'perunajauhot': 2, 'discount': false },
            { 'maito': 2.50, 'discount': true }
        ];

        const result = filter(products, ({ discount }) => discount);

        expect(result).to.deep.equal([
            { 'maksamakkara': 1, 'discount': true },
            { 'maito': 2.50, 'discount': true }
        ]);
    });

    it('should return a new array and not modify the original array', () => {
        const originalProducts = [
            { 'maksamakkara': 1, 'discount': true },
            { 'perunajauhot': 2, 'discount': false },
            { 'maito': 2.50, 'discount': true }
        ];
        const condition = (product) => {
            return Object.values(product).some(value => typeof value === 'number' && value <= 2);
        };
        const result = filter(originalProducts, condition);

        expect(result).to.deep.equal([{ 'maksamakkara': 1, 'discount': true },
            { 'perunajauhot': 2, 'discount': false }]);

        expect(originalProducts).to.deep.equal([{ 'maksamakkara': 1, 'discount': true },
            { 'perunajauhot': 2, 'discount': false },
            { 'maito': 2.50, 'discount': true }]);
    });
});