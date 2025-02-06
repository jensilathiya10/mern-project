const {getUser} = require('./auth');
function Allowedto(fields = []){
    return function(req,res,next){
        const token = req.headers['authorization'];
        const id = token.split(" ")[1]
        const user = getUser(id); 
        if(fields.includes(user._doc.classe)){
            res.authority = true   
        }else{
            res.authority = false
            console.log("false")
        }
        req.user = user
        next()
    }
}

module.exports = Allowedto;