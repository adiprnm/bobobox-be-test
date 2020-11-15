const db = require('../models/index')
const UserModel = db['user']

const getUsers = async function() {
    const users = await UserModel.findAll()
    
    return users
}

module.exports = { getUsers }