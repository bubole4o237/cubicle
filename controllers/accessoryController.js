const { Router } = require('express');
const router = Router();
const accessoryService = require('../services/accessoryService');

router.get('/create', (req, res) => {
    res.render('createAccessory')
});

router.post('/create', (req, res) => {
    console.log(req.body);

    accessoryService.create(req.body)
        .then(() => res.redirect('/product'))
        .catch((err) => {
            console.log(err);
            res.render('createAccessory', {err});
            // res.redirect('/accessory/create');
        });
});


module.exports = router;