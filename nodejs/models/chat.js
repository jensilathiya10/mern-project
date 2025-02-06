const mongoose = require("mongoose");

const chatschema = mongoose.Schema({
    name:String,
    message:String,
    to:String
})

const chat = mongoose.model("chat",chatschema);

module.exports = chat;