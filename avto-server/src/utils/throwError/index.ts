const throwError = (message: string = "Not Found", status: number = 404) => {
  throw {
    message,
    status,
  };
};

export default throwError;
