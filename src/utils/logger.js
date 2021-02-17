const winston = require('winston');

winston.cli();

/* eslint-disable no-magic-numbers */
const logger = new winston.Logger({
  levels: {
    trace  : 9,
    input  : 8,
    verbose: 7,
    prompt : 6,
    debug  : 5,
    info   : 4,
    data   : 3,
    help   : 2,
    warn   : 1,
    error  : 0
  },
  colors: {
    trace  : 'magenta',
    input  : 'grey',
    verbose: 'cyan',
    prompt : 'grey',
    debug  : 'blue',
    info   : 'blue',
    data   : 'grey',
    help   : 'cyan',
    warn   : 'yellow',
    error  : 'red'
  }
});
/* eslint-enable no-magic-numbers */

logger.add(winston.transports.Console, {
  level                          : process.env.NODE_ENV === 'production' ? 'info' : 'trace',
  colorize                       : true,
  handleExceptions               : false,
  humanReadableUnhandledException: true,
  json                           : false,
  prettyPrint                    : true,
  silent                         : false,
  timestamp                      : true
});

// eslint-disable-next-line
logger.on('error', (err) => console.log('Logger error:', err));

module.exports = logger;
