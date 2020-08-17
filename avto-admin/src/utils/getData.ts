import axios from "../axios";
import getOptions from "./getOptions";
import { GetOnDataName } from "../types";
import errorParser from "./errorParser";

const getData = async (
  url: string,
  name: GetOnDataName,
  token: string | null
) => {
  try {
    const response = await axios.get(url, getOptions(token));

    return {
      type: name,
      data: response.data,
    };
  } catch (err) {
    return errorParser(err.response);
  }
};

export default getData;
