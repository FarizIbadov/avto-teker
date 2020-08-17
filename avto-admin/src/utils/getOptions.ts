const getOptions = (token: string | null) => {
  if (!token) {
    return {};
  }

  return {
    headers: {
      Authorization: token,
    },
  };
};

export default getOptions;
