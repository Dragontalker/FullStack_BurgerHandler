const Sequelize = require('sequelize');
require('dotenv').config()

const sequelize = new Sequelize('burgers_db', 'root', process.env.SQL_PASSWORD, {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    pool: {max: 5, min: 0, idel: 10000}
});

module.exports = sequelize;
