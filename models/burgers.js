const orm = require('../config/orm');

const burger = {
    name: 'burgers',

    listAll: async () => {
        const query = `SELECT * FROM ${this.name}`;
        console.log(query);
    },

    cookNew: async (burgerName) => {

    },

    devourThis: async (burgerID) => {

    }
};

module.exports = burger;
