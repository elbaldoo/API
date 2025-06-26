const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Alergeno = db.define('Alergeno', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nombre: { type: DataTypes.STRING, allowNull: false }
});

module.exports = Alergeno;