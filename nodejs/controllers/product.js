const Product = require("../models/Product");

const getproduct = async (req, res) => {
    try {
        if (req.params.id) {
            const products = await Product.findById(req.params.id);
            res.json(products);
        }
        else {
            const products = await Product.find({});
            res.json(products);
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
module.exports = {getproduct}