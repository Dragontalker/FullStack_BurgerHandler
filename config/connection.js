const myseql = require('mysql');

class Database {
    constructor(config) {
        this.connection = mysql.createConnection( process.env.JAWSDB_URL ? process.env.JAWSDB_URL : config );
    }
};

