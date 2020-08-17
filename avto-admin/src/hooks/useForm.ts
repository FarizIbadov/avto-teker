import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useGlobalContext } from "../globalStore/context";
import { Word } from "../types";

export const useForm = (category: Word) => {
  const { state } = useGlobalContext();
  const history = useHistory();
  const { location } = history;
};
