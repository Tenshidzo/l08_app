const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, default: '' },
    imageSrc: { type: String, default: '' },
});

module.exports = mongoose.model('products', productSchema);
