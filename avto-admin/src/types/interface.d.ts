import { ActionType, State, GetOnDataName, Word } from ".";
import { Values, SubmitData } from "../packages/Formidable/types";

export interface Context {
  state: State;
  action: ContextAction;
}

export interface ContextAction {
  onSubmit: (data: SubmitData) => Promise<void> | void;
  onLogout: () => void;
  onAuth: (token: string) => void;
  onGetData: (...data: OnGetDataParam) => Promise<void>;
  onEdit: () => void;
}

export interface State {
  token: string | null;
  loading: boolean;
  auth: boolean;
  message: string | null;
  failed: boolean;
  list: [] | string | null;
  detail: null | Values;
  edit: false;
}
export interface Action {
  type: ActionType;
  data?: any;
}

export interface LoadingData {
  loading: boolean;
  message?: null;
  failed?: boolean;
}

export interface ErrorAction {
  data: {
    message: string;
  };
}

export interface AuthAction {
  type: "auth" | "login";
  data: {
    token: string;
    expiresIn?: number;
  };
}

export interface ListDetailAction {
  data: any;
}

export interface ErrorResponse {
  status: number;
  data: any;
}

export interface ErrorData {
  type: ActionType;
  data: any;
}

export interface RouteToWord {
  [key: string]: Word;
}
