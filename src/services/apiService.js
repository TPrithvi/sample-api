const CONSTANTS = require('../constants/index');
const CONFIG = require('../../config/index');
const ERRORS = require('../constants/errors');
const async = require('async');
const request = require('request');
const _ = require('lodash');
const logger = require('../utils/helpers/logger');

/**
 * This service is responsible for all API calls and retry logic in this micro-service.
 */
const apiService = function () {

    /**
     * Shared options used by retry logic.
     *
     * @returns {{times: *, interval: *}}
     */
    this.getRetryOptions = function () {
        return {
            times: CONFIG.retryCount,
            interval: CONFIG.retryInterval,
        };
    };

    /**
     * Get request options.
     *
     * @param url
     * @param headers
     * @param method
     * @param body
     * @param qs
     * @param json
     *
     * @returns {{headers: *, json: *, url: *}}
     */
    this.getRequestOptions = function (url, headers, method = CONSTANTS.REQUEST_METHOD.GET, body = null, qs = null, json = true) {
        headers[CONSTANTS.HEADER.CONTENT_TYPE] = CONSTANTS.HEADER.CONTENT_TYPE_APP_JSON;
        headers = _.pick(headers, _.values(CONSTANTS.HEADER));
        let options = {url, headers, json, method};

        if (body) {
            options.body = body;
        }

        if (qs) {
            options.qs = qs;
        }

        return options;
    };

    /**
     * Request with retry logic with custom response handler.
     *
     * @param requestOptions
     * @param responseHandler
     * @param cb
     */
    this.requestWithRetry = function ({requestOptions, responseHandler = null}, cb) {
        const handler = responseHandler || this.responseHandler;

        async.retry(this.getRetryOptions(), retryCb => {
            let url = requestOptions.url || "-";

            request(requestOptions, (error, response) => {
                let statusCode = response ? response.statusCode || 500 : 500;
                let method = requestOptions.method || "-";

                logger.info(`${method} request to: ${url} - ${statusCode}`);

                if (error) {
                    logger.error(error);
                }

                handler(error, response, retryCb);
            });
        }, cb);
    };

    /**
     * Default retry logic response handler.
     *
     * @param error
     * @param response
     * @param cb
     */
    this.responseHandler = function (error, response, cb) {
        if (!response) {
            cb(ERRORS.ERR);
        } else if (response.statusCode >= 500) {
            cb(response.body);
        } else {
            cb(error, response.body);
        }
    }
};

module.exports = new apiService();
