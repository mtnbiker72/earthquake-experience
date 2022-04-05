const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Earthquake extends Model { }

Earthquake.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    magnitude: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    place: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    tsunami: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    lat: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    long: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    feel_it: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    updated_by: {
      type: DataTypes.TEXT,
      allowNull: true,
    },

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'earthquake',
  }
);

module.exports = Earthquake;

