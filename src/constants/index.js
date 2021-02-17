const COMMON = require('./common/index');
const RESPONSES = require('./responses/index');
const ERROR_CONSTANTS = require('./errors');

const CONSTANTS = {
    ...COMMON,
    ...ERROR_CONSTANTS,
    RESPONSES
};

module.exports = CONSTANTS;
