const Roles = require('../models/Rol');

const listar = async (req, res) => {
  try {
    const roles = await Roles.findAll();
    res.status(200).json(roles);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los roles' });
  }
};

module.exports = { listar };