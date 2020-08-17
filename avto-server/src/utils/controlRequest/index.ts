import { ControlRequest } from "../../types";

const controlRequest: ControlRequest = (cb) => async (req, res, next) => {
  try {
    const response = await cb(req, res);
    !response ? next() : res.status(response.status || 200).json(response.data);
  } catch (err) {
    next(err);
  }
};

export default controlRequest;
