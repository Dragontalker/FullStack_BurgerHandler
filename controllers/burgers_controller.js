const express = require('express');
const router = express.Router();
const Burger = require('../models/burgers');

router.get('/api', (req, res) => {
    Burger.listAll()
        .then(burger => res.json(burger))
        .catch(err => console.log(err));
});

router.post('/api/cook', (req, res) => {
    Burger.cookNew(req.body.burger_name)
        .then(burger => console.log(`Successfuly cooked ${req.body.burger_name}!`))
        .catch(err => console.log(err));
});

router.put('/api/devour', (req, res) => {
    Burger.devourThis(req.body.id)
        .then(burger => console.log(`Successfuly devoured ${req.body.id}!`))
        .catch(err => console.log(err));
});

module.exports = router;