const chai = require('chai');
const faker = require('faker');
const testUtils = require('../../../../test/utils');
const CONSTANTS = require('../../../constants');

const HTTP_CODES = CONSTANTS.RESPONSES.CODES;
const expect = chai.expect;

const InternalError = require('../internal');

describe(testUtils.getTestName(__filename), () => {
  it('return custom error', function it() {
    const error = {
      message: faker.lorem.sentence(),
      stack  : faker.lorem.sentence()
    };
    const result = new InternalError(error);

    expect(result).to.have.property('status');
    expect(result.status).to.be.eql(HTTP_CODES.INTERNAL_SERVER_ERROR);

    expect(result).to.have.property('logInfo');
    expect(result.logInfo).to.deep.eql(error);
  });

  it('return error with default message', function it() {
    const result = new InternalError();

    expect(result).to.have.property('status');
    expect(result.status).to.be.eql(HTTP_CODES.INTERNAL_SERVER_ERROR);

    const expectedLogInfo = {
      stack  : '',
      message: CONSTANTS.INTERNAL_SERVER_ERROR
    };
    expect(result).to.have.property('logInfo');
    expect(result.logInfo).to.deep.eql(expectedLogInfo);
  });
});
