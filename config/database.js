/*
Lab 12 Ingenieria de Software
API Rest para la clase Medic
@Escobar Ruiz Marco Antonio
@version 1.0
@date 25/05/2024
*/
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database/sequelize.sqlite'
});

module.exports = sequelize;
