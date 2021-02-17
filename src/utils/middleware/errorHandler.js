const http = require("http");
const _ = require("lodash");
const logger = require("../logger");
const CONSTANTS = require("../../constants");

const HTTP_ERRORS = http.STATUS_CODES;
const HTTP_CODES = CONSTANTS.RESPONSES.CODES;

const defaultErrorResponse = {
  meta: {
    statusCode: HTTP_CODES.INTERNAL_SERVER_ERROR
  },

  error: {
    name: HTTP_ERRORS[HTTP_CODES.INTERNAL_SERVER_ERROR],
    message: HTTP_ERRORS[HTTP_CODES.INTERNAL_SERVER_ERROR]
  }
};

const getErrorLogInfo = err => {
  // if CustomError take logInfo object
  if (err.logInfo) {
    return err.logInfo;
  } else {
    // in other case log actually error
    return {
      name: err.name,
      message: err.message,
      stack: err.stack
    };
  }
};

const getRequestLogInfo = req => {
  return {
    id: req.id,
    url: req.url,
    method: req.method,
    query: JSON.stringify(req.query),
    body: JSON.stringify(req.body),
    headers: JSON.stringify(req.headers)
  };
};

/**
 * Error handler middleware
 *
 * @function
 * @param {object} err - The error object
 * @param {object} req - The input request object
 * @param {object} res - The output response object
 * @param {function} next - The callback function used in middleware
 *
 */
// eslint-disable-next-line
module.exports = (err, req, res, next) => {
    const requestId = req.id;
    const reqInfo = getRequestLogInfo(req);
    const errInfo = getErrorLogInfo(err);
    const logObject = Object.assign({}, errInfo, {requestId});
    const status = err.status || HTTP_CODES.INTERNAL_SERVER_ERROR;

    logger.error(logObject, reqInfo);

    const errObj = Object.assign({}, err);

    delete errObj.isCustom;

    if (!errObj.message) {
        errObj.message = errObj.name;
    }

    errObj.errors = errObj.errors || [];

    res.status(status).send(errObj);
};
