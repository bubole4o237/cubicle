const Accessory = require('../models/accessory');

function create(data) {
    let accessory = new Accessory(data);

    return accessory.save();

};


function getAll() {
    let accessories = Accessory.find({}).lean();

    return accessories;
};


function getAllUnattached(ids) {
    return Accessory.find({ _id: { $nin: ids } }).lean();
}



module.exports = {
    create,
    getAll,
    getAllUnattached
};