const uniqId = require('uniqid');
const Cube = require('../models/cube');
const fs = require('fs');
let productData = require('../config/products.json');

function getAllCubes() {
    return productData;
}

function createCube(data) {
    let cube = new Cube(
        uniqId(),
        data.name,
        data.description,
        data.imageUrl,
        data.difficultyLevel
    );

    // console.log(cube);
    productData.push(cube);

    fs.writeFile(__dirname + '/../config/products.json', JSON.stringify(productData), (err) => {
        if (err) {
            console.log(err);
            return;
        }
    });

    // console.log(getAllCubes());
}


module.exports = { createCube, getAllCubes };