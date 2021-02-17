const faker = require('faker');
const chai = require('chai');
const testUtils = require('../../../test/utils');
const CONSTANTS = require('../../constants');

const HTTP_CODES = CONSTANTS.RESPONSES.CODES;
const DEFAULT_SUCCESS_MESSAGE = CONSTANTS.RESPONSES.DEFAULT_SUCCESS_MESSAGE;

const expect = chai.expect;

const method = require('./../responseSender');

describe(testUtils.getTestName(__filename), () => {
  describe('sendSuccess', () => {
    it('sends default payload and meta', function it() {
      const res = this.custom.res;
      const payload = {};
      const meta = {};

      method.sendSuccess(res, payload, meta);

      expect(res.data).to.be.eql({
        payload: {},
        meta   : {
          message: DEFAULT_SUCCESS_MESSAGE
        }
      });
      expect(res.status).to.be.equal(HTTP_CODES.OK);
    });

    it('sends custom payload and meta', function it() {
      const res = this.custom.res;
      const payload = {
        data: faker.lorem.word()
      };
      const meta = {
        message: faker.lorem.word()
      };

      method.sendSuccess(res, payload, meta);
      const expectedResult = {
        meta,
        payload
      };

      expect(res.data).to.be.eql(expectedResult);
      expect(res.status).to.be.equal(HTTP_CODES.OK);
    });
  });

  describe('sendOk', () => {
    it('sends default ok response', function it() {
      const res = this.custom.res;

      method.sendOk(res);

      expect(res.data).to.be.eql({
        payload: {},
        meta   : {
          message: DEFAULT_SUCCESS_MESSAGE
        }
      });
      expect(res.status).to.be.equal(HTTP_CODES.OK);
    });
  });
});
