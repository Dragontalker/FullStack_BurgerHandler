const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const Burger = require('./config/connection');

const app = express();

// Handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/burgers', require('./controllers/burgers_controller'));

const PORT = process.env.PORT || 3000;

Burger
    .sync({
        logging: console.log,
        force: true
    })
    .then(() => {
        console.log('Connection to database established successfully');
        app.listen(PORT, () => {
            console.log(`Server starts listening at port: ${PORT}....`);
        })
    })
    .catch(err => {
        console.error('Unable to connect to the database: ', err);
    });



