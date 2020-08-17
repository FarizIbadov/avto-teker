import React from "react";
import Header from "../Header";
import classes from "./style.module.scss";

const Layout: React.FC = (props) => {
  return (
    <React.Fragment>
      <Header />
      <main className={classes.Main}>{props.children}</main>
    </React.Fragment>
  );
};

export default Layout;
