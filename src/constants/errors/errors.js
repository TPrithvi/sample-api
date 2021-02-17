module.exports = {
    BAD_GOOGLE_RESP       : 'Bad response from Google Direction API',
    BUNDLING_PROCESS      : 'Bundling is currently in process',
    NOT_ALLOWED_BUNDLE    : 'Bundle not allowed within ',
    NO_ORDERS             : 'Not found orders to fit in specify delivery time',
    NO_GOOGLE_PATH_TIME   : 'Do not get Google Path Time',
    NO_GOOGLE_SORTED_ORDER: 'Do not get Google Sorted Orders Info',
    ERR                   : 'Internal Server Error',
    MAP_ROUTE_NOT_FOUND   : 'Can\'t build route with specified params',
    PERMISSION_DENIED     : 'Permission denied',
    NOT_FOUND: 'Request not found',
    BAD_REQUEST   : 'Some data isn\'t valid',
    NO_ROAMER_REQUEST_FOUND: 'There is no roamer request found!',
    DRIVER_ID_DIFFERENT: 'Driver ids are different!',
    PARSING_SERVICE_RESPONSE_DATA_ERROR: 'An error occurs when parsing service response data',
    NO_RUN_FOUND: 'There is no run found!',
    NO_REQUEST_FOUND: 'Request id not found!',
    REQUEST_NOT_VALID: 'Request not valid!',

    ERROR: function (status, message, invalidObj) {
        let err = new Error();
        let errors = [];
        let keys;
        let len;
        let i;

        err.message = message || this.ERR;
        err.status = status || 500;

        if (invalidObj) {
            keys = Object.keys(invalidObj);
            for (i = 0, len = keys.length; i < len; i++) {
                errors = errors.concat(invalidObj[keys[i]]);
            }
        }
        err.errors = errors;

        return err;
    }
};
