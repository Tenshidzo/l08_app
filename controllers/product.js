const Product = require('../models/Product');
const errorHandler = require('../utils/errorHandler');

module.exports.getAll = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (e) {
        errorHandler(res, 500, e);
    }
};

module.exports.getById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (product) {
            res.status(200).json(product);
        } else {
            errorHandler(res, 404, 'Product not found');
        }
    } catch (e) {
        errorHandler(res, 500, e);
    }
};

module.exports.create = async (req, res) => {
    try {
        const product = new Product({
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            imageSrc: req.body.imageSrc
        });
        await product.save();
        res.status(201).json(product);
    } catch (e) {
        errorHandler(res, 500, e);
    }
};

module.exports.update = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(product);
    } catch (e) {
        errorHandler(res, 500, e);
    }
};

module.exports.remove = async (req, res) => {
    try {
        await Product.deleteOne({ _id: req.params.id });
        res.status(200).json({ message: 'Product removed' });
    } catch (e) {
        errorHandler(res, 500, e);
    }
};