const joi = require('joi');
const chai = require('chai');
const faker = require('faker');
const testUtils = require('../../../../test/utils');
const method = require('../validateRequest');

const expect = chai.expect;

describe(testUtils.getTestName(__filename), () => {
  const schema = joi.object().keys({
    field: joi.string().required()
  });

  it('returns middleware', function it() {
    const result = method(schema, 'body');

    expect(result).to.be.a('function');
  });

  it('throw error if source parameter is not valid', function it() {
    const notValidSource = 'wrongSource';

    expect(method.bind(null, schema, notValidSource)).to.throw();
  });

  it('validate body and put result to req.locals.body', async function it() {
    const middleware = method(schema, 'body');

    const req = {
      body: {
        field: faker.lorem.word()
      }
    };
    const res = {
      locals: {}
    };
    const next = this.sandbox.spy();

    await middleware(req, res, next);

    expect(res.locals.body).to.be.deep.eql(req.body);
    expect(next).to.be.calledOnce.and.calledWith();
  });

  it('call next with validation error', async function it() {
    const middleware = method(schema, 'body');

    const req = {
      body: {
        field: faker.random.number()
      }
    };
    const res = {
      locals: {}
    };
    const next = this.sandbox.spy();

    await middleware(req, res, next);

    expect(res.locals.body).to.be.undefined;
    expect(next.getCall(0).args[0]).to.be.instanceOf(Error);
  });
});
