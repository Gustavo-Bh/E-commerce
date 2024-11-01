const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:'); // ou sqlite:./database.sqlite

module.exports = sequelize;
