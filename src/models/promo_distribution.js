'use strict';
module.exports = (sequelize, DataTypes) => {
  const promo_distribution = sequelize.define('promo_distribution', {
    promo_id: DataTypes.INTEGER,
    date: DataTypes.DATE,
    available: DataTypes.INTEGER,
    used: DataTypes.INTEGER
  }, {});
  promo_distribution.associate = function(models) {
    // associations can be defined here
  };
  return promo_distribution;
};