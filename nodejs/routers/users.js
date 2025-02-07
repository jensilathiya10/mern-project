const express = require('express')
const router = express.Router();
const { alluser} = require('../controllers/user')
const Allowedto = require("../middlewares/Allowedto");
const { handlechat } = require('../controllers/chat');
const verifyisloggedin = require('../middlewares/verifylogin');
const users = require('../models/users');
const { addproducttocart, cartdata } = require('../controllers/cart');


// router.get('/', Allowedto(["tybca", "bba"]), alluser);
// router.post("/cart", Allowedto(["tybca", "bba"]), addproducttocart)
// router.get("/cart", Allowedto(["tybca", "bba"]), cartdata)

router.get('/', verifyisloggedin, alluser);
router.post("/cart", verifyisloggedin, addproducttocart)
router.get("/cart",verifyisloggedin, cartdata)

// router.post("/chat", handlechat)
router.get("/profile", verifyisloggedin, async (req,res) => {
    res.json(req.user);
})
module.exports = router;
