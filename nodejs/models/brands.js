const mongoose = require("mongoose");

const BrandSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: true,
        unique: true, // no duplicate category names
        trim: true
    },
    models:{
        type:[String]
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Brands", BrandSchema);
