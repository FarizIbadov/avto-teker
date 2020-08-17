import { ErrorResponse, ErrorData } from "../types";

const errorParser = (response: ErrorResponse) => {
  const errorData: ErrorData = {
    type:
      response.status === 403 || response.status === 401
        ? "forbidden"
        : "error",
    data: response.data,
  };
  return errorData;
};

export default errorParser;
