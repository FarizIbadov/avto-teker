import express from "express";
import * as authControllers from "../controllers/auth/index";

const router = express.Router();

router.post("/login", authControllers.postLogin);
router.post("/register", authControllers.postRegister);

export default router;
