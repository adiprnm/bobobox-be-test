const router = require('express').Router()
const { successResponse } = require('../lib/response')

const ReservationController = require('../src/controllers/reservation_controller')
const reservationController = new ReservationController()

/**
 * Get reservation promo routes
 */
router.get('/promo', async (req, res, next) => {
    try {
        const result = await reservationController.getPromo(req.query);
    
        successResponse(res, result)
    } catch (error) {
        next(error)
    }
})

/**
 * Do reservation routes
 */
router.post('/', async (req, res, next) => {
    try {
        const result = await reservationController.reserve(req.body);
    
        successResponse(res, result)
    } catch (error) {
        next(error)
    }
})


module.exports = router 