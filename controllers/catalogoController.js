const { Op } = require('sequelize');
const Artista = require('../models/artistaModel');
const Disco = require('../models/discoModel'); 

async function buscarCatalogo(req, res) {
    const { categoria, titulo, nome, genero } = req.query;

    try {
        let resultados = [];
    
        const filtrosDisco = titulo ? { titulo: { [Op.like]: `%${titulo}%` } } : {};
        const filtrosArtista = nome ? { nome: { [Op.like]: `%${nome}%` } } : {};
    
        if (categoria === 'disco') {
            resultados = await Disco.findAll({
                where: {
                    [Op.and]: [
                        filtrosDisco,
                        genero ? { genero: { [Op.like]: `%${genero}%` } } : {}
                    ]
                }
            });
        } else if (categoria === 'artista') {
            resultados = await Artista.findAll({
                where: {
                    [Op.and]: [
                        filtrosArtista,
                        genero ? { genero: { [Op.like]: `%${genero}%` } } : {}
                    ]
                }
            });
        } else {
            const discos = await Disco.findAll();
            const artistas = await Artista.findAll();
            resultados = [...discos, ...artistas];
        }
    
        res.render('catalogo', { resultados, categoria, titulo, nome, genero });
    } catch (error) {
        console.error('Erro ao buscar catálogo:', error);
        res.status(500).send('Erro ao buscar catálogo.');
    }
}    

module.exports = { buscarCatalogo };
