const Plato = require('../models/Plato');
const Categoria = require('../models/Categoria');
const Subcategoria = require('../models/Subcategoria');
const Alergeno = require('../models/Alergeno'); 

exports.listar = async (req, res) => {
  try {
    const { categoriaId, subcategoriaId } = req.query; // Cambiar nombres según la query
    const where = { eliminado: false };

    // Agrega filtros por categoriaId y subcategoriaId si están presentes en la query
    if (categoriaId) {
      where.categoria_id = categoriaId;
    }
    if (subcategoriaId) {
      where.subcategoria_id = subcategoriaId;
    }

    // Depuración: verifica el objeto where
    console.log('Filtros aplicados:', where);

    const platos = await Plato.findAll({
      where,
      include: [
        {
          model: Categoria,
          as: 'categoria',
          attributes: ['id', 'nombre']
        },
        {
          model: Subcategoria,
          as: 'subcategoria',
          attributes: ['id', 'nombre']
        }
      ]
    });

    // Procesa cada plato para reemplazar los IDs de alergenos por sus nombres
    const platosProcesados = await Promise.all(platos.map(async plato => {
      const platoObj = plato.toJSON();
      delete platoObj.categoria_id;
      delete platoObj.subcategoria_id;

      if (Array.isArray(platoObj.alergenos) && platoObj.alergenos.length > 0) {
        // Busca los nombres de los alergenos
        const alergenos = await Alergeno.findAll({
          where: { id: platoObj.alergenos },
          attributes: ['id', 'nombre']
        });
        // Reemplaza el array de IDs por el array de objetos
        platoObj.alergenos = alergenos.map(a => ({ id: a.id, nombre: a.nombre }));
      }

      return platoObj;
    }));

    res.json(platosProcesados);
  } catch (err) {
    console.error('Error al listar platos:', err);
    res.status(500).json({ error: 'Error al listar platos' });
  }
};

exports.crear = async (req, res) => {
  try {
    const plato = await Plato.create(req.body);
    res.status(201).json(plato);
  } catch (err) {
    res.status(400).json({ error: 'Error al crear plato' });
  }
};

exports.modificar = async (req, res) => {
  try {
    const plato = await Plato.findByPk(req.params.id);
    if (!plato || plato.eliminado) return res.status(404).json({ error: 'Plato no encontrado' });
    await plato.update(req.body);
    res.json(plato);
  } catch (err) {
    res.status(400).json({ error: 'Error al modificar plato' });
  }
};

exports.eliminar = async (req, res) => {
  try {
    const plato = await Plato.findByPk(req.params.id);
    if (!plato || plato.eliminado) return res.status(404).json({ error: 'Plato no encontrado' });
    await plato.update({ eliminado: true, usuario_modificacion: req.user.nombre_usuario });
    res.json({ mensaje: 'Plato eliminado lógicamente' });
  } catch (err) {
    res.status(500).json({ error: 'Error al eliminar plato' });
  }
};
