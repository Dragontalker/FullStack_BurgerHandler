const express = require('express');
const exphbs = require('express-handlebars');

const Burger = require('./config/connection');

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