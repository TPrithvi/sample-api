const chai = require('chai');
const CONSTANTS = require('../../../constants');
const testUtils = require('../../../../test/utils');
const method = require('../pageNotFoundHandler');

const expect = chai.expect;

const ERROR_CODE = CONSTANTS.RESPONSES.CODES.NOT_FOUND;
const ERROR_MESSAGE = CONSTANTS.RESPONSES.PAGE_NOT_FOUND;

describe(testUtils.getTestName(__filename), () => {
  it('returns html', function it() {
    const res = this.custom.res;
    const next = this.custom.noop;
    const req = {
      accepts(data) {
        return data === 'html';
      }
    };

    method(req, res, next);

    expect(res.data).to.be.equal(ERROR_MESSAGE);
    expect(res.status).to.be.equal(ERROR_CODE);
  });

  it('returns json', function it() {
    const res = this.custom.res;
    const next = this.sandbox.spy(this.custom.noop);
    const req = {
      accepts(data) {
        return data === 'json';
      }
    };

    method(req, res, next);

    expect(next).to.be.calledOnce;
    expect(res.status).to.be.equal(ERROR_CODE);
  });

  it('returns text', function it() {
    const res = this.custom.res;
    const next = this.custom.noop;
    const req = {
      accepts() {
        return false;
      }
    };

    method(req, res, next);

    expect(res.data).to.be.equal(ERROR_MESSAGE);
    expect(res.status).to.be.equal(ERROR_CODE);
    expect(res.type).to.be.equal('txt');
  });
});
