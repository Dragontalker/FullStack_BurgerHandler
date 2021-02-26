require('dotenv').config()
const db = require('./connection')('burgers_db', process.env.SQL_PASSWORD);

const orm = {
    async selectAll(tableName) {
        const query = `SELECT * FROM ${tableName}`;
        const table = await db.query(query);
        return table;
    },

    async insertOne(tableName, variableQuery, dataQuery) {
        const query = `INSERT INTO ${tableName} ${variableQuery} VALUES ${dataQuery}`;
        await db.query(query);
    },

    async updateOne(tableName, changeQuery, indexQuery) {
        const query = `UPDATE ${tableName} SET ${changeQuery} WHERE ${indexQuery}`;
        await db.query(query);
    }
};

module.exports = orm;