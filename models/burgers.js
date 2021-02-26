const orm = require('../config/orm');

const burger = {
    name: 'burgers',

    listAll: async function() {
        const query = `SELECT * FROM ${this.name}`;
        console.log(query);
    },

    cookNew: async (burgerName) => {

    },

    devourThis: async (burgerID) => {

    }
};

// Test:
burger.listAll();

module.exports = burger;
