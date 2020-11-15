const router = require('express').Router()

const UserController = require('../src/controllers/user')

const response = require('../src/lib/response')

router.get('/', async (req, res) => {
    const users = await UserController.getUsers();

    res.json(response.success(users))
})

module.exports = router