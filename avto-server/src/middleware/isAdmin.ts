import controlRequest from "../utils/controlRequest";
import throwError from "../utils/throwError";
import Collections from "../models";
import * as JWT from "../utils/JWT";

const isAdmin = controlRequest(async (req, res) => {
  const Admin = Collections.admin;
  const token = req.get("Authorization");
  if (!token) throwError("Not Authorized", 401);
  const id = JWT.parser(token!);
  const admin = await Admin.findById(id);
  if (!admin) throwError("Forbidden", 403);
  res.locals.id = id;
});

export default isAdmin;
