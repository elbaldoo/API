const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const auth = require('../middleware/auth');

router.get('/', auth.verifyToken, usuarioController.listar);
router.post('/', usuarioController.crear);
router.put('/:id', auth.verifyToken, usuarioController.modificar);
router.delete('/:id', auth.verifyToken, usuarioController.eliminar);

module.exports = router;
