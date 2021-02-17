const joi = require('joi');
const _ = require('lodash');
const chai = require('chai');
const faker = require('faker');
const method = require('../validate');
const testUtils = require('../../../test/utils');

const expect = chai.expect;

describe(testUtils.getTestName(__filename), () => {
  it('validates successfully', function it() {
    const payload = {
      a    : faker.lorem.word(),
      c    : faker.lorem.word(),
      field: faker.random.number({ min: 1, max: 10 })
    };

    const schema = joi.object().keys({
      field: joi.number().integer().min(1).default(1)
    });

    const resultPromise = method(payload, schema);
    const expectedResult = _.omit(payload, ['a', 'c']);

    expect(resultPromise).eventually.deep.equal(expectedResult);
  });

  it('returns validation error', function it() {
    const payload = {
      field: faker.lorem.word()
    };
    const schema = joi.object().keys({
      field: joi.number().integer().min(1).default(1)
    });

    const promiseResult = method(payload, schema);

    expect(promiseResult).to.be.rejected;
  });
});
