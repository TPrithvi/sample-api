const express = require('express');
const consolidate = require('consolidate');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const config = require('../config');
const utils = require('./utils');

const {
  middleware: {
    requestId
  }
} = utils;
const app = express();

// configure CORS & headers
app.use(helmet());
//app.use(cors());

// add X-Request-Id header to each response
app.use(requestId());

// set up body & query parsers
app.use(bodyParser.json({ strict: false, limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: false }));

// set logger for requests
app.use(morgan('dev'));

// set up views
// set up views
app.engine('hbs', consolidate.handlebars);
app.set('view engine', 'hbs');
app.set('views', `${config.workingDirectory}src/views`);

// mount main router
app.use(require('./features/router'));

module.exports = app;
