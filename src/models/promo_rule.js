'use strict';
module.exports = (sequelize, DataTypes) => {
  const promo_rule = sequelize.define('promo_rule', {
    promo_id: DataTypes.STRING,
    code: DataTypes.STRING,
    value: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {});
  promo_rule.associate = function(models) {
    // associations can be defined here
  };
  return promo_rule;
};