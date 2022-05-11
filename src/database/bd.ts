const sequelize = require('sequelize');

const DB_NAME = 'db_Elecciones_node';

const DB_USER = 'root';

const DB_PASS = '12345678';



export const database= new sequelize(
    DB_NAME,
    DB_PASS,
    DB_USER,

    {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    }
);

database.sync({force: false})
.then(function() {
    console.log('Base de datos creada correctamente...!!!')
})