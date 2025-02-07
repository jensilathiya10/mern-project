const mongoose = require("mongoose");

const cartschema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref : "users",
    },
    items: [
        {
            product:{type:mongoose.Schema.Types.ObjectId , ref:"products"},
            quantity:{type:Number,default:1},
            datetime:{
                type: Date,
                default: Date.now, 
              }
        }
    ]
})

const cart = mongoose.model("cart",cartschema);

module.exports = cart;