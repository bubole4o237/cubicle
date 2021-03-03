const validateProduct = function (req, res, next) {
    let isValid = true;
    let message = '';

    if (req.body.name.trim().length < 5) {
        isValid = false;
        message = 'The name length must be at least 5 characters long!'
    } else if (!req.body.description) {
        isValid = false;
        message = 'Description is missing!'
    } else if (!req.body.imageUrl) {
        isValid = false;
        message = 'Image url is missing!'
    }

    if (isValid) {
        next();
    } else {
        let err = new Error(message);
        // err.message = message;
        res.render('create', { err });
        // res.redirect('/product/create', 302, { err });
        // throw new Error(message);
        // let message = 'Invalid input';
        // res.render('create' , {message});
    }
};

module.exports = validateProduct;