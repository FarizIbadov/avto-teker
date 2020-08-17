import bcrypt from "bcrypt";
import controlRequest from "../../utils/controlRequest";
import Collections from "../../models";
import throwError from "../../utils/throwError";

interface Body {
  username: string;
  password: string;
}

export const postRegister = controlRequest(async (req) => {
  const Admin = Collections.admin;
  const { username, password } = req.body as Body;

  const existingAdmin = await Admin.findOne({ username });
  if (existingAdmin) throwError("Admin already exists", 400);

  const hashedPassword = await bcrypt.hash(password, 12);
  const newUser = new Admin({
    username,
    password: hashedPassword,
  });

  await newUser.save();
  return {
    status: 201,
    data: {
      message: "Admin added!",
    },
  };
});
