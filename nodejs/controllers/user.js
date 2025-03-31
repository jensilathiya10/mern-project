const users = require('../models/users');
const { setUser } = require("../middlewares/auth");
const cart = require("../models/cart")


const addnewuser = async (req, res) => {
    try {
        const { uname, roll, classe } = req.body;
        const user= new users({
            name:uname,
            roll,
            classe
        })
        user.save()
        return res.status(200).json({ message: "user added successfully" })
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"please try again later"})
    }
}

const verifyuser = async (req, res) => {
    const { name, roll } = req.body;
    console.log(name,roll)
    const userr = await users.findOne({ name, roll });
    if (userr == null) {
        res.status(401).json({ "message": "INVALID USERNAME OR PASSWORD" })
    }
    else {
        const token = setUser(userr);
        return res.json({ token })
    }

}

const alluser = async (req, res) => {
    if (req.user) {
        const usersdata = await users.find({});
        res.json({ usersdata })
    }
    else {
        res.status(401).json({
            error: "unauthorized"
        })
    }
}


module.exports = { addnewuser, verifyuser, alluser };