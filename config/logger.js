const appRoot = require('app-root-path');
const { combine, timestamp, label, printf } = require('winston').format;

const myFormat = printf(({message, timestamp }) => {
    return `${timestamp}: ${message}`;
});

const config = {
    file: {
        level: 'error',
        filename: `${appRoot}/log/error.log`,
        handleExceptions: true,
        format: combine(
            timestamp(),
            myFormat
        ),
        maxsize: 5242880,
        maxFiles: 5,
        colorize: false,
    },
    console: {
        level: 'debug',
        handleExceptions: true,
        json: false,
        colorize: true,
    },
};

module.exports = config