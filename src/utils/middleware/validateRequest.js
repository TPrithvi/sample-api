const validate = require('../validate');
const { ValidationError } = require('../customError');

// eslint-disable-next-line
const validSource = ['body', 'query', 'params'];

/**
 * Returns middleware function, that validates source object from incoming req object.
 *
 * @function
 * @param {object} schema - Joi validation schema
 * @param {string} [source_="body"] - Source to validate. Should be one of ['body', 'query', 'params']
 *
 * @returns {function} The express "middleware-style" function.
 *
 */
module.exports = (schema, source_) => {
  const source = source_ || validSource[0];

  if (!validSource.includes(source)) {
    throw new Error(`"source" parameter should be one of: ${validSource}`);
  }

  return async function middleware(req, res, next) {
    const payload = req[source];

    let result;
    try {
      result = await validate(payload, schema);
    } catch (ex) {
      return next(new ValidationError(ex));
    }

    res.locals[source] = result;

    return next();
  };
};
