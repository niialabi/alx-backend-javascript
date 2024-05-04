const sinon = require('sinon')
const sendPaymentRequestToApi = require('./4-payment')
const { expect } = require('chai');
const Utils = require('./utils');

describe('sendPaymentRequestToApi - 5', () => {
    let spyName
    beforeEach(() => {
        spyName = sinon.spy(console, 'log');
      });
    
      afterEach(() => {
        spyName.restore();
      });

      it('should log 120', () => {
        sendPaymentRequestToApi(100, 20)
        sinon.assert.calledWith(spyName, 'The total is: 120');
        sinon.assert.calledOnce(spyName)
      })
      
      it('should log 20', () => {
        sendPaymentRequestToApi(10, 10)
        sinon.assert.calledWith(spyName, 'The total is: 20');
        sinon.assert.calledOnce(spyName)
      })
})