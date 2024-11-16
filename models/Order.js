const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    product: { ref: 'products', type: Schema.Types.ObjectId, required: true },
    quantity: { type: Number, required: true },
    user: { ref: 'users', type: Schema.Types.ObjectId, required: true },
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('orders', orderSchema);