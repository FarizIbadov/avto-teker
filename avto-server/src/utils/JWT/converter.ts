import jwt from "jsonwebtoken";
import { AdminSchema } from "../../models";
import env from "../../env";

export const converter = (user: AdminSchema, time?: number) => {
  const { SECRET, DEV } = env;
  const token = jwt.sign(
    { id: user._id },
    SECRET,
    !DEV ? { expiresIn: "1h" } : undefined
  );
  return { token, expiresIn: time || 3600 };
};
