const http = require('http');
const CONSTANTS = require('../../constants');
const CoreError = require('./core');

const HTTP_CODES = CONSTANTS.RESPONSES.CODES;
const HTTP_ERRORS = http.STATUS_CODES;

/**
 * Custom Forbidden Error.
 * @extends Error
 */
module.exports = class ForbiddenError extends CoreError {
  /**
   * Create aa error.
   * @param {string} message - Error message.
   */
  constructor(message) {
    super(message);

    this.status = HTTP_CODES.FORBIDDEN;
    this.name = HTTP_ERRORS[this.status];
    this.message = this.message || HTTP_ERRORS[this.status];
  }
};
