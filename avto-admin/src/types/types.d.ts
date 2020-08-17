export type ActionType =
  | "login"
  | "auth"
  | "loading"
  | "error"
  | "forbidden"
  | "logout"
  | "list"
  | "detail"
  | "edit";

export type GetOnDataName = "detail" | "list";
export type OnGetDataParam = [string, GetOnDataName, string | null];
export type Word = "Country" | "Season" | "Serie" | "Brand";
