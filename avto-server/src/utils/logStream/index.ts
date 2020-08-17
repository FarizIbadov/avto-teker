import fs from "fs";
import path from "path";

const logStream = fs.createWriteStream(path.resolve("access.log"), {
  flags: "a",
});

export default logStream;
