const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.render('home', {title: 'Home page'});
});

router.get('/create', (req, res) => {
    res.render('create', {title: 'Create'});
});

router.get('/details/:productId', (req, res) => {
    console.log(req.params.productId);
    res.render('details', {title: 'Product details'});
});

module.exports = router;