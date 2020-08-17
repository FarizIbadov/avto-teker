import bcrypt from "bcrypt";
import controlRequest from "../../utils/controlRequest";
import Collections from "../../models";
import throwError from "../../utils/throwError";
import * as JWT from "../../utils/JWT";

interface Body {
  username: string;
  password: string;
}

export const postLogin = controlRequest(async (req) => {
  const Admin = Collections.admin;
  const { password, username } = req.body as Body;

  const admin = await Admin.findOne({ username });
  if (!admin) throwError("Invalid username or password!", 401);

  const passwordIsValid = await bcrypt.compare(password, admin!.password);
  if (!passwordIsValid) throwError("Invalid username or password!", 401);

  return { data: JWT.converter(admin!, 3600) };
});
