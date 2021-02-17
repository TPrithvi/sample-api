let winston = require('winston');
let logger = new (winston.Logger)({
    exceptionHandlers : [
        new (winston.transports.Console)({
            json : false,
            timestamp : true,
            humanReadableUnhandledException : true
        })
    ],

    exitOnError : false,
    levels : {
        trace : 0,
        input : 1,
        verbose : 2,
        prompt : 3,
        debug : 4,
        info : 5,
        data : 6,
        help : 7,
        warn : 8,
        error : 9
    },

    colors : {
        trace : 'magenta',
        input : 'grey',
        verbose : 'cyan',
        prompt : 'grey',
        debug : 'blue',
        info : 'blue',
        data : 'grey',
        help : 'cyan',
        warn : 'yellow',
        error : 'red'
    }

});

logger.add(winston.transports.Console, {
    humanReadableUnhandledException : true,
    level : 'error',
    prettyPrint : true,
    colorize : true,
    silent : false,
    timestamp : true
});

module.exports = logger;
