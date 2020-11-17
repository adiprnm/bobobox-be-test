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
      min_night: 3,
      min_room: 2,
      checkin_day: 'sat, sun',
      booking_day: 'sat, sun',
      booking_hour_start: '10:00:00',
      booking_hour_end: '12:00:00',
      createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
      updatedAt: moment().format("YYYY-MM-DD HH:mm:ss")
    }, {
      promo_id: 2,
      min_night: 2,
      min_room: 3,
      checkin_day: 'sat, sun',
      booking_day: 'sat, sun',
      booking_hour_start: '13:00:00',
      booking_hour_end: '16:00:00',
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
