const Medico = require('../models/medic');

const createMedic = async (data) => {
  return await Medico.create(data);
};

const getMedics = async () => {
  return await Medico.findAll();
};

const getMedicById = async (id) => {
  return await Medico.findByPk(id);
};

const updateMedic = async (id, data) => {
  const medico = await getMedicById(id);
  if (medico) {
    return await medico.update(data);
  }
  return null;
};

const deleteMedic = async (id) => {
  const medico = await getMedicById(id);
  if (medico) {
    return await medico.destroy();
  }
  return null;
};

module.exports = {
  createMedic,
  getMedics,
  getMedicById,
  updateMedic,
  deleteMedic
};
