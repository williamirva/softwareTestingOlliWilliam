import { expect } from 'chai';
import capitalize from "../capitalize.js";

describe('capitalize function', () => {
    it('should capitalize the first character', () => {
        expect(capitalize('test')).to.equal('Test');
    });

    it('should lower case others but the first character', () => {
        expect(capitalize('TEST')).to.equal('Test');
    });

    it('should handle empty string', () => {
        expect(capitalize('')).to.equal('');
    });

    it('should handle integer input', () => {
        expect(capitalize(105)).to.equal('105');
    });

    it('should handle other characters', () => {
        expect(capitalize('!+-@.')).to.equal('!+-@.');
    });
});