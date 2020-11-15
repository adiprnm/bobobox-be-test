const db = require('../models/index')
const HttpError = require('../errors/http')
const Promo = db['promo']

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
            } else {
                discount = promo.value
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
}

module.exports = PromoController