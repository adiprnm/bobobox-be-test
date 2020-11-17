'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('promo_rules', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      promo_id: {
        type: Sequelize.INTEGER
      },
      min_night: {
        type: Sequelize.INTEGER
      },
      min_room: {
        type: Sequelize.INTEGER
      },
      checkin_day: {
        type: Sequelize.STRING(50)
      },
      booking_day: {
        type: Sequelize.STRING(50)
      },
      booking_hour_start: {
        type: Sequelize.TIME
      },
      booking_hour_end: {
        type: Sequelize.TIME
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('promo_rules');
  }
};