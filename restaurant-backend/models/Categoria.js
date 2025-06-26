const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Categoria = db.define('Categoria', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nombre: { type: DataTypes.STRING, allowNull: false }
});

module.exports = Categoria;