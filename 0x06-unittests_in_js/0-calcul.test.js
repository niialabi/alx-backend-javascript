const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
    it('checks whole numbers', function() {
        const result = calculateNumber(1, 3)
        assert.equal(result, 4);
    })
    it('checks whole and decimal', function() {
        const result = calculateNumber(1, 3.7)
        assert.equal(result, 5);
    })
    it('checks decimal and decimal', function() {
        const result = calculateNumber(1.2, 3.7)
        assert.equal(result, 5);
    })
    it('checks decimal2 and decimal2', function() {
        const result = calculateNumber(1.5, 3.7)
        assert.equal(result, 6);
    })
});