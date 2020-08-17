import React from "react";

import Layout from "./components/Layout";
import { useAppRouter } from "./hooks";

const App = () => {
  const routers = useAppRouter();
  return <Layout>{routers}</Layout>;
};

export default App;
