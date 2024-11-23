const { Sequelize } = require('sequelize');

const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'mysql',
    database: 'catalogomusical',
    dialect: 'mysql'
};

const sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
    host: dbConfig.host,
    dialect: dbConfig.dialect
});

async function initialize() {
    try {
        await sequelize.authenticate();
        console.log('Banco conectado.');
    } catch (error) {
        console.error('Não foi possível realizar conexão:', error);
        throw error;
    }
}

async function close() {
    try {
        await sequelize.close();
        console.log('Banco desconectado.');
    } catch (error) {
        console.error('Não foi possível finalizar conexão:', error);
    }
}

module.exports = {
    sequelize,
    initialize,
    close
};
