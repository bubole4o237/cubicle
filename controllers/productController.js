const { Router } = require('express');
const productService = require('../services/productService');
const validateProduct = require('./helpers/productHelpers');

const router = Router();

router.get('/', (req, res) => {
    let products = productService.getAllCubes();
    res.render('home', { title: 'Home page', products });
});

router.get('/create', (req, res) => {
    res.render('create', { title: 'Create' });
});

router.post('/create', validateProduct, (req, res) => {
    productService.createCube(req.body);

    // console.log(cube);

    res.redirect('/');
});

router.get('/details/:productId', (req, res) => {
    const productId = req.params.productId;
    
    let cube = productService.getOne(productId);
    
    res.render('details', { title: 'Product details', cube });
});

module.exports = router;