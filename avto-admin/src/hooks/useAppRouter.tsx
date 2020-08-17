import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { useGlobalContext } from "../globalStore/context";
import * as Pages from "../Pages/index";
import { useAuth } from "./useAuth";

export const useAppRouter = () => {
  const { state } = useGlobalContext();
  useAuth();
  let routers = (
    <Switch>
      <Route path="/login" component={Pages.Login} />
      <Redirect to="/login" />
    </Switch>
  );

  if (state.auth) {
    routers = (
      <Switch>
        <Route path="/" exact component={Pages.Main} />
        <Route path="/season" exact component={Pages.ListPage} />
        <Route path="/country" exact component={Pages.ListPage} />
        <Route path="/brand" exact component={Pages.ListPage} />
        <Route path="/serie" exact component={Pages.ListPage} />
        <Route path="/season/add-season" component={Pages.AddEditPage} />
        <Route path="/country/add-country" component={Pages.AddEditPage} />
        <Route path="/brand/add-brand" component={Pages.AddEditPage} />
        <Route path="/serie/add-serie" component={Pages.AddEditPage} />
        <Redirect to="/" />
      </Switch>
    );
  }

  return routers;
};
