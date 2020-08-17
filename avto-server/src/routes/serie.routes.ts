import express from "express";
import * as serieControllers from "../controllers/main/index";

const router = express.Router();

router.get("/", serieControllers.getList);
router.post("/add-serie", serieControllers.addItem);
router.get("/:id");
router.put("/:id");
router.delete("/:id");

export default router;
