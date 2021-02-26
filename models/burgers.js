const orm = require('../config/orm');

const burger = {
    name: 'burgers',

    listAll: async function() {
        const result = await orm.selectAll(this.name);
        return result;
    },

    cookNew: async function(burgerName) {
        const vars = '(burger_name, devoured)';
        const data = `('${burgerName}', false)`;
        await orm.insertOne(this.name, vars, data);
    },

    devourThis: async function(burgerID) {
        const change = 'devoured = true';
        const index = `id = ${burgerID}`;
        await orm.updateOne(this.name, change, index);
    }
};

module.exports = burger;
