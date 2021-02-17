const http = require('http');
const faker = require('faker');
const chai = require('chai');
const logger = require('../../logger');
const CONSTANTS = require('../../../constants');
const testUtils = require('../../../../test/utils');
const method = require('../errorHandler');

const expect = chai.expect;

const HTTP_ERRORS = http.STATUS_CODES;
const HTTP_CODES = CONSTANTS.RESPONSES.CODES;

describe(testUtils.getTestName(__filename), () => {
  const customError = {
    status         : faker.random.number(),
    responsePayload: {
      name   : faker.lorem.word(),
      message: faker.lorem.word()
    },

    logInfo: {
      name : faker.lorem.word(),
      stack: faker.lorem.text()
    }
  };

  const req = {
    id: faker.lorem.word()
  };

  it('sends default payload', function it() {
    const requestId = req.id;
    const noop = this.custom.noop;
    const res = this.custom.res;
    const error = new Error('');
    res.send = this.sandbox.spy();
    logger.error = this.sandbox.spy();

    method(error, req, res, noop);

    const expectedLoggerArgs = {
      name   : error.name,
      message: error.message,
      stack  : error.stack,
      requestId
    };
    expect(logger.error).calledOnce.calledWith(expectedLoggerArgs);

    const defaultErrorResponse = {
      meta: {
        requestId,
        statusCode: HTTP_CODES.INTERNAL_SERVER_ERROR
      },

      error: {
        name   : HTTP_ERRORS[HTTP_CODES.INTERNAL_SERVER_ERROR],
        message: HTTP_ERRORS[HTTP_CODES.INTERNAL_SERVER_ERROR]
      }
    };
    expect(res.send).calledOnce.calledWith(defaultErrorResponse);
  });

  it('sends custom payload', function it() {
    const requestId = req.id;
    const noop = this.custom.noop;
    const res = this.custom.res;
    res.send = this.sandbox.spy();
    logger.error = this.sandbox.spy();

    method(customError, req, res, noop);

    expect(res.status).to.be.equal(customError.status);

    const expectedLoggerArgs = Object.assign({}, customError.logInfo, { requestId: req.id });
    expect(logger.error).calledOnce.calledWith(expectedLoggerArgs);

    const expectedResponseArgs = {
      error: customError.responsePayload,
      meta : {
        requestId,
        statusCode: customError.status
      }
    };

    expect(res.send).calledOnce.calledWith(expectedResponseArgs);
  });
});
