const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    image: String,
    category:String,
    modelsfor:[String]
});

module.exports = mongoose.model("Product", ProductSchema);
