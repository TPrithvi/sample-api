const cacheControlMiddleware = require('./cacheControlMiddleware');
const errorHandler = require('./errorHandler');
const pageNotFoundHandler = require('./pageNotFoundHandler');
const requestId = require('./requestId');
const validateRequest = require('./validateRequest');

module.exports = {
  cacheControlMiddleware,
  errorHandler,
  pageNotFoundHandler,
  requestId,
  validateRequest
};
