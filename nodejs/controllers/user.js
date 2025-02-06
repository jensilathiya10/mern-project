const user = require('../models/users');
const { setUser, getUser } = require("../middlewares/auth");
const cart = require("../models/cart")


const addnewuser = async (req, res) => {
    const { name, roll, classe } = req.body;
    user.create({
        name,
        roll,
        classe
    })
    res.redirect("/")
}

const verifyuser = async (req, res) => {
    const { name, roll } = req.body;
    console.log(name,roll)
    const userr = await user.findOne({ name, roll });
    if (userr == null) {
        res.status(401).json({ "message": "INVALID USERNAME OR PASSWORD" })
    }
    else {
        const token = setUser(userr);
        return res.json({ token })
    }

}

const alluser = async (req, res) => {
    console.log(req.user)
    if (req.user) {

        const users = await user.find({});
        res.json({ users })
    }
    else {
        res.status(401).json({
            error: "unauthorized"
        })
    }
}

const cartusers = async (req, res) => {

    if (req.user) {
        const cartdata = await cart.find({});
        res.json({ cartdata })
    }
    else {
        res.status(401).json({
            error: "unauthorized"
        })
    }
}
const addcartusers = async (req, res) => {
    // const token = req.headers['authorization'];
    // const id = token.split(" ")[1]
    // const userdata = getUser(id);
    if (req.user) {
        console.log(req.body)
        let newuser = new cart({
            name:req.body.name,
            roll:req.body.roll,
            classe:req.body.classe
        })
        newuser.save();
        const cartdata = await cart.find({});
        res.status(200).json({ cartdata })
    }
    else {
        res.status(401).json({
            error: "unauthorized"
        })
    }
}

module.exports = { addnewuser, verifyuser, alluser,cartusers,addcartusers };