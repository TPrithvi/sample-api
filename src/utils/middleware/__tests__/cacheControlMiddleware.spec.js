const faker = require('faker');
const chai = require('chai');
const testUtils = require('../../../../test/utils');
const method = require('../cacheControlMiddleware');

const expect = chai.expect;

describe(testUtils.getTestName(__filename), () => {
  it('sets header in case of Trident or Edge', function it() {
    const agent = faker.random.arrayElement(['Trident', 'Edge']);
    const res = this.custom.res;
    const next = this.sandbox.spy();
    res.header = this.sandbox.spy();
    const req = {
      headers: {
        'user-agent': agent
      }
    };

    method(req, res, next);

    expect(res.header).calledOnce;
    expect(next).calledOnce;
  });

  it('not sets header in other case', function it() {
    const agent = faker.lorem.words();
    const res = this.custom.res;
    const next = this.sandbox.spy();
    res.header = this.sandbox.spy();
    const req = {
      headers: {
        'user-agent': agent
      }
    };

    method(req, res, next);

    expect(res.header).not.called;
    expect(next).calledOnce;
  });
});
