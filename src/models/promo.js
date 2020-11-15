'use strict';
module.exports = (sequelize, DataTypes) => {
  const promo = sequelize.define('promo', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    type: DataTypes.STRING,
    value: DataTypes.FLOAT,
    quota: DataTypes.INTEGER
  }, {});
  promo.associate = function(models) {
    // associations can be defined here
  };
  return promo;
};