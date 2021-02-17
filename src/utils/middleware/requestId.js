const uuid = require('uuid');

/**
 * Returns middleware function, that appends request id to req object.
 * In case request contains X-Request-Id header, uses its value instead.
 *
 * @function
 * @param {object} [opt] - Options:
 * @param {string} [opt.uuidVersion="v4"] - version of uuid to use
 * @param {string} [opt.attributeName="id"] - indicates the attribute name used for the identifier on the request object
 * @param {string} [opt.headerName="X-Request-Id"] -  indicates the header name to use (defaults to X-Request-Id).
 * @param {boolean} [opt.setHeader=true] -  indicates that header should be added to response (defaults to true).
 *
 * @returns {function} The express "middleware-style" function.
 *
 */
module.exports = (opt = {}) => {
  if (opt && typeof opt !== 'object') {
    throw new Error('Options should be an object');
  }

  const {
    uuidVersion = 'v4',
    setHeader = true,
    headerName = 'X-Request-Id',
    attributeName = 'id'
  } = opt;

  return (req, res, next) => {
    req[attributeName] = req.header(headerName) || uuid[uuidVersion]();

    if (setHeader) {
      res.setHeader(headerName, req[attributeName]);
    }

    next();
  };
};
