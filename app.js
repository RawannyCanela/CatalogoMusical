const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const multer = require('multer');
const { initialize, sequelize } = require('./dbConfig');
const artistaRoutes = require('./routes/artistaRoutes');
const discoRoutes = require('./routes/discoRoutes');
const catalogoRoutes = require('./routes/catalogoRoutes');
const upload = require('./config/multerConfig');
const app = express();


app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(express.static(path.join(__dirname, 'public')));

app.use(artistaRoutes);
app.use(discoRoutes);
app.use(catalogoRoutes);

//bd
async function initializeDatabase() {
    try {
        await initialize();
        await sequelize.sync();
        console.log('Banco de dados MySQL conectado com sucesso');
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error);
        process.exit(1); 
    }
}

app.get('/', (req, res) => res.render('index'));
app.get('/artista', (req, res) => res.render('artista'));
app.get('/disco', (req, res) => res.render('disco'));
app.get('/catalogo', (req, res) => res.render('catalogo'));

app.post('/disco', upload.single('imagem'), async (req, res) => {
    try {
        const { titulo, ano, faixa } = req.body;
        const imagem = req.file ? `/uploads/${req.file.filename}` : null;

        await Disco.create({ titulo, ano, imagem, faixa });
        res.redirect('/');
    } catch (error) {
        console.error('Erro ao criar disco:', error);
        res.status(500).send('Erro ao criar disco');
    }
});


const PORT = 3000;
app.listen(PORT, async () => {
    await initializeDatabase();
    console.log(`Servidor rodando na porta ${PORT}`);
});
