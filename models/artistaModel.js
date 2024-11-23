const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../dbConfig');

const Artista = sequelize.define(
    'Artista',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
          },
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        discos: {
            type: DataTypes.TEXT,
            allowNull: false,
            defaultValue: '',
        },
        genero: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        
    },

    {
        sequelize,
        modelName: 'Artista',
        tableName: 'artistas',
        timestamps: false,
    },
);

module.exports = Artista;
