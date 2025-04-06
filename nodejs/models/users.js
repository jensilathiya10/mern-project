const mongoose = require("mongoose");

const userschema = mongoose.Schema({
  name: String,
  roll: Number,
  classe: String,
  cart: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      quantity: { type: Number, default: 1 },
      model: { type: String }
    },
  ],
})

const users = mongoose.model("user", userschema);

module.exports = users;