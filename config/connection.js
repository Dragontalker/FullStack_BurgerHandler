const Sequalize = require('sequalize');
require('dotenv').config()

const sequalize = new Sequalize('burgers_db', 'root', process.env.SQL_PASSWORD, {
    host: 'localhost',
    port: 3306,
    dialect: mysql,
    pool: {max: 5, min: 0, idel: 10000}
});