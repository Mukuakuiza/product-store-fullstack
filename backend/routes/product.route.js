import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  updateProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

//Get all products
router.get("/", getAllProducts);

//Creating new product
router.post("/", createProduct);

//Update products
router.put("/:id", updateProduct);

//delete products
router.delete("/:id", deleteProduct);

export default router;
