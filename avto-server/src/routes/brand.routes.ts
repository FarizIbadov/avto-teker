import express from "express";
import * as brandControllers from "../controllers/main/index";

const router = express.Router();

router.get("/", brandControllers.getList);
router.post("/add-brand", brandControllers.addItem);
router.get("/:id");
router.put("/:id");
router.delete("/:id");

export default router;
