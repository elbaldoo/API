const express = require('express');
const router = express.Router();
const categoriaController = require('../controllers/categoriaController');

// Ruta para listar todas las categorías
router.get('/categorias', categoriaController.listarCategorias);

// Ruta para listar todas las subcategorías
router.get('/subcategorias', categoriaController.listarSubcategorias);

module.exports = router;