'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Link extends Model { 
    static associate(models) { }
  };
  
  Link.init({
    url: DataTypes.STRING,
    code: DataTypes.STRING,
    hits: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Link',
    timestamps: false
  });
  return Link;
};