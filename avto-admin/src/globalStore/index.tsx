import React, { useReducer, useCallback } from "react";
import Context from "./context";
import reducer, { initialState } from "./reducer";
import { SubmitData } from "../packages/Formidable/types";
import submitRequest from "../utils/submitRequest";
import getData from "../utils/getData";
import { OnGetDataParam } from "../types";

const GlobalStore: React.FC = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const withLoading = (cb: Function) => async (data: any) => {
    dispatch({ type: "loading" });
    await cb(data);
    dispatch({ type: "loading" });
  };

  const onSubmit = withLoading(async (data: SubmitData) => {
    const response = await submitRequest(data, state.token);
    if (response) dispatch(response);
  });

  const onAuth = useCallback((token: string) => {
    dispatch({ type: "auth", data: { token } });
  }, []);

  const onLogout = useCallback(() => {
    dispatch({ type: "logout" });
  }, []);

  const onGetData = useCallback(async (...data: OnGetDataParam) => {
    withLoading(async (data: OnGetDataParam) => {
      const [url, name, token] = data;
      const response = await getData(url, name, token);
      dispatch(response);
    })(data);
  }, []);

  const onEdit = () => {
    dispatch({ type: "edit" });
  };

  return (
    <Context.Provider
      value={{
        state,
        action: {
          onSubmit,
          onLogout,
          onAuth,
          onGetData,
          onEdit,
        },
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default GlobalStore;
