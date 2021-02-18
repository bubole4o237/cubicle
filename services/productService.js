const uniqId = require('uniqid');
const Cube = require('../models/cube');
const fs = require('fs/promises');
const path = require('path');
let productData = require('../config/products.json');

function getAllCubes() {
    return productData;
}

function getOne(id) {
    return productData.find(x => x.id == id);
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

    return fs.writeFile(
        path.join(__dirname, '/../config/products.json'),
        JSON.stringify(productData)
    );

    // console.log(getAllCubes());
}


module.exports = { createCube, getAllCubes, getOne };