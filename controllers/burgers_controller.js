const express = require('express');
const router = express.Router();
const db = require('../config/connection');
const Burger = require('../models/burgers');

// Get burger list
router.get('/', (req, res) => {
    Burger.findAll()
        .then(burger => {
            console.log(burger);
            res.sendStatus(200);
        })
        .catch(err => console.log(err));
});

// Add a burger
router.get('/add', (req, res) => {
    const data = {
        burger_name: 'Big Mac',
        devoured: true
    };

    let { burger_name, devoured } = data;

    // Insert into table
    Burger.create({
        burger_name: burger_name,
        devoured: devoured
    })
        .then(burger => res.redirect('/burgers'))
        .catch(err => console.log(err));

});

module.exports = router;