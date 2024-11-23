const express = require('express');
const router = express.Router();
const multer = require('multer');
const Disco = require('../models/discoModel'); 
const path = require('path');
const { criarDisco, editarDisco, verDisco, deletarDisco } = require('../controllers/discoController');


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads/');  
    },
    filename: (req, file, cb) => {
        const uniqueName = Date.now() + path.extname(file.originalname);
        cb(null, uniqueName);  
    }
});

const upload = multer({ storage });

router.get('/editar-disco/:id', verDisco);  
router.post('/editar-disco/:id', upload.single('imagem'), editarDisco);  
router.post('/deletar-disco/:id', deletarDisco); 
router.post('/disco', upload.single('imagem'), criarDisco);  


module.exports = router;
