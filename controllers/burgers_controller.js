const express = require('express');
const router = express.Router();
const db = require('../config/connection');
const Burgers = require('../models/burgers');

router.get('/', (req, res) => {
    Burgers.findAll()
        .then(burger => {
            console.log(burger);
            res.sendStatus(200);
        })
        .catch(err => console.log(err));
});

module.exports = router;