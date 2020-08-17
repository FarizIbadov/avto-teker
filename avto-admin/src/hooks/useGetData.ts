import { useEffect } from "react";
import { useGlobalContext } from "../globalStore/context";
import { GetOnDataName } from "../types";

export const useGetData = (url: string, name: GetOnDataName) => {
  const { state, action } = useGlobalContext();
  const { token } = state;
  const { onGetData } = action;
  useEffect(() => {
    onGetData(url, name, token);
  }, [onGetData, url, name, token]);
};
