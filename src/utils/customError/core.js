/**
 * Custom Core Error.
 * @extends Error
 */
module.exports = class CoreError extends Error {
  /**
   * Create aa error.
   * @param {string} message - Error message.
   */
  constructor(message) {
    super();

    this.message = message;
    this.isCustom = true;
  }

  /**
   * Get response payload.
   * @return {object} The response name and message.
   */
  get responsePayload() {
    return {
      name   : this.name,
      message: this.message
    };
  }

  /**
   * Get log information.
   * @return {object} The information to log.
   */
  get logInfo() {
    return {
      errorStatus: this.status,
      name       : this.name,
      message    : this.message,
      stack      : this.stack
    };
  }
};
