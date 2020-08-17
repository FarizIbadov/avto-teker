import path from "path";
import express from "express";
import mongoose from "mongoose";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";

import ErrorMiddleware from "./middleware/Error";
import appRouter from "./routes";
import env from "./env";
import logStream from "./utils/logStream";

const { MONGO_URL, PORT, DEV } = env;

const app = express();

app.use(morgan("combined", { stream: logStream }));
app.use("/images", express.static(path.resolve("media/images")));
app.use(express.json());

app.disable("X-Powered-By");

app.use(helmet());
app.use(
  cors({
    origin: DEV ? "*" : ["http://192.168.0.153:3000"],
  })
);

app.use(appRouter);
app.use(ErrorMiddleware);

mongoose
  .connect(MONGO_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("DB Connected!");
    app.listen(PORT, () => {
      console.log(`Running on http://localhost:${PORT}`);
    });
  })
  .catch(() => {
    console.log("Error with DB connection");
  });
