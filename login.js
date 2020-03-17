const router = require('express').Router();
let Loger = require('../models/login1.model');

router.route('/').get((req, res) => {
    Loger.find()
        .then(login => res.json(login))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/logged', (req, res, next) => {
    const newUser = new Loger({
        username: req.body.username,
        password: req.body.password,
    });

    newUser.save()
        .then(() => res.json('User Signed In'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;