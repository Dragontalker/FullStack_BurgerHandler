const db = require('./connection')('burgers_db', process.env.SQL_PASSWORD);
require('dotenv').config()

const orm = {
    selectAll() {
        const table = db.query('SELECT * FROM burgers');
        return table;
    },

    insertOne() {

    },

    updateOne() {

    }
};

module.exports = orm;