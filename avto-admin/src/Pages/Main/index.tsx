import React from "react";
import { useTitle } from "../../hooks";

export const Main: React.FC = () => {
  useTitle("Main");
  return <h1>Main</h1>;
};
