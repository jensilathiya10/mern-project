const mongoose = require("mongoose");

const CategoriesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true, // no duplicate category names
        trim: true
    },
    description: {
        type: String,
        default: ''
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Categories", CategoriesSchema);
