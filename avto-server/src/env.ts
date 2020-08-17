import dotenv from "dotenv";

dotenv.config();

const env = {
  MONGO_URL: process.env.MONGO_URL!,
  SECRET: process.env.SECRET!,
  PORT: +process.env.PORT! || 5000,
  DEV: process.env.STATUS === "development",
};

export default env;
