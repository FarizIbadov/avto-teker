import { RequestHandler, Request, Response } from "express";
import { HandlerResult } from "./interfaces";

type Handler = (
  req: Request,
  res: Response
) => WithPromise<HandlerResult> | WithPromise;

type ListModel = "country";

export type ControlRequest = (cb: Handler) => RequestHandler;
export type WithPromise<T = void> = Promise<T> | T;
export type Model = "country" | "season" | "brand" | "serie";
