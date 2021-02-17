const _ = require('lodash');
const CONSTANTS = require('../constants');

const HTTP_CODES = CONSTANTS.RESPONSES.CODES;
const DEFAULT_SUCCESS_MESSAGE = CONSTANTS.RESPONSES.DEFAULT_SUCCESS_MESSAGE;

const defMeta = {
  message: DEFAULT_SUCCESS_MESSAGE
};

const defPayload = {};

/**
 * Send success response
 *
 * @function
 * @param {object} res - Express res object
 * @param {object} payload_ - Payload to send
 * @param {object} [meta_] - Meta data to send.
 * @param {number} [status_] - Response status.
 *
 */
const sendSuccess = (res, payload_, meta_, status_) => {
  const payload = _.merge({}, defPayload, payload_);
  const meta = _.merge({}, defMeta, meta_);
  const status = status_ || HTTP_CODES.OK;

  const response = {
    meta,
    payload
  };

  res.status(status).send(response);
};

/**
 * Send default success response
 *
 * @function
 * @param {object} res - Express res object
 * @param {string} [message] - Custom message.
 *
 */
const sendOk = (res, message) => {
  sendSuccess(res, {}, { message });
};

module.exports = {
  sendOk,
  sendSuccess
};
