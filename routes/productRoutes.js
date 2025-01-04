const express = require("express");
const router = express.Router();
const {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
  getProductById,
} = require("../controllers/productController");

// Create a product
router.post("/", createProduct);

// Get all products
router.get("/", getProducts);

// Get a product by ID
router.get("/:id", getProductById);

// Update a product
router.put("/:id", updateProduct);

// Delete a product
router.delete("/:id", deleteProduct);

module.exports = router;
