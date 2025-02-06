const express = require('express')
const router = express.Router();
const { alluser, cartusers, addcartusers } = require('../controllers/user')
const Allowedto = require("../middlewares/Allowedto");
const { handlechat } = require('../controllers/chat');
const verifyisloggedin = require('../middlewares/verifylogin');
const users = require('../models/users');


router.get('/', Allowedto(["tybca", "bba"]), alluser);
router.post("/cart", Allowedto(["tybca", "bba"]), addcartusers)
router.get("/cart", Allowedto(["tybca", "bba"]), cartusers)
// router.post("/chat", handlechat)
router.get("/profile", verifyisloggedin, async (req,res) => {
    res.json(req.user);
})
module.exports = router;
