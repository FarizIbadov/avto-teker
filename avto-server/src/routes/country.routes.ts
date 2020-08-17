import express from "express";
import * as countryControllers from "../controllers/main/index";

const router = express.Router();

router.get("/", countryControllers.getList);
router.post("/add-country", countryControllers.addItem);
router.get("/:id");
router.put("/:id");
router.delete("/:id");

export default router;
