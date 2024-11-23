'use strict';
const { DataTypes } = require('sequelize');

module.exports = {
 up: async (queryInterface, Sequelize) => {
  await queryInterface.createTable('discos', {
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
  ano: {
      type: DataTypes.DATE,
      allowNull: false,
  },
  imagem: {
      type: DataTypes.STRING,
      allowNull: false,
  },
  genero: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
},{
  modelName: 'Disco',
  tableName: 'discos',
  timestamps: false,
});
},

  down: async (queryInterface) => {
await queryInterface.dropTable('discos')
  }
};