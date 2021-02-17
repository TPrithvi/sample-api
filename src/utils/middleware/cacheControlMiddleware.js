/**
 * Middleware function that prevents caching in IE and Edge
 *
 * @function
 * @param {object} req - The input request object
 * @param {object} res - The output response object
 * @param {function} next - The callback function used in middleware
 *
 */
module.exports = (req, res, next) => {
  const browser = req.headers['user-agent'];

  if ((/Trident/).test(browser) || (/Edge/).test(browser)) {
    const key = 'Cache-Control';
    const value = 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0';

    res.header(key, value);
  }

  next();
};
