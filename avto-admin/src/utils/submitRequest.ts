import axios from "../axios";
import { SubmitData } from "../packages/Formidable/types";
import { ActionType } from "../types";
import getOptions from "./getOptions";
import errorParser from "./errorParser";

const submitRequest = async (submitData: SubmitData, token: string | null) => {
  try {
    const { method, action: url, name, data } = submitData;
    const fetch = axios[method] as Function;
    if (fetch) {
      const response = await fetch(url, data, getOptions(token));
      return { type: name as ActionType, data: response.data! };
    }
  } catch (err) {
    return errorParser(err.response);
  }
};

export default submitRequest;
