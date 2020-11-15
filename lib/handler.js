const { errorResponse } = require('./response')
const { logError } = require('./logger')
const uuidv4 = require('uuid/v4')
const HttpError = require('../src/errors/http')

const handleError = (err, res) => {
    const { statusCode, message} = err instanceof HttpError ? err : new HttpError(500, "Internal Server Error")
    const errorUuid = uuidv4()
    
    logError(errorUuid, err.stack)

    const errorData = {
        uuid: errorUuid,
        message: message     
    }

    errorResponse(res, errorData, statusCode)
};

module.exports = { handleError }