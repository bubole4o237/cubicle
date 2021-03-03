const { Router } = require('express');
const productService = require('../services/productService');
const accessoryService = require('../services/accessoryService');
const validateProduct = require('./helpers/productHelpers');

const router = Router();

router.get('/', (req, res) => {
    productService.getAllCubes(req.query)
        .then(products => {
            // console.log(products);
            res.render('home', { title: 'Home page', products });

        })
        .catch(() => res.status(500).end());

});

router.get('/create', (req, res) => {
    res.render('create', { title: 'Create' });
});

router.post('/create', validateProduct, async (req, res) => {
    // productService.createCube(req.body)
    //     .then(() => res.redirect('/product'))
    //     .catch(() => res.status(500).end());

    try {
        await productService.createCube(req.body);
        console.log(req.body);
        res.redirect('/product');
    } catch (err) {
        console.log(err);
        res.status(500).end();
    }

});

router.get('/details/:productId', async (req, res) => {
    const productId = req.params.productId;

    let cube = await productService.getOne(productId);

    res.render('details', { title: 'Product details', cube });
});


router.get('/:productId/attach', async (req, res) => {
    const productId = req.params.productId;

    let cube = await productService.getOne(productId);
    let accessories = await accessoryService.getAll();

    // console.log(cube.accessories);

    res.render('attachAccessory', { title: 'Attach accessory', cube, accessories });

});


router.post('/:productId/attach', async (req, res) => {
    let productId = req.params.productId;
    let accessory = req.body.accessory;

    productService.attachAccessory(productId, accessory)
        .then(() => res.redirect(`/product/details/${productId}`));

    // let cube = await productService.getOne(productId);
    // let arrayAccessories = cube.accessories;
    // arrayAccessories.push(accessory);
    // cube.accessories = arrayAccessories;

    // console.log(cube);

    // res.redirect('/product');
});

module.exports = router;