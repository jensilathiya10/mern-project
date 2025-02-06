const mongoose = require("mongoose");

const db = ()=>{
    mongoose.connect('mongodb+srv://avikheni35:Avi1609@mernproject.yx4dn.mongodb.net/abc')
        .then(()=>{
            console.log("connected to databse")
        })
        .catch((e)=>{
            console.log("error while connecting to database" , e)
        })
}

module.exports = db;