const cart = require("../models/cart");
const users = require("../models/users");

const cartdata = async (req, res) => {
    if (req.user) {
        const cartdata = await users.findById(req.user._doc._id).select("cart").populate("cart.product");
        res.json({ cartdata: cartdata.cart })
    }
    else {
        res.status(401).json({
            error: "unauthorized"
        })
    }
}

const removeproductfromcart = async (req, res) => {
    if (req.user) {
        let user = await users.findById(req.user._doc._id)
        if (!user) {
            return res.status(404).json({ message: "user not found" })
        }

        // console.log(req.body)

        const selectedproduct = user.cart.filter((item) => {
            if (item.product.toString() == req.body.product && item.model == req.body.model) {
                return item
            }

        })
        if (selectedproduct.length > 0) {
            if (selectedproduct[0].quantity > 1) {

                selectedproduct[0].quantity -= 1
            }
            else {
                user.cart = user.cart.filter((item) => {
                    console.log(item)
                    if(!(item.product.toString() == req.body.product && item.model == req.body.model)){
                        return item
                    }
                });
                console.log(user.cart)
            }
        }

        user.save();
        const cartdata = await users.find({})
        res.status(200).json({ cartdata })
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
        if (!user) {
            return res.status(404).json({ message: "user not found" })
        }

        const selectedproduct = user.cart.filter((item) => {
            if (item.product.toString() == req.body.product && item.model == req.body.model) {
                return item
            }

        })

        if (selectedproduct.length > 0 && selectedproduct[0].model == req.body.model) {
            // console.log(req.body)
            selectedproduct[0].quantity += Number(req.body.quantity)
        }
        else {
            
            await user.cart.push({
                product: req.body.product,
                quantity: Number(req.body.quantity),
                model:req.body.model
            });
        }
        user.save();
        const cartdata = await users.find({})
        res.status(200).json({ cartdata })
    }
    else {
        res.status(401).json({
            error: "unauthorized"
        })
    }
}

module.exports = { cartdata, addproducttocart, removeproductfromcart }
