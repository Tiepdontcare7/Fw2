import express from "express";

import { getAllOrder, addOrder } from "../controllers/order.js";

const router = express.Router();

router.get("/", getAllOrder);
router.post("/add", addOrder);
// router.post("/update", updateCartItem);
// router.post("/delete", removeCartItem);

export default router;
