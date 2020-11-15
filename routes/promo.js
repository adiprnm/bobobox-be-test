const router = require('express').Router()
const { successResponse } = require('../lib/response')

const PromoController = require('../src/controllers/promo_controller')
const promoController = new PromoController()

/**
 * Calculate routes
 */
router.post('/calculate', async (req, res, next) => {
    try {
        const result = await promoController.calculate(req.body);
    
        successResponse(res, result)
    } catch (error) {
        next(error)
    }
})

/**
 * Distribute promo routes
 */
router.post('/distribute', async (req, res, next) => {
    try {
        const result = await promoController.distribute(req.body);
    
        successResponse(res, result)
    } catch (error) {
        next(error)
    }
})

module.exports = router 