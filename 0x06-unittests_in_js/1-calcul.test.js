const assert = require('assert')
const calculateNumber = require('./1-calcul')

describe('1-calcul unittests', function(){
    it('Checks SUM', function() {
        assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
    });
    it('Checks SUBTRACT', function() {
        assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });
    it('Checks DIVIDE', function() {
        assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });
    it('Checks ZERODIVISION', function() {
        assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
});