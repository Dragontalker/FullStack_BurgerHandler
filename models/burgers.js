const orm = require('../config/orm');

const burger = {
    name: 'burgers',

    listAll: async function() {
        const query = `SELECT * FROM ${this.name}`;
        console.log(query);
    },

    cookNew: async function(burgerName) {
        const vars = '(burger_name, devoured)';
        const data = `('${burgerName}', false)`;
        const query = `INSERT INTO ${this.name} ${vars} VALUES ${data}`;
        console.log(query);
    },

    devourThis: async (burgerID) => {

    }
};

// Test:
burger.listAll();
burger.cookNew('BigMac');

module.exports = burger;
