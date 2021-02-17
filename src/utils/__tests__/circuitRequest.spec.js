const chai = require('chai');
const testUtils = require('../../../test/utils');
const proxyquire = require('proxyquire');

const expect = chai.expect;

describe(testUtils.getTestName(__filename), () => {
  it('handle success response', function it() {
    const response = {
      statusCode: 200
    };
    const breakerStub = {
      run: (opt, cb) => cb(null, response, {})
    };

    const moduleStubs = {
      'levee': {
        createBreaker: () => breakerStub
      }
    };

    const stubbedMethod = proxyquire('../circuitRequest', moduleStubs);
    const resultPromise = stubbedMethod();

    expect(resultPromise).to.be.fulfilled;
  });

  it('handle error response', function it() {
    const response = {
      statusCode: 400
    };
    const breakerStub = {
      run: (opt, cb) => cb(null, response)
    };

    const moduleStubs = {
      'levee': {
        createBreaker: () => breakerStub
      }
    };

    const stubbedMethod = proxyquire('../circuitRequest', moduleStubs);
    const resultPromise = stubbedMethod();

    expect(resultPromise).to.be.rejected;
  });

  it('handles error', function it() {
    const breakerStub = {
      run: (opt, cb) => cb(new Error())

    };

    const moduleStubs = {
      'levee': {
        createBreaker: () => breakerStub
      }
    };

    const stubbedMethod = proxyquire('../circuitRequest', moduleStubs);
    const resultPromise = stubbedMethod();

    expect(resultPromise).to.be.rejected;
  });
});
