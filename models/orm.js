const Sequelize = require('sequelize');
const db = require('./config/connection')

const Burger = db.define('burgers', {
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
