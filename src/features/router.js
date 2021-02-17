const path = require('path');
const express = require('express');
const utils = require('../utils');
const config = require('../../config');

const {
  errorHandler,
  pageNotFoundHandler
} = utils.middleware;

const {
  isApiAvailable
} = utils;

const router = express.Router();

router.get('/info', isApiAvailable);

router.use('/app', require('./helloWorld/router'));

// serve API documentation
if (config.exposeApiDocs) {
  const apidocDistDirectory = path.join(config.workingDirectory, 'apidoc', 'dist');
  router.use('/api-docs', express.static(apidocDistDirectory));
}

router.use(pageNotFoundHandler);
router.use(errorHandler);

module.exports = router;

