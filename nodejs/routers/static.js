const userRouter = require("./users.js")
const express = require('express')
const router = express.Router();
const verifyisloggedin = require("../middlewares/verifylogin")
const {addnewuser,verifyuser,alluser} = require("../controllers/user")
const {getUser, setUser} = require("../middlewares/auth")

router.get('/',verifyisloggedin,alluser)

// router.get('/login',(req,res)=>{
//     res.render("login")
// })

router.post('/login',verifyuser)

// router.get('/signup',(req,res)=>{
//     res.render("signup")
// });
router.post("/signup",addnewuser)
router.use('/users',userRouter)
module.exports = router;