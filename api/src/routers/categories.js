import express from "express";
import { CategoryController } from "../controllers/index.js";
import { checkPermission } from "../middlewares/checkPermissition.js";

const router = express.Router();

router.get("/", CategoryController.getAll);

router.get("/:id", CategoryController.getOne);

router.post("/add", CategoryController.addCate);

router.put("/update/:id", CategoryController.updateCate);

router.delete("/delete/:id", CategoryController.deleteCate);

export default router;
