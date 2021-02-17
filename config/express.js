const express = require('express');
const handlebars = require('express-handlebars');

function setupExpress(app) {
    app.engine('hbs', handlebars({
        extname: 'hbs'
    }));
    
    app.set('view engine', 'hbs');
    app.use('/static', express.static('public'));
    app.use(express.urlencoded({
        extended: true
    }));
}

module.exports = setupExpress;