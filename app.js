const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const medicoController = require('./controllers/medicController');
const sequelize = require('./config/database');

const app = express();

app.use(morgan('dev'));

app.use(bodyParser.json());

app.post('/medicos', medicoController.createMedic);
app.get('/medicos', medicoController.getMedics);
app.get('/medicos/:id', medicoController.getMedicById);
app.put('/medicos/:id', medicoController.updateMedic);
app.delete('/medicos/:id', medicoController.deleteMedic);

sequelize.sync()
  .then(() => {
    console.log('Base de datos sincronizado');
  })
  .catch(err => {
    console.error('Error al sincronizar base de datos:', err);
  });

module.exports = app;
