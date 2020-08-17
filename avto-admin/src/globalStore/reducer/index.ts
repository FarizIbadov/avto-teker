import {
  State,
  Action,
  LoadingData,
  ErrorAction,
  AuthAction,
  ListDetailAction,
} from "../../types";
import updateObject from "../../utils/updateObject";
import saveData from "../../utils/saveData";

export const initialState: State = {
  token: null,
  loading: false,
  auth: false,
  failed: false,
  message: null,
  list: null,
  detail: null,
  edit: false,
};

const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case "auth":
    case "login":
      return setLogin(state, action);
    case "loading":
      return setLoading(state, action);
    case "error":
      return setError(state, action);
    case "forbidden":
      return setForbidden(state, action);
    case "logout":
      return setLogout(state, action);
    case "list":
    case "detail":
      return setListAndItem(state, action);
    case "edit":
      return setEdit(state, action);
    default:
      return state;
  }
};

const setLoading = (state: State, _: unknown) => {
  const newChanges: LoadingData = { loading: !state.loading };
  if (!state.loading) {
    newChanges.message = null;
    newChanges.failed = false;
  }
  return updateObject<State>(state, newChanges);
};

const setError = (state: State, action: unknown) => {
  const { data } = action as ErrorAction;
  return updateObject<State>(state, { failed: true, ...data });
};

const setLogin = (state: State, action: unknown) => {
  const { data, type } = action as AuthAction;
  const { token, expiresIn } = data;
  type === "login" && saveData({ token, expiresIn: expiresIn! });

  return updateObject<State>(state, { auth: true, token: data.token });
};

const setLogout = (state: State, _: unknown) => {
  localStorage.removeItem("token");
  localStorage.removeItem("expiresIn");
  return updateObject<State>(state, { auth: false, token: null });
};

const setForbidden = (state: State, action: unknown) => {
  const { data } = action as ErrorAction;
  return updateObject<State>(state, { auth: false, failed: true, ...data });
};

const setListAndItem = (state: State, action: unknown) => {
  const { data } = action as ListDetailAction;
  return updateObject<State>(state, { ...data });
};

const setEdit = (state: State, _: unknown) => {
  return updateObject<State>(state, { edit: !state.edit });
};

export default reducer;
