const {getUser} = require("../middlewares/auth")

const verifyisloggedin = (req,res,next)=>{
    const uid = req.headers['authorization'];
        const token = uid.split(" ")[1];
        const user = getUser(token)
    

    if(!uid || user==null){
        res.json({"message":"UNAUTHORIZED ACCESS"});
    }
    else{
        req.user = user
        next()
    }
}

module.exports = verifyisloggedin;