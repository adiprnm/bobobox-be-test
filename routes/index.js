const { request } = require("express");
const response = require('../lib/response')
const router = require('express').Router()

// import routes
const promoRoutes = require('./promo')
const reservationRoutes = require('./reservation')

// register routes
router.use('/promo', promoRoutes)
router.use('/reservation', reservationRoutes)


router.get('/', (req, res) => {
    const result = response.success("Express Skeleton server is online!")
    res.json(result)
})

module.exports = router
