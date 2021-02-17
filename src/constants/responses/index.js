module.exports = {
    DEFAULT_SUCCESS_MESSAGE: 'Success',
    PAGE_NOT_FOUND: 'Page Not Found',
    INTERNAL_SERVER_ERROR: 'Internal Server Error',
    VALIDATION_ERROR: 'Validation Error',
    IDENTITY_NOT_FOUND: 'No identity provided.',
    CODES: {
        OK: 200,
        CREATED: 201,
        DELETED: 200,
        BAD_REQUEST: 400,
        UNAUTHORIZED: 401,
        FORBIDDEN: 403,
        NOT_FOUND: 404,
        UNPROCESSABLE_ENTITY: 422,
        INTERNAL_SERVER_ERROR: 500
    },
    SPECIAL_ERRORS: {
        MONGO_DB_KEY_CONFLICT: "Duplicate key error.",
        DUPLICATE_KEY_IN_FORM: "Detected duplicate _ids in request. _ids must be unique."
    }
};
