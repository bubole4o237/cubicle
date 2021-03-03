// const fs = require('fs/promises');
// const path = require('path');
// let productData = require('../config/products.json');

const mongoose = require('mongoose');

const cubeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        maxlength: 50
    },
    imageUrl: {
        type: String,
        required: true,
        validation: /^https?/
    },
    difficultyLevel: {
        type: Number,
        required: true,
        min: 1,
        max: 6
    },
    accessories: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Accessory'
        }
    ]
});


// class Cube {
//     constructor(id, name, description, imageUrl, level) {
//         this.id = id;
//         this.name = name;
//         this.description = description;
//         this.imageUrl = imageUrl;
//         this.level = level;
//     }

//     save() {
//         productData.push(this);

//         return fs.writeFile(
//             path.join(__dirname, '/../config/products.json'),
//             JSON.stringify(productData)
//         );
//     }

//     static getAll() {
//         return productData;
//     }

//     static getOne(id) {
//         return productData.find(x => x.id == id);
//     }

// }


module.exports = mongoose.model('Cube', cubeSchema);