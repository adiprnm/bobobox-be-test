const success = function(data, code = 200) {
    return {
        success: true,
        data: data,
        errors: null
    }
}

const error = function(errors, code = 500) {
    return {
        success: false,
        data: null,
        errors: errors
    }
}

module.exports = { success, error }