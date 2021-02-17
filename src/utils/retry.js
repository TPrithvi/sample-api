// Libraries
const request = require('request');
const async = require('async');

// Constants
const CONSTANTS = require('./../constants');

// Components
const errorHelper = require('./helpers/errorHelper');

/**
 * Call and retry the request with input retry options.
 *
 * @param requestOption
 * @param retryOption
 *
 * @param callback
 */
const retry = (requestOption, retryOption, callback) => {
    // set the default value for retry strategy...
    if (!retryOption.retryStrategy) {
        retryOption.retryStrategy = CONSTANTS.RETRY_STRATEGIES.ON_INTERNAL_SERVER_ERROR;
    }

    // determine the retry method...
    let method = requestOption.method || "get";

    // the retry logic...
    async.retry(retryOption, function (retryCallback) {
        request[method](requestOption, function (err, response) {
            if (!response) {
                // going to retry the request if the response is empty...
                return retryCallback(errorHelper.InternalServerError(err));
            }

            // determine if the request should be retried or not...
            let shouldRetry = errorHelper.shouldRetry(response.statusCode, retryOption.retryStrategy);

            // decide if we need to retry the request...
            if (shouldRetry) {
                retryCallback(errorHelper.InternalServerError());
            } else {
                retryCallback(null, response);
            }
        });
    }, (fatalError, response) => {
        if (fatalError) {
            // maximum number of retries are done...
            callback(errorHelper.handleRequestError(response));
        } else {
            let shouldRetry = errorHelper.shouldRetry(response.statusCode, retryOption.retryStrategy);

            if (shouldRetry) {
                callback(errorHelper.handleRequestError(response));
            } else {
                callback(null, JSON.parse(response.body));
            }
        }
    });
};

module.exports = retry;