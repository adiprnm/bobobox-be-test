'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('reservations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(100)
      },
      contact: {
        type: Sequelize.STRING(100)
      },
      hotel_name: {
        type: Sequelize.STRING(50)
      },
      hotel_location: {
        type: Sequelize.STRING(100)
      },
      checkin_time: {
        type: Sequelize.DATE
      },
      room_type: {
        type: Sequelize.STRING
      },
      room_description: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      num_of_rooms: {
        type: Sequelize.INTEGER
      },
      num_of_nights: {
        type: Sequelize.INTEGER
      },
      promo_name: {
        type: Sequelize.STRING
      },
      promo_description: {
        type: Sequelize.STRING
      },
      discount: {
        type: Sequelize.INTEGER
      },
      total_price: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('reservations');
  }
};