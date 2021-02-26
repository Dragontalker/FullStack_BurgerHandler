const db = require('./connection')('burgers_db', process.env.SQL_PASSWORD);
require('dotenv').config()

const orm = {
    selectAll() {

    },

    insertOne() {

    },

    updateOne() {
        
    }
};

module.exports = orm;