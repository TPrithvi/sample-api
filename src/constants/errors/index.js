const ERROR_CONSTANTS = {
    MONGO_ERROR_CODE: {
        DUPLICATE_KEY: 11000
    },
    RETRY_STRATEGIES: {
        ON_INTERNAL_SERVER_ERROR: [500],
        ON_ANY_ERROR: [400, 500]
    }
};

module.exports = ERROR_CONSTANTS;