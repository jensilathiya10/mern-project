const categories = require("../models/categories")

const addCategory = async (req, res) => {
    try {
        // const { name,description, classe } = req.body;
        const category = new categories({
            name: req.body.name,
            description: req.body.description
        })
        await category.save()
        return res.status(200).json({ message: "category added successfully" })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "please try again later" })
    }
}

const getCategories = async (req, res) => {
    try {
        const products = await categories.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json("error occured :",error)
    }
}

module.exports = { addCategory ,getCategories};