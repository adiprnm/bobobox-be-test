'use strict';
module.exports = (sequelize, DataTypes) => {
  const reservation = sequelize.define('reservation', {
    name: DataTypes.STRING,
    contact: DataTypes.STRING,
    hotel_name: DataTypes.STRING,
    hotel_location: DataTypes.STRING,
    room_type: DataTypes.STRING,
    room_description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    num_of_rooms: DataTypes.INTEGER,
    num_of_nights: DataTypes.INTEGER,
    promo_name: DataTypes.STRING,
    promo_description: DataTypes.STRING,
    discount: DataTypes.INTEGER,
    total_price: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {});
  reservation.associate = function(models) {
    // associations can be defined here
  };
  return reservation;
};