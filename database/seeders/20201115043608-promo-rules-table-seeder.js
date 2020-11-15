'use strict';
const moment = require('moment')

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('promo_rules', [{
      promo_id: 1,
      code: 'min_night',
      value: '3',
      createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
      updatedAt: moment().format("YYYY-MM-DD HH:mm:ss")
    }, {
      promo_id: 1,
      code: 'min_room',
      value: '2',
      createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
      updatedAt: moment().format("YYYY-MM-DD HH:mm:ss")
    }, {
      promo_id: 1,
      code: 'checkin_day',
      value: 'sun, sat',
      createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
      updatedAt: moment().format("YYYY-MM-DD HH:mm:ss")
    }, {
      promo_id: 1,
      code: 'booking_day',
      value: 'sun, sat',
      createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
      updatedAt: moment().format("YYYY-MM-DD HH:mm:ss")
    }, {
      promo_id: 1,
      code: 'booking_hour',
      value: '10:00:00 - 12:00:00',
      createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
      updatedAt: moment().format("YYYY-MM-DD HH:mm:ss")
    }, {
      promo_id: 2,
      code: 'min_night',
      value: '2',
      createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
      updatedAt: moment().format("YYYY-MM-DD HH:mm:ss")
    }, {
      promo_id: 2,
      code: 'min_room',
      value: '3',
      createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
      updatedAt: moment().format("YYYY-MM-DD HH:mm:ss")
    }, {
      promo_id: 2,
      code: 'checkin_day',
      value: 'sun, sat',
      createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
      updatedAt: moment().format("YYYY-MM-DD HH:mm:ss")
    }, {
      promo_id: 2,
      code: 'booking_day',
      value: 'sun, sat',
      createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
      updatedAt: moment().format("YYYY-MM-DD HH:mm:ss")
    }, {
      promo_id: 2,
      code: 'booking_hour',
      value: '13:00:00 - 16:00:00',
      createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
      updatedAt: moment().format("YYYY-MM-DD HH:mm:ss")
    }])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('promo_rules', null, {})
  }
};
