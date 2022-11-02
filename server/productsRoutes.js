const express = require("express");
const router = express.Router();
const Products = require("./models/Products");

router.get("/", async (req, res) => {
  try {
    const perfumes = await Products.find({});
    console.log(req);
    res.json(perfumes);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const newProduct = new Products(req.body);
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  const itemId = req.params.id;
  try {
    await Products.findByIdAndDelete(itemId);
    res.status(200).json("deleted");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.put("/:id", async (req, res) => {
  const itemId = req.params.id;
  const newProduct = req.body;
  try {
    await Products.findByIdAndUpdate(itemId, newProduct);
    res.status(200).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const perfumes = await Products.findById(req.params.id);
    res.json(perfumes);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.patch("/:id", async (req, res) => {
  const productToEdit = await Products.findById(req.params.id);
  if (req.body.name != null) {
    productToEdit.name = req.body.name;
  }

  if (req.body.img != null) {
    productToEdit.img = req.body.img;
  }

  if (req.body.brand != null) {
    productToEdit.brand = req.body.brand;
  }

  if (req.body.category != null) {
    productToEdit.category = req.body.category;
  }

  if (req.body.sizes != null) {
    productToEdit.sizes = req.body.sizes;
  }

  try {
    const updatedProduct = await productToEdit.save();
    res.json(updatedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
