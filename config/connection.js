const Sequelize = require('sequelize');
require('dotenv').config()

const sequelize = new Sequelize('burgers_db', 'root', process.env.SQL_PASSWORD, {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    pool: {max: 5, min: 0, idel: 10000}
});

const Burger = sequelize.define('burgers', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    burger_name: Sequelize.STRING,
    devoured: Sequelize.BOOLEAN,
    createdAt: {
        field: 'created_at',
        type: Sequelize.DATE
    },
    updatedAt: {
        field: 'updated_at',
        type: Sequelize.DATE
    }
});

module.exports = Burger;
