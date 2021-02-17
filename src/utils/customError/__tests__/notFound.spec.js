const http = require('http');
const chai = require('chai');
const faker = require('faker');
const testUtils = require('../../../../test/utils');
const CONSTANTS = require('../../../constants');

const HTTP_CODES = CONSTANTS.RESPONSES.CODES;
const HTTP_ERRORS = http.STATUS_CODES;
const expect = chai.expect;

const NotFoundError = require('../notFound');

describe(testUtils.getTestName(__filename), () => {
  it('return custom error', function it() {
    const message = faker.lorem.sentence();
    const result = new NotFoundError(message);

    expect(result).to.have.property('status');
    expect(result.status).to.be.eql(HTTP_CODES.NOT_FOUND);

    const expectedProps = {
      message,
      name: HTTP_ERRORS[HTTP_CODES.NOT_FOUND]
    };

    expect(result).to.deep.include(expectedProps);
  });

  it('return error with default message', function it() {
    const result = new NotFoundError();

    expect(result).to.have.property('status');
    expect(result.status).to.be.eql(HTTP_CODES.NOT_FOUND);

    const expectedProps = {
      name   : HTTP_ERRORS[HTTP_CODES.NOT_FOUND],
      message: HTTP_ERRORS[HTTP_CODES.NOT_FOUND]
    };

    expect(result).to.deep.include(expectedProps);
  });
});
