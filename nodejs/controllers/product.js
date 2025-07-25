const Product = require("../models/Product");

const getproduct = async (req, res) => {
    const raw = req.query.models || ""; // might be empty string
    const selectedmodels = raw.split(",").map((m) => m.trim()).filter(Boolean);
    const filter = selectedmodels?.length>0
    ? { modelsfor: { $in: selectedmodels } }
    : {};
    console.log(selectedmodels)
    console.log(filter)
    try {
        if (req.params.id) {
            const products = await Product.findById(req.params.id);
            res.json(products);
        }
        else {
            const products = await Product.find(filter);
            res.json(products);
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const addproduct =  async (req, res) => {
    // console.log(req)
  const imagePaths = req.files.map(file => file.path); // Get uploaded file paths

  const product = new Product({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    image: imagePaths, // Save array of file paths
    category: req.body.category,
    modelsfor: req.body.modelsfor, // Parse JSON array string
    hasModels: req.body.hasModels,
  });
//   console.log(product)

  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}


module.exports = {getproduct,addproduct}