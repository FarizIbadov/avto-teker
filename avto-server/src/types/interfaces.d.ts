import { Model } from "./types";

interface ResponseData {
  [key: string]: any;
}

export interface HandlerResult {
  data: ResponseData;
  status?: number;
}

export interface Error {
  status: number;
  message: string;
}

export interface GetModel {
  [key: string]: Model;
}
