import { ErrorRequestHandler } from "express";
import { Error } from "../types";
import deleteFile from "../utils/deleteFiles";

const ErrorMiddleware: ErrorRequestHandler = (error, req, res, _) => {
  if (req.file) {
    deleteFile(req.file.path);
  }
  if (req.files) {
    const filePaths = (req.files as Express.Multer.File[]).map(
      (file) => file.path
    );
    deleteFile(...filePaths);
  }
  const { message, status } = error as Error;
  res.status(status || 500).json({ message: message || "An error occured!" });
};

export default ErrorMiddleware;
