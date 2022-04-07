const { Model, DataTypes, TEXT, Sequelize } = require('sequelize');
const sequelize = require('../config/connection');

var moment = require('moment'); // require
moment().format();

class Experience extends Model { }

Experience.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    eq_id: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    feel_it: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      get() {
        return moment(this.getDataValue('created_at')).format('DD-MMM-YY h:mm:ss');
      }
    },
    updated_at: {
      type: DataTypes.DATE,
      get() {
        return moment(this.getDataValue('updated_at')).format('DD-MM-YYYY h:mm:ss');
      }
    }
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'experience',
  }
);

module.exports = Experience;

