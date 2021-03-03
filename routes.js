const { Router } = require('express');
const router = Router();
const aboutController = require('./controllers/aboutController');
const productController = require('./controllers/productController');
const accessoryController = require('./controllers/accessoryController');


router.use('/about', aboutController);
router.use('/product', productController);
router.use('/accessory', accessoryController);
router.use('*', (req, res) => {
    res.render('404');
});

module.exports = router;