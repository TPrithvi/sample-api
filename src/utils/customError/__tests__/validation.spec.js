const chai = require('chai');
const faker = require('faker');
const testUtils = require('../../../../test/utils');
const CONSTANTS = require('../../../constants');

const HTTP_CODES = CONSTANTS.RESPONSES.CODES;
const VALIDATION_ERROR = CONSTANTS.RESPONSES.VALIDATION_ERROR;
const expect = chai.expect;

const ValidaionError = require('../validation');

describe(testUtils.getTestName(__filename), () => {
  it('return custom error', function it() {
    const error = {
      details: [
        {
          path   : faker.lorem.word(),
          message: faker.lorem.sentence()
        }
      ]
    };
    const result = new ValidaionError(error);

    expect(result).to.have.property('status');
    expect(result.status).to.be.eql(HTTP_CODES.UNPROCESSABLE_ENTITY);

    expect(result).to.have.property('message');
    expect(result.message).to.be.eql(error.details[0].message);

    const expectedKeys = [
      'name',
      'message',
      'details'
    ];
    expect(result).to.have.property('responsePayload');
    expect(result.responsePayload).to.be.have.all.keys(expectedKeys);
  });

  it('return error with default message', function it() {
    const result = new ValidaionError();

    expect(result).to.have.property('status');
    expect(result.status).to.be.eql(HTTP_CODES.UNPROCESSABLE_ENTITY);

    expect(result).to.have.property('message');
    expect(result.message).to.eql(VALIDATION_ERROR);
  });
});
