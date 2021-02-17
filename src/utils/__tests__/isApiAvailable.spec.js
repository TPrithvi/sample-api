const chai = require('chai');
const CONSTANTS = require('../../constants');
const testUtils = require('../../../test/utils');
const method = require('../isApiAvailable');

const RESPONSES = CONSTANTS.RESPONSES;

const expect = chai.expect;

describe(testUtils.getTestName(__filename), () => {
  it('responds with correct status and message', function it() {
    const res = this.custom.res;
    const req = {};

    method(req, res);

    expect(res.status).to.be.equal(RESPONSES.CODES.OK);
    expect(res.data.meta).to.be.eql({ message: RESPONSES.DEFAULT_SUCCESS_MESSAGE });
  });
});
