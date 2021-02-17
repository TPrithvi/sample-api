const http = require('http');
const CONSTANTS = require('../../constants');
const CoreError = require('./core');

const HTTP_CODES = CONSTANTS.RESPONSES.CODES;
const HTTP_ERRORS = http.STATUS_CODES;

module.exports = class UnauthorizedError extends CoreError {
  constructor(message) {
    super(message);

    this.status = HTTP_CODES.UNAUTHORIZED;
    this.name = HTTP_ERRORS[this.status];
    this.message = message || this.message || HTTP_ERRORS[this.status];
  }
};
