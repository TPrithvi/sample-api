const chai = require('chai');
const faker = require('faker');
const testUtils = require('../../../../test/utils');
const method = require('../requestId');

const expect = chai.expect;

describe(testUtils.getTestName(__filename), () => {
  it('returns addRequestId middleware', function it() {
    const result = method();

    expect(result).to.be.a('function');
  });

  it('sets generated id to headers and to req object', function it() {
    const options = {
      attributeName: 'id',
      headerName   : 'X-Request-Id',
      setHeader    : false
    };

    const middleware = method(options);

    const req = {
      header: () => null
    };
    const res = {
      setHeader: this.sandbox.spy(() => null)
    };
    const next = this.custom.noop;

    middleware(req, res, next);

    expect(req.id).to.be.not.empty;
    expect(res.setHeader).to.be.not.called;
  });

  it('sets "id" prop to req object taken from header', function it() {
    const options = {
      attributeName: 'id',
      headerName   : 'X-Request-Id',
      setHeader    : true
    };

    const middleware = method(options);

    const oldId = faker.lorem.word();
    const req = {
      header: () => oldId
    };
    const res = {
      setHeader: this.sandbox.spy(() => null)
    };
    const next = this.custom.noop;

    middleware(req, res, next);

    expect(req.id).to.be.eq(oldId);
    expect(res.setHeader).to.be.calledOnce;
  });

  it('throws an error', function it() {
    const result = method.bind(null, faker.lorem.word());

    expect(result).to.throw();
  });
});
