const chai = require('chai');
const logger = require('../logger');
const testUtils = require('../../../test/utils');

const expect = chai.expect;

/* eslint-disable no-console */
describe(testUtils.getTestName(__filename), () => {
  it('returns logger', function it() {
    expect(logger).to.have.all.keys(
      '_events',
      '_eventsCount',
      '_maxListeners',
      '_names',
      'data',
      'debug',
      'emitErrs',
      'error',
      'exceptionHandlers',
      'exitOnError',
      'filters',
      'help',
      'id',
      'info',
      'input',
      'level',
      'levels',
      'padLevels',
      'profilers',
      'prompt',
      'rewriters',
      'stripColors',
      'trace',
      'transports',
      'verbose',
      'warn'
    );
  });

  it('emits error', function () {
    const spy = this.sandbox.spy();
    const oldConsole = console.log;

    console.log = spy;

    logger.emit('error', 'test error');

    console.log = oldConsole;
  });
});
