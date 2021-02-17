const chai = require('chai');
const faker = require('faker');
const EventEmitter = require('events');
const method = require('../gracefulShutdown');
const testUtils = require('../../../test/utils');

const expect = chai.expect;

describe(testUtils.getTestName(__filename), () => {
  it('shutdown the server', function it() {
    const mockServer = new EventEmitter();
    mockServer.close = this.sandbox.stub();
    this.sandbox.stub(process, 'exit');

    method(mockServer);

    const mockConnection1 = Object.assign(new EventEmitter(), {
      remoteAddress: faker.lorem.word(),
      remotePort   : faker.random.number(),
      destroy      : this.sandbox.stub()
    });

    const mockConnection2 = Object.assign(new EventEmitter(), {
      remoteAddress: faker.lorem.word(),
      remotePort   : faker.random.number(),
      destroy      : this.sandbox.stub()
    });

    mockServer.emit('connection', mockConnection1);
    mockConnection1.emit('close');
    expect(mockConnection1.destroy).not.called;

    mockServer.emit('connection', mockConnection2);

    mockServer.shutdown();
    expect(mockConnection2.destroy).calledOnce;

    expect(mockServer.shutdown).to.exist;
  });
});
