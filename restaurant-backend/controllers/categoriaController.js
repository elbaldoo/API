const Categoria = require('../models/Categoria');
const Subcategoria = require('../models/Subcategoria');

exports.listarCategorias = async (req, res) => {
  try {
    console.log('Iniciando consulta de categorías...');
    const categorias = await Categoria.findAll({
      attributes: ['id', 'nombre']
    });
    console.log('Consulta exitosa. Categorías obtenidas:', categorias);
    res.json(categorias);
  } catch (err) {
    console.error('Error al listar categorías:', err);
    res.status(500).json({ error: 'Error al listar categorías' });
  }
};

// Servicio para listar todas las subcategorías
exports.listarSubcategorias = async (req, res) => {
  try {
    const subcategorias = await Subcategoria.findAll({
      attributes: ['id', 'nombre', 'categoria_id']
    });
    res.json(subcategorias);
  } catch (err) {
    console.error('Error al listar subcategorías:', err);
    res.status(500).json({ error: 'Error al listar subcategorías' });
  }
};

// Servicio para crear una nueva subcategoría
exports.crearSubcategoria = async (req, res) => {
  try {
    const { nombre, categoria_id } = req.body;
    if (!nombre || !categoria_id) {
      return res.status(400).json({ error: 'Faltan datos requeridos' });
    }
    const nuevaSubcategoria = await Subcategoria.create({ nombre, categoria_id });
    res.status(201).json(nuevaSubcategoria);
  } catch (err) {
    console.error('Error al crear subcategoría:', err);
    res.status(500).json({ error: 'Error al crear subcategoría' });
  }
};