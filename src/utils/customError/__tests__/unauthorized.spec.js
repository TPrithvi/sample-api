const http = require('http');
const chai = require('chai');
const faker = require('faker');
const testUtils = require('../../../../test/utils');
const CONSTANTS = require('../../../constants');

const HTTP_CODES = CONSTANTS.RESPONSES.CODES;
const HTTP_ERRORS = http.STATUS_CODES;
const expect = chai.expect;

const UnauthorizedError = require('../unauthorized');

describe(testUtils.getTestName(__filename), () => {
  it('return custom error', function it() {
    const message = faker.lorem.sentence();
    const result = new UnauthorizedError(message);

    expect(result).to.have.property('status');
    expect(result.status).to.be.eql(HTTP_CODES.UNAUTHORIZED);

    const expectedProps = {
      message,
      name: HTTP_ERRORS[HTTP_CODES.UNAUTHORIZED]
    };

    expect(result).to.deep.include(expectedProps);
  });

  it('return error with default message', function it() {
    const result = new UnauthorizedError();

    expect(result).to.have.property('status');
    expect(result.status).to.be.eql(HTTP_CODES.UNAUTHORIZED);

    const expectedProps = {
      name   : HTTP_ERRORS[HTTP_CODES.UNAUTHORIZED],
      message: HTTP_ERRORS[HTTP_CODES.UNAUTHORIZED]
    };

    expect(result).to.deep.include(expectedProps);
  });
});
