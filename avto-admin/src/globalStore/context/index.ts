import React, { useContext } from "react";
import { Context } from "./../../types";
import { initialState } from "../reducer";

const context = React.createContext<Context>({
  state: { ...initialState },
  action: {
    onSubmit: () => {},
    onLogout: () => {},
    onAuth: () => {},
    onGetData: async () => {},
    onEdit: () => {},
  },
});

export default context;

export const useGlobalContext = () => {
  return useContext(context);
};
