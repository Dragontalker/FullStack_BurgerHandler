const Sequelize = require('sequelize');
require('dotenv').config()

const sequelize = new Sequelize('burgers_db', 'root', process.env.SQL_PASSWORD, {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    pool: {max: 5, min: 0, idel: 10000}
});

const Burger = sequelize.define('burgers', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    burger_name: Sequelize.STRING,
    devoured: Sequelize.BOOLEAN,
    createdAt: {
        field: 'created_at',
        type: Sequelize.DATE
    },
    updatedAt: {
        field: 'updated_at',
        type: Sequelize.DATE
    }
});

Burger
    .sync({
        logging: console.log,
        force: true
    })
    .then(() => {
        console.log('Connection to database established successfully');
    })
    .catch(err => {
        console.error('Unable to connect to the database: ', err);
    });


// Test 
const main = async () => {
    const burgerList = await Burger.findAll({})
    
    console.log( `\n\n--------------------------` )
    burgerList.forEach( burger =>{
        console.log( `#${burger.id}: Burger: "${burger.burger_name}", Devour Status: ${burger.devoured}` );
    });

    sequelize.close()
};

main()