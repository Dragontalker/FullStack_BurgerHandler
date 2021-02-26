const Sequelize = require('sequelize');
const db = require('../config/connection');

const Burger = db.define('burgers', {
    burger_name: Sequelize.STRING,
    devoured: Sequelize.BOOLEAN
});

module.exports = Burger;
