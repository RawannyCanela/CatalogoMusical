const express = require('express');
const router = express.Router();
const { buscarCatalogo } = require('../controllers/catalogoController');

router.get('/catalogo', buscarCatalogo);

module.exports = router;
