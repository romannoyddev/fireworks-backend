import express from "express";
import {
  getAll,
  getById,
  getByType,
} from "../controllers/product-controller.js";

const router = express.Router();

router.get("/", getAll);
router.get("/id/:id", getById);
router.get("/type/:type", getByType);

export default router;
