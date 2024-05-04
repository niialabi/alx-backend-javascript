const sinon = require('sinon')
const sendPaymentRequestToApi = require('./3-payment')
const assert = require('assert');
const Utils = require('./utils');

describe('sendPaymentRequestToApi test', () => {
    it('testing ADD function -spy', () => {
        const spyName = sinon.spy(Utils, 'calculateNumber')

        sendPaymentRequestToApi(100, 20)
        sinon.assert.calledWith(spyName, 'SUM', 100, 20)
        sinon.assert.calledOnce(spyName)
        spyName.restore()
    })
})