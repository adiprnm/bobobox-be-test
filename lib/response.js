const successResponse = (res, data, code = 200) => {
    const memoryUsage = process.memoryUsage().heapUsed / 1024 / 1024

    const response = {
        code: code,
        success: true,
        data: data,
        errors: null
    }

    if (process.env.NODE_ENV == 'development') {
        response.meta = {
            serverMemoryUsage:  `${memoryUsage.toFixed(2)} MB`
        }
    }

    res.status(200).json(response)
}

const errorResponse = function(res, errors, code = 500) {
    const memoryUsage = process.memoryUsage().heapUsed / 1024 / 1024
    
    const response = {
        code: code,
        success: false,
        data: null,
        errors: errors
    }

    if (process.env.NODE_ENV == 'development') {
        response.meta = {
            serverMemoryUsage:  `${memoryUsage.toFixed(2)} MB`
        }
    }

    res.status(200).json(response)
}

module.exports = { successResponse, errorResponse }