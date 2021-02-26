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
        const query = `INSERT INTO ${this.name} ${vars} VALUES ${data}`;
        console.log(query);
    },

    devourThis: async function(burgerID) {
        const change = 'devoured = true';
        const index = `id = ${burgerID}`;
        const query = `UPDATE ${this.name} SET ${change} WHERE ${index}`;
        console.log(query);
    }
};

// Test:
burger.listAll();
burger.cookNew('BigMac');
burger.devourThis(3);

module.exports = burger;
