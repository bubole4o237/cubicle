const { Router } = require('express');
const productService = require('../services/productService');

const router = Router();

router.get('/', (req, res) => {
    res.render('home', { title: 'Home page' });
});

router.get('/create', (req, res) => {
    res.render('create', { title: 'Create' });
});

router.post('/create', (req, res) => {
    productService.createCube(req.body);

    // console.log(cube);

    res.redirect('/');
});

router.get('/details/:productId', (req, res) => {
    console.log(req.params.productId);
    res.render('details', { title: 'Product details' });
});

module.exports = router;