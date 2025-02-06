const jwt = require("jsonwebtoken");
const secret = "avi123";
function setUser(user){
    const payload = {
        ...user
    }
    return jwt.sign(payload,secret);
}

function getUser(user){
    try{
        return jwt.verify(user,secret)
    }
    catch{
        return null
    }

}

module.exports = {
    setUser,
    getUser
}