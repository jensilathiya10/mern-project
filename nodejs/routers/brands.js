const express = require("express");
const { addBrand, getBrand, updateBrand } = require("../controllers/brands");
const router = express.Router();

router.post("/add",addBrand)
router.get("/",getBrand)
router.patch("/update/:id",updateBrand);
module.exports = router;