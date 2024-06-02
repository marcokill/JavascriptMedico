const medicoService = require('../services/medicService');

const createMedic = async (req, res) => {
  try {
    const medico = await medicoService.createMedic(req.body);
    res.status(201).json(medico);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getMedics = async (req, res) => {
  try {
    const medicos = await medicoService.getMedics();
    res.status(200).json(medicos);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getMedicById = async (req, res) => {
  try {
    const medico = await medicoService.getMedicById(req.params.id);
    if (medico) {
      res.status(200).json(medico);
    } else {
      res.status(404).json({ error: 'Medico no encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateMedic = async (req, res) => {
  try {
    const medico = await medicoService.updateMedic(req.params.id, req.body);
    if (medico) {
      res.status(200).json(medico);
    } else {
      res.status(404).json({ error: 'Medico no encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const deleteMedic = async (req, res) => {
  try {
    const deleted = await medicoService.deleteMedic(req.params.id);
    if (deleted) {
      res.status(200).json({ success: true, message: 'Medico eliminado exitosamente' });
    } else {
      res.status(404).json({ error: 'Medico no encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = {
  createMedic,
  getMedics,
  getMedicById,
  updateMedic,
  deleteMedic
};
