const brands = require("../models/brands")

const addBrand = async (req, res) => {
    try {
        // const { name,description, classe } = req.body;
        const Brand = new brands({
            brand: req.body.brand,
            models: req.body.models
        })
        await Brand.save()
        return res.status(200).json({ message: "Brand added successfully" })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "please try again later" })
    }
}

const getBrand = async (req, res) => {
    try {
        const Brands = await brands.find({});
        res.status(200).json(Brands);
    } catch (error) {
        res.status(500).json("error occured :",error)
    }
}

const updateBrand = async (req,res) => {
    const { id } = req.params;
    const { brand, models } = req.body;

    try {
        const updatedBrand = await brands.findByIdAndUpdate(
            id,
            { brand, models },
            { new: true }
        );

        if (!updatedBrand) {
            return res.status(404).json({ error: "Brand not found" });
        }

        res.json(updatedBrand);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }

}
module.exports = { addBrand ,getBrand,updateBrand};