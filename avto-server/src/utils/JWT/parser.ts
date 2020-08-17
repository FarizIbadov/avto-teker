import jwt from "jsonwebtoken";
import env from "../../env";
import throwError from "../throwError";

interface Data {
  id: string;
}

export const parser = (token: string) => {
  const { SECRET } = env;
  const data = jwt.verify(token, SECRET) as Data;
  if (!data) throwError("Not Authorized", 401);
  return data.id;
};
