var logger = require('./lib/logger');

var __singleton;

var setupDefaultLogger = function(key, opts) {
    if (!(__singleton instanceof logger.Logger)) {
        __singleton = logger.createLogger(key, opts);
    }
    return __singleton;
};

module.exports = {
    createLogger: logger.createLogger,
    flushAll: logger.flushAll,
    cleanUpAll: logger.cleanUpAll,
    WinstonTransport: require('./lib/winston').WinstonTransport,
    BunyanStream: require('./lib/bunyan').BunyanStream,
    setupDefaultLogger: setupDefaultLogger
};
