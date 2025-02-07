const cart = require("../models/cart");
const users =require("../models/users");

const cartdata = async (req, res) => {
    if (req.user) {
        const cartdata = await users.findById(req.user._doc._id).select("cart").populate("cart.product");
        // console.log(cartdata.products)
        res.json({ cartdata:cartdata.cart })
    }
    else {
        res.status(401).json({
            error: "unauthorized"
        })
    }
}
const addproducttocart = async (req, res) => {
    if (req.user) {
        let user = await users.findById(req.user._doc._id)
        if(!user){
            return res.status(404).json({message:"user not found"})
        }
        await user.cart.push({product:req.body.product})
        user.save();
        const cartdata = await cart.find({});
        res.status(200).json({ cartdata })
    }
    else {
        res.status(401).json({
            error: "unauthorized"
        })
    }
}

module.exports = {cartdata,addproducttocart}