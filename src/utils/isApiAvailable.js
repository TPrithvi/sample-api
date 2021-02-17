const responseSender = require('./responseSender');
const packageJson = require('../../package.json');

/**
 * Is API Available method
 * Allows you to check server health info
 *
 * @function
 * @param {object} req - The input request object
 * @param {object} res - The output response object
 *
 */
module.exports = (req, res) => {
  responseSender.sendSuccess(res, {
    running: true,
    name   : packageJson.name
  });
};
