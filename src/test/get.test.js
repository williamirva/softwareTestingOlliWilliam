// Import the necessary libraries
import { expect } from 'chai';
import get from "../get.js";
describe('get function (e-commerce context)', () => {
    it('should get the price of a product', () => {
        const product = {
            id: 1,
            name: 'Bosch sauvasekoitin',
            price: 49.99,
            details: {
                category: 'Electronics',
                brand: 'Bosch',
            },
        };

        const result = get(product, 'price');
        expect(result).to.equal(49.99);
    });

    it('should get the brand of a product using an array path', () => {
        const product = {
            id: 1,
            name: 'Bosch sauvasekoitin',
            price: 49.99,
            details: {
                category: 'Electronics',
                brand: 'Bosch',
            },
        };

        const result = get(product, ['details', 'brand']);
        expect(result).to.equal('Bosch');
    });

    it('should return Out of stock if stock is undefined', () => {
        const product = {
            id: 2,
            name: 'Out of Stock Product',
            price: 29.99,
            stock: undefined,
        };

        const result = get(product, 'stock', 'Out of stock');
        expect(result).to.equal('Out of stock');
    });

    it('should return undefined for a property that does not exist', () => {
        const product = {
            id: 3,
            name: 'Product Without Details',
            price: 39.99,
        };

        const result = get(product, 'details.brand');
        expect(result).to.equal(undefined);
    });

    it('should handle null and undefined', () => {
        const result1 = get(null, 'price', 'N/A');
        const result2 = get(undefined, 'price', 'N/A');

        expect(result1).to.equal('N/A');
        expect(result2).to.equal('N/A');
    });
});