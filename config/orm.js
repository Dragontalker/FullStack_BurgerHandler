const db = require('./connection')('burgers_db', process.env.SQL_PASSWORD);
require('dotenv').config()

const orm = {
    async selectAll() {
        const query = 'SELECT * FROM burgers';
        const table = await db.query(query);
        return table;
    },

    async insertOne(newBurger) {
        const query = `INSERT INTO burgers (burger_name, devoured) VALUES ('${newBurger}, false)'`;
        await db.query(query);
    },

    async updateOne(burgerID) {
        const query = `UPDATE burgers SET devoured = true WHERE id = ${burgerID}`;
        await db.query(query);
    }
};

module.exports = orm;