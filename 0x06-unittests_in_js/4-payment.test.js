const sinon = require('sinon')
const sendPaymentRequestToApi = require('./4-payment')
const { expect } = require('chai');
const Utils = require('./utils');

describe('sendPaymentRequestToApi test', () => {
    it('testing ADD function -stub', () => {
        const stubit = sinon.stub(Utils, 'calculateNumber')
        stubit.returns(10)
        const spyName2 = sinon.spy(console, 'log')

        sendPaymentRequestToApi(100, 20)
        sinon.assert.calledWith(stubit, 'SUM', 100, 20)
        sinon.assert.calledWith(spyName2, 'The total is: 10');
        stubit.restore()
        spyName2.restore()
    })
})