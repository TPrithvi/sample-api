const chai = require('chai');
const faker = require('faker');
const testUtils = require('../../../../test/utils');

const expect = chai.expect;

const CoreError = require('../core');

describe(testUtils.getTestName(__filename), () => {
  it('return custom error', function it() {
    const message = faker.lorem.sentence();
    const result = new CoreError(message);

    expect(result.message).to.be.eql(message);
    expect(result)
      .to.have.property('stack')
      .that.is.a('string')
      .and.not.empty;
  });

  it('return error with default message', function it() {
    const result = new CoreError();

    expect(result).to.have.property('logInfo');
    expect(result.logInfo).to.have.all.keys([
      'errorStatus',
      'name',
      'stack',
      'message'
    ]);

    expect(result).to.have.property('responsePayload');
    expect(result.responsePayload).to.have.all.keys(['name', 'message']);
  });
});
