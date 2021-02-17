const CONSTANTS = require('../../constants');

// Utils
const logger = require('../logger');

// Exceptions
const BadRequestException = require('../customError/badRequest');
const InternalServerError = require('../customError/internal');
const NotFoundHttpException = require('../customError/notFound');
const UnauthorizedError = require('../customError/unauthorized');


/**
 * Accepts a response item from any request callback and then parses it into a custom error object (where applicable)
 *
 * @param response
 * @return {*}
 */
function handleRequestError(response) {
    if (this.isInternalServerError(response.statusCode)) {
        return generateInternalError();
    }

    const body = JSON.parse(response.body);

    if (response.statusCode === CONSTANTS.RESPONSES.CODES.BAD_REQUEST) {
        return generateBadRequestException(body.errors, body.message);
    }

    if (response.statusCode === CONSTANTS.RESPONSES.CODES.UNAUTHORIZED) {
        return generateUnauthorizedError(body.message);
    }

    if (response.statusCode === CONSTANTS.RESPONSES.CODES.NOT_FOUND) {
        return generateNotFoundException(body.message);
    }

    return generateInternalError();
}


/**
 * Creates a new instance of BadRequestException and attaches the errors param into the instance with the same name.
 *
 * @param message
 * @param errors
 * @returns {*}
 */
function generateBadRequestException(errors, message) {
    let badRequestInstance = new BadRequestException();
    badRequestInstance.errors = errors || [];

    if (message) {
        badRequestInstance.message = message;
    }

    delete badRequestInstance['isCustom'];

    return badRequestInstance;
}


/**
 *  Creates a new instance of NotFoundHttpException and attaches an error message (if any)
 *
 * @param message
 * @returns {*}
 */
function generateNotFoundException(message) {
    let notFoundError = new NotFoundHttpException();

    if (message) {
        notFoundError.message = message;
    }

    delete notFoundError['isCustom'];

    return notFoundError;
}


/**
 * Returns an instance of Internal Server Error
 *
 * @returns {*}
 */
function generateInternalError(error) {
    logger.error(error);

    let internalErrorInstance = new InternalServerError();

    delete internalErrorInstance['isCustom'];
    delete internalErrorInstance['_logStack'];

    return internalErrorInstance;
}


/**
 * Returns an instance of Unauthorized Error
 *
 * @param message
 * @return {*}
 */
function generateUnauthorizedError(message) {
    let unauthorizedError = new UnauthorizedError();

    if (message) {
        unauthorizedError.message = message;
    }

    delete unauthorizedError['isCustom'];

    return unauthorizedError;
}


/**
 * Returns an instance of Internal Server Error. If the error is due to a conflicting _id key insertion, then returns
 * a Bad Request (400) instead.
 *
 * @param error
 * @return {*}
 */
function generateMongooseError(error) {
    logger.error(error.message);

    let errorObject = new InternalServerError();

    // Intercepts mongo db conflict errors
    if (error.code) {
        if (error.code === CONSTANTS.MONGO_ERROR_CODE.DUPLICATE_KEY) {
            const conflictKey = error.errmsg.split('index:')[1].split("_ dup key")[0].trim();
            const errMsg = CONSTANTS.RESPONSES.SPECIAL_ERRORS.MONGO_DB_KEY_CONFLICT + " '" + conflictKey + "' must be unique";

            const errors = {};
            errors[conflictKey] = [errMsg];

            errorObject = generateBadRequestException(errors, errMsg);
        }
    }

    delete errorObject['isCustom'];
    delete errorObject['_logStack'];

    return errorObject;
}

/**
 * Determine if the input error code should be retried according to input retry strategy or not.
 *
 * @param errorCode
 * @param retryStrategies
 *
 * @returns {boolean}
 */
const shouldRetry = (errorCode, retryStrategies) => {
    let shouldRetry = false;

    // check for all retry strategies...
    retryStrategies.forEach(strategy => {
        // if the response code is fit into one of them then we should retry the request...
        // we must check the error code...
        if (parseInt(strategy / 100) === parseInt(errorCode / 100)) {
            shouldRetry = true;
        }
    });

    return shouldRetry;
};

/**
 * Check whether the input error code is related to an internal server error or not.
 *
 * @param errorCode
 *
 * @returns {boolean}
 */
function isInternalServerError(errorCode) {
    return errorCode >= 500 && errorCode < 600;
}

/**
 * Check whether the input error code is related to a bad request error or not.
 *
 * @param errorCode
 *
 * @returns {boolean}
 */
function isBadRequestError(errorCode) {
    return errorCode >= 400 && errorCode < 500;
}

module.exports = {
    BadRequestException: generateBadRequestException,
    NotFoundException: generateNotFoundException,
    InternalServerError: generateInternalError,
    UnauthorizedError: generateUnauthorizedError,
    MongooseError: generateMongooseError,
    handleRequestError: handleRequestError,
    isInternalServerError: isInternalServerError,
    isBadRequestError: isBadRequestError,
    shouldRetry: shouldRetry,
};