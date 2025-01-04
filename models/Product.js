const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  productCategoryName: { type: String, required: true },
  modelNumber: { type: String },
  serialNumber: { type: String },
  stockLevel: { type: Number, required: true },
  reorderPoint: { type: Number, required: true },
  supplierName: { type: String, required: true },
  supplierMail: { type: String, required: true },
  supplierContact: { type: String, required: true },
  orderDate: { type: Date },
  quantity: { type: Number },
  orderStatus: {
    type: String,
    enum: ["Pending", "Completed", "Cancelled"],
    default: "Pending",
  },
});

module.exports = mongoose.model("Product", productSchema);
