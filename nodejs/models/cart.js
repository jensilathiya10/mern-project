const mongoose = require("mongoose");

const cartschema = mongoose.Schema({
    name:String,
    roll:Number,
    classe:String
})

const cart = mongoose.model("cart",cartschema);

module.exports = cart;