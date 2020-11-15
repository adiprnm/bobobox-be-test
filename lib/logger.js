const winston = require('winston')
const loggerConfig = require('../config/logger')

// init logger
const logger = winston.createLogger({
    transports: [
        new winston.transports.File(loggerConfig.file),
    ]
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console(loggerConfig.console));
}

const logError = (errorUuid, stackTrace) => {
    const formattedError = `[${errorUuid}] ${stackTrace}`

    logger.error(formattedError)
}

module.exports = { logError }