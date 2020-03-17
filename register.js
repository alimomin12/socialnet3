const router = require('express').Router();
let Regis = require('../models/register1.model');

router.route('/').get((req, res) => {
    Regis.find()
        .then(register => res.json(register))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/signup').post((req, res, next) => {
    const newUser = new Regis({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    });

    newUser.save()
        .then(() => res.json('User Added'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;