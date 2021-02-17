const ValidationError = require('./validation');
const BadRequestError = require('./badRequest');
const UnauthorizedError = require('./unauthorized');
const ForbiddenError = require('./forbidden');
const NotFoundError = require('./notFound');
const InternalError = require('./internal');

module.exports = {
  ValidationError,
  BadRequestError,
  UnauthorizedError,
  ForbiddenError,
  NotFoundError,
  InternalError
};
