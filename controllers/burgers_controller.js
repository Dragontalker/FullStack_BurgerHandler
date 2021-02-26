const express = require('express');
const router = express.Router();
const Burger = require('../models/burgers');

// Get burger list
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




// Add a BigMac
// router.get('/bigmac', (req, res) => {
//     const data = {
//         burger_name: 'Big Mac',
//         devoured: true
//     };

//     let { burger_name, devoured } = data;

//     // Insert into table
//     Burger.create({
//         burger_name: burger_name,
//         devoured: devoured
//     })
//         .then(burger => res.redirect('/burgers'))
//         .catch(err => console.log(err));

// });

// // Add a QuarterPounder
// router.get('/quarterpounder', (req, res) => {
//     const data = {
//         burger_name: 'Quarter Pounder',
//         devoured: false
//     };

//     let { burger_name, devoured } = data;

//     // Insert into table
//     Burger.create({
//         burger_name: burger_name,
//         devoured: devoured
//     })
//         .then(burger => res.redirect('/burgers'))
//         .catch(err => console.log(err));

// });

// // Add a DoubleCheese
// router.get('/doublecheese', (req, res) => {
//     const data = {
//         burger_name: 'Double Cheese',
//         devoured: false
//     };

//     let { burger_name, devoured } = data;

//     // Insert into table
//     Burger.create({
//         burger_name: burger_name,
//         devoured: devoured
//     })
//         .then(burger => res.redirect('/burgers'))
//         .catch(err => console.log(err));

// });


module.exports = router;