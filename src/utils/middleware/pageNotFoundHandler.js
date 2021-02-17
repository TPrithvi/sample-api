const { RESPONSES } = require('../../constants');
const { NotFoundError } = require('../customError');

/**
 * Page Not Found Middleware function
 *
 * @function
 * @param {object} req - The input request object
 * @param {object} res - The output response object
 * @param {function} next - The callback function used in middleware
 *
 */
// eslint-disable-next-line
module.exports = (req, res, next) => {
  res.status(RESPONSES.CODES.NOT_FOUND);

  if (req.accepts('json')) {
    return next(new NotFoundError(RESPONSES.PAGE_NOT_FOUND));
  }

  if (req.accepts('html')) {
    return res.send(RESPONSES.PAGE_NOT_FOUND);
  }

  res.type('txt');
  res.send(RESPONSES.PAGE_NOT_FOUND);
};
