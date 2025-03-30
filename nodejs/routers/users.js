const express = require('express')
const router = express.Router();
const { alluser} = require('../controllers/user')
const verifyisloggedin = require('../middlewares/verifylogin');
const { addproducttocart, cartdata, removeproductfromcart } = require('../controllers/cart');

router.get('/', verifyisloggedin, alluser);
router.post("/cart", verifyisloggedin, addproducttocart)
router.get("/cart",verifyisloggedin, cartdata)
router.put("/cart/remove",verifyisloggedin,removeproductfromcart)
router.put("/cart/add", verifyisloggedin, addproducttocart)
router.get("/profile", verifyisloggedin, async (req,res) => {
    res.json(req.user);
})
module.exports = router;
