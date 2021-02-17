const joi = require('joi');

/**
 * Validate payload
 *
 * @function
 * @param {object} payload - Payload object
 * @param {object} schema - Joi schema object
 * @param {object} [customOptions] - Joi validation options
 * @throws Will throw an error if not pass validation.
 *
 */
module.exports = (payload, schema, customOptions) => {
  const defaultOptions = {
    abortEarly  : false,
    convert     : true,
    stripUnknown: { arrays: false, objects: true }
  };

  const validationOptions = {
    ...defaultOptions,
    ...customOptions
  };

  return new Promise((resolve, reject) => {
    joi.validate(payload, schema, validationOptions, (err, value) => {
      if (err) {
        reject(err);
      }

      resolve(value);
    });
  });
};
