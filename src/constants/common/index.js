const COMMON_CONSTANTS = {
    AUTH_KEYS: {
        USER_IDENTITY       : 'x-consumer-custom-id',
        ACCESS_TOKEN        : 'access-token',
        CONTENT_TYPE        : 'Content-Type',
        APPLICATION_ID      : 'application-id',
        APPLICATION_NAME    : 'application-name',
        IOS_VERSION         : 'ios-version',
        ANDROID_VERSION     : 'android-version',
        SECRET_AUTHORIZATION: 'secret-authorization',
        AUTHORIZATION       : 'Authorization'
    },
    VISIBILITY_TYPE: {
        PRIVATE: 'private',
        PUBLIC: 'public'
    },

    DEFAULT_EVENT_DELAY: 30, // one day in seconds
    REVIEW_SHOULD_PUBLIC_AFTER: 1, // review should marked as public after days
    DEFAULT_PAGINATION_LIMIT: 5, // Items per page
    DEFAULT_PAGINATION_START: 1, // Pagination will start from
    REVIEW_SHOULD_NOT_EDIT_AFTER: 7, // review should not update after x days

    HEADER: {
        USER_ID              : 'x-consumer-custom-id', // "X-Consumer-Custom-ID"
        ACCESS_TOKEN         : 'access-token',
        APPLICATION_ID       : 'application-id',
        CONTENT_TYPE         : 'content-type',
        CONTENT_TYPE_APP_JSON: 'application/json',
        SERVICE_TOKEN        : 'service-token',
        AUTHORIZATION        : 'Authorization',
    },
    REQUEST_METHOD: {
        POST: 'POST',
        GET: 'GET',
        DELETE: 'DELETE',
        PATCH: 'PATCH',
    },
    LOG_STATUS: {
        WAITING: 'waiting',
        COMPLETED: 'completed',
        ABORTED_AFTER_MAX_TRIES: 'aborted_after_max_tries',
        ABORTED_AFTER_RESULT_ERROR: 'aborted_after_result_error',
    },
    SEARCH_TYPE: {
        // Assumes that the query param is separable and queries on exploded string. Default delimiter is ","
        WITHIN: 'search_within',

        // Will match the query param value exactly
        MATCH: 'search_match',

        // Will liken the query param value. This rule accept regex options.
        REGEX: 'search_regex'
    },
    LOCATION_STATE_TYPE: {
        AT_STORE: 'atStore',
        DELIVERING: 'delivering'
    },
};

module.exports = COMMON_CONSTANTS;
