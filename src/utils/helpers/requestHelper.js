// Libraries
const _ = require('lodash');
const validate = require('validate.js');
const sanitize = require('mongo-sanitize');


/**
 * Sanitizes a JSON object (form) based on validator object (validators)
 *
 * @param form
 * @param validators
 * @return {*}
 */
function sanitizeForm(form, validators) {
    return !validators ? {} : _.pick(sanitize(form), Object.keys(validators));
}


/**
 * Validates a JSON object (form) based on validator object (validators)
 *
 * @param form
 * @param validators
 * @return {*}
 */
function validateForm(form, validators) {
    return !validators ? {} : validate(form, validators);
}


module.exports = {
    sanitizeForm,
    validateForm
};