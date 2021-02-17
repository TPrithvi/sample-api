const levee = require('levee');
const request = require('request');

const CIRCUIT_MAX_FAILURES = 3;
const CIRCUIT_TIMEOUT = 30000;
const CIRCUIT_RESET_TIMEOUT = 15000;
const is2xxRegex = /^2/;

// circuit breaker settings
const circuit = levee.createBreaker(request, {
  maxFailures : CIRCUIT_MAX_FAILURES,
  timeout     : CIRCUIT_TIMEOUT,
  resetTimeout: CIRCUIT_RESET_TIMEOUT
});

module.exports = (options) => {
  return new Promise((resolve, reject) => {
    circuit.run(options, (err, response, body) => {
      if (err) {
        return reject(err);
      }

      const is2xx = !err && is2xxRegex.test(`${response.statusCode}`);

      if (!is2xx) {
        return reject(body || new Error('Request error'));
      }

      return resolve({
        response,
        body
      });
    });
  });
};
