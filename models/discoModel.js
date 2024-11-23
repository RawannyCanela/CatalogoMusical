const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../dbConfig');

const Disco = sequelize.define(
    'Disco',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
          },
        titulo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        genero: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        ano: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        imagem: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        
    },

    {
        sequelize,
        modelName: 'Disco',
        tableName: 'discos',
        timestamps: false,
    },
);

module.exports = Disco;