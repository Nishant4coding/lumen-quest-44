import express from "express";
import { registerUser } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
// Get pending products
router.get("/status/pending", getPendingProducts);

// Mark a product as approved
router.put("/status/:id/approved", markAsApproved);

// Get a product by ID
router.get("/:id", getProductById);

// Update a product
router.put("/:id", updateProduct);

// Delete a product
router.delete("/:id", deleteProduct);

export default userRouter;
