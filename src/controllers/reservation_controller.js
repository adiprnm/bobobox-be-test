const db = require('../models/index')
const HttpError = require('../errors/http')
const moment = require('moment')
const { Op } = require('sequelize')

const Promo = db['promo']
const PromoRule = db['promo_rule']
const PromoDistribution = db['promo_distribution']
const Reservation = db['reservation']

class ReservationController
{
    /**
     * Get promo
     * @param {Object} request 
     */
    async getPromo(request) {
        let numOfNights = request.num_of_nights
        let numOfRooms = request.num_of_rooms
        let checkinDate = moment(request.checkin_time).format('YYYY-MM-DD')
        let checkinDay = moment(request.checkin_time).format('ddd').toLowerCase()
        let bookingDay = moment(request.booking_time).format('ddd').toLowerCase()
        let bookingTime = moment(request.booking_time).format('HH:mm:ss')

        const promoRules = await PromoRule.findAll({
            where: {
                min_night: { [Op.lte]: numOfNights },
                min_room: { [Op.lte]: numOfRooms },
                checkin_day: { [Op.like]: `%${checkinDay}%` },
                booking_day: { [Op.like]: `%${bookingDay}%` },
                booking_hour_start: { [Op.lte]: bookingTime },
                booking_hour_end: { [Op.gte]: bookingTime },
            }
        })

        let promoId = promoRules.map(function(promoRule) {
            return promoRule.promo_id
        })

        const promoDistributions = await PromoDistribution.findAll({
            where: {
                promo_id: { [Op.in]: promoId },
                date: checkinDate,
                available: { [Op.gt]: 0 }
            }
        })

        promoId = promoDistributions.map(function(PromoDistribution) {
            return PromoDistribution.promo_id
        })

        const promo = await Promo.findAll({
            where: {
                id: { [Op.in]: promoId }
            },
            attributes: ['id', 'title', 'description', 'type', 'value']
        })

        return promo
    }

    /**
     * Do reservation
     * @param {Object} request 
     */
    async reserve(request) {
        let checkinDate = moment(request.checkin_time).format('YYYY-MM-DD')

        let promoDistribution = await PromoDistribution.findOne({
            where: { 
                promo_id: request.promo_id,
                date: checkinDate,
                available: { [Op.gt]: 0 }
            },
        })

        if (!promoDistribution) {
            throw new HttpError(204, 'Promo is not available!')
        }

        let promo = await Promo.findOne({
            where: { id: request.promo_id }
        })

        if (!promo) {
            throw new HttpError(204, 'Promo not found!')
        }

        let discount
        if (promo.type == 'P') {
            discount = request.price * promo.value / 100            
        } else if (promo.type == 'C') {
            discount = promo.value
        } else {
            discount = 0
        }

        discount = discount * request.num_of_rooms

        delete request.promo_id

        let reservation = await Reservation.create({
            ...request,
            discount: discount,
            promo_name: promo.title,
            promo_description: promo.description,
            total_price: (request.num_of_rooms * request.num_of_nights * request.price) - discount,
            status: 'NEW'
        })

        promoDistribution.available -= 1
        promoDistribution.used += 1

        await promoDistribution.save()

        return reservation
    }
}

module.exports = ReservationController