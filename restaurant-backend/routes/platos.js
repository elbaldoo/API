const express = require('express');
const router = express.Router();
const platoController = require('../controllers/platoController');
const auth = require('../middleware/auth');

router.get('/', platoController.listar);
router.post('/', auth.verifyToken, platoController.crear);
router.put('/:id', auth.verifyToken, platoController.modificar);
router.delete('/:id', auth.verifyToken, platoController.eliminar);

module.exports = router;
