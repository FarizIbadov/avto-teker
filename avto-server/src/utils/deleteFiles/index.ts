import path from "path";
import { promises as fs } from "fs";

const deleteFile = async (...filePaths: string[]) => {
  for (const filePath of filePaths) {
    await fs.unlink(path.resolve(filePath));
  }
};

export default deleteFile;
