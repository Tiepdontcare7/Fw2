import express from "express";
import {
  addToCart,
  getAllCart,
  removeCartItem,
  updateCartItem,
} from "../controllers/cart.js";

const router = express.Router();

router.get("/", getAllCart);
router.post("/add", addToCart);
router.post("/update", updateCartItem);
router.post("/delete", removeCartItem);

export default router;
