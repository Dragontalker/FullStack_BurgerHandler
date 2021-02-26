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
        const query = `UPDATE ${this.name} SET ${change} WHERE ${index}`;
        console.log(query);
    }
};

// Test:
const testApp = async() => {
    await burger.cookNew('Angus');
    console.log(await burger.listAll());
}

testApp();

burger.devourThis(3);

module.exports = burger;
