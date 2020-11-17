const db = require('../models/index')
const HttpError = require('../errors/http')
const Promo = db['promo']
const PromoDistribution = db['promo_distribution']
const moment = require('moment')

class PromoController
{
    /**
     * Calculate promo price
     * @param {Object} request 
     */
    async calculate(request) {
        let promo = await Promo.findOne({
            where: { id: request.promo_id }
        })

        if (!promo) {
            throw new HttpError(204, 'Promo not found!')
        }

        let newRooms = []
        let discount, discountPrice
        let promoPrice = 0, totalPrice = 0

        request.rooms.forEach(room => {
            // check promo type, P = Percentage, C = Cash
            if (promo.type == 'P') {
                discount = room.price * promo.value / 100
            } else if (promo.type == 'C') {
                discount = promo.value
            } else {
                discount = 0
            }
            
            discountPrice = room.price - discount

            promoPrice += discount
            totalPrice += discountPrice

            newRooms.push({...room, price: discountPrice})
        });

        return {
            rooms: newRooms,
            promo_price: promoPrice,
            final_price: totalPrice
        }
    }

    /**
     * Distribute promo quota
     * @param {Object} request 
     */
    async distribute(request) {
        let promo = await Promo.findOne({
            where: { id: request.promo_id }
        })

        if (!promo) {
            throw new HttpError(204, 'Promo not found!')
        }

        if (promo.is_distributed) {
            throw new HttpError(400, 'Promo has been distributed!')
        }

        let startDate = moment(request.start_date)
        let endDate = moment(request.end_date)
        let diff = endDate.diff(startDate, 'days')

        if (diff < 0) {
            throw new HttpError(400, 'start_date cannot be greater than end_date!')
        }

        let quotaPerDay = parseInt(promo.quota / (diff + 1))

        let date
        let distributions = [{
            promo_id: promo.id,
            date: moment(startDate).format("YYYY-MM-DD"),
            available: quotaPerDay,
            used: 0
        }]

        let totalQuota = quotaPerDay * (diff + 1)
        let remainingQuota = promo.quota - totalQuota
        
        for (let i = 1; i <= diff; i++) {
            date = startDate.add(1, 'days').format("YYYY-MM-DD")
            
            distributions.push({
                promo_id: promo.id,
                date: moment(date).format("YYYY-MM-DD"),
                available: quotaPerDay + (remainingQuota > 0 ? 1 : 0),
                used: 0
            })

            remainingQuota--
        }

        distributions = await PromoDistribution.bulkCreate(distributions)
        promo.is_distributed = true
        await promo.save()

        return distributions
    }
}

module.exports = PromoController