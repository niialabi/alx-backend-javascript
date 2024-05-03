const chai = require('chai');
const { expect } = chai;
const calculateNumber = require('./2-calcul_chai');

describe('1-calcul unittests', function(){
    it('Checks SUM -chai', function() {
        expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });
    it('Checks SUBTRAC chai', function() {
        expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });
    it('Checks DIVIDE chai', function() {
        expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });
    it('Checks ZERODIVISION chai', function() {
        expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
});
