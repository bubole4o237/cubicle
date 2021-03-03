// const uniqId = require('uniqid');
const Cube = require('../models/cube');
const Accessory = require('../models/accessory');

// const fs = require('fs/promises');
// const path = require('path');
// let productData = require('../config/products.json');

async function getAllCubes(query) {
    // let result = Cube.getAll();
    // let result = productData.getAll();
    let result = await Cube.find({}).lean();

    // console.log(result);

    if (query.search) {
        result = result.filter(p => p.name.toLowerCase().includes(query.search.toLowerCase()));
    }

    if (query.from) {
        result = result.filter(p => Number(p.level) >= query.from);
    }

    if (query.to) {
        result = result.filter(p => Number(p.level) <= query.to);
    }

    return result;
}

function getOne(id) {
    // return productData.find(x => x.id == id);
    // return Cube.getOne(id);
    return Cube.findById(id).lean();
}

function createCube(data) {
    let cube = new Cube(data);
    //     data.name,
    //     data.description,
    //     data.imageUrl,
    //     data.difficultyLevel
    // );

    // console.log(cube);

    return cube.save();
    // productData.push(cube);

    // return fs.writeFile(
    //     path.join(__dirname, '/../config/products.json'),
    //     JSON.stringify(productData)
    // );

    // console.log(getAllCubes());
}


async function attachAccessory(productId, accessoryId) {
    let product = await Cube.findById(productId);
    let accessory = await Accessory.findById(accessoryId);

    // console.log(product);
    // console.log(accessory);

    product.accessories.push(accessory);
    console.log(product);
    return product.save();
}

module.exports = { createCube, getAllCubes, getOne, attachAccessory };