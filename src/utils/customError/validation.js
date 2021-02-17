const http = require('http');
const _ = require('lodash');
const CONSTANTS = require('../../constants');
const CoreError = require('./core');

const HTTP_CODES = CONSTANTS.RESPONSES.CODES;
const HTTP_ERRORS = http.STATUS_CODES;

const VALIDATION_ERROR = CONSTANTS.RESPONSES.VALIDATION_ERROR;

const errorStatus = HTTP_CODES.UNPROCESSABLE_ENTITY;
const errorName = HTTP_ERRORS[errorStatus];

module.exports = class ValidationError extends CoreError {
  constructor(_ex) {
    const ex = _ex || {};
    const message = _.get(ex, 'details[0].message') || VALIDATION_ERROR;
    const details = (ex.details || []).map(el => {
      return {
        path   : el.path,
        message: el.message
      };
    });

    super(message || VALIDATION_ERROR);

    this.status = errorStatus;
    this.name = errorName;
    this.details = details;
  }

  get responsePayload() {
    return {
      name   : this.name,
      message: this.message,
      details: this.details
    };
  }
};
