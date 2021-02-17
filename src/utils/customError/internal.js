const http = require('http');
const CONSTANTS = require('../../constants');
const CoreError = require('./core');

const INTERNAL_SERVER_ERROR_MESSAGE = CONSTANTS.INTERNAL_SERVER_ERROR;
const HTTP_CODES = CONSTANTS.RESPONSES.CODES;
const HTTP_ERRORS = http.STATUS_CODES;

/* eslint-disable no-underscore-dangle */
module.exports = class InternalError extends CoreError {
  constructor(ex = {}) {

    super(ex.message || INTERNAL_SERVER_ERROR_MESSAGE);

    this.status = HTTP_CODES.INTERNAL_SERVER_ERROR;
    this.name = HTTP_ERRORS[this.status];
    this.message = INTERNAL_SERVER_ERROR_MESSAGE;

    this._logMessage = ex.message || this.message;
    this._logStack = ex.stack || '';
  }

  get logInfo() {
    return {
      message: this._logMessage,
      stack  : this._logStack
    };
  }
};
/* eslint-disable no-underscore-dangle */
