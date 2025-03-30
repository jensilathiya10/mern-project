const userRouter = require("./users.js")
const express = require('express')
const router = express.Router();
const verifyisloggedin = require("../middlewares/verifylogin")
const {addnewuser,verifyuser,alluser} = require("../controllers/user")

router.get('/',verifyisloggedin,alluser)
router.post('/login',verifyuser)
router.post("/signup",addnewuser)
router.use('/users',userRouter)


module.exports = router;