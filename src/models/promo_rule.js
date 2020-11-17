'use strict';
module.exports = (sequelize, DataTypes) => {
  const promo_rule = sequelize.define('promo_rule', {
    promo_id: DataTypes.STRING,
    min_night: DataTypes.INTEGER,
    min_room: DataTypes.INTEGER,
    checkin_day: DataTypes.STRING,
    booking_day: DataTypes.STRING,
    booking_hour_start: DataTypes.TIME,
    booking_hour_end: DataTypes.TIME
  }, {});
  promo_rule.associate = function(models) {
    // associations can be defined here
  };
  return promo_rule;
};