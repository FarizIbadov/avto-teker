import express from "express";
import authRouter from "./routes/auth.routes";
import countryRouter from "./routes/country.routes";
import serieRouter from "./routes/serie.routes";
import seasonRouter from "./routes/season.routes";
import brandRouter from "./routes/brand.routes";
import isAdmin from "./middleware/isAdmin";

const router = express.Router();

router.use("/country", isAdmin, countryRouter);
router.use("/season", isAdmin, seasonRouter);
router.use("/brand", isAdmin, brandRouter);
router.use("/serie", isAdmin, serieRouter);
router.use("/auth", authRouter);

export default router;
