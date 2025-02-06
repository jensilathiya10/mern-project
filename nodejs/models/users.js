const mongoose = require("mongoose");

const userschema = mongoose.Schema({
    name:String,
    roll:Number,
    classe:String
})

const users = mongoose.model("user",userschema);

module.exports = users;