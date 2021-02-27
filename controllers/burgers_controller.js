const express = require('express');
const router = express.Router();
const Burger = require('../models/burgers');

router.get('/', (req, res) => {
    Burger.listAll()
        .then(data => {
            const hbsObj = { burgers: data };
            console.log(`Successfully get all the burgers.`);
            res.render('index', hbsObj);
        })
        .catch(err => console.log(err));
});

router.post('/api/cook', (req, res) => {
    Burger.cookNew(req.body.burger_name)
        .then(burger => console.log(`Successfuly cooked ${req.body.burger_name}!`))
        .catch(err => console.log(err));
});

router.get('/api/devour/:id', (req, res) => {
    Burger.devourThis(req.params.id)
         .then(burger => console.log(`Successfuly devoured ${req.body.id}!`))
         .catch(err => console.log(err));
    res.redirect('/');
});

module.exports = router;