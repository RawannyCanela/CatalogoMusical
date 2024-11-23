const express = require('express');
const Artista = require('../models/artistaModel'); 
const { criarArtista, editarArtista, verArtista, deletarArtista, carregarPaginaArtista } = require('../controllers/artistaController');

const router = express.Router();


router.get('/artista', carregarPaginaArtista);
router.get('/editar-artista/:id', verArtista);
router.post('/artista', criarArtista);
router.post('/deletar-artista/:id', deletarArtista);
router.post('/editar-artista/:id', editarArtista);


module.exports = router;
