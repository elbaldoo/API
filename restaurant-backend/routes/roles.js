const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const rolController = require('../controllers/rolController');
router.get('/roles', rolController.listar);

module.exports = router;