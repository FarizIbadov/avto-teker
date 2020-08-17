import React, { useState } from "react";
import Navigation from "../Navigation";
import Nav from "../Nav";
import classes from "./style.module.scss";
import { useGlobalContext } from "../../globalStore/context";

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { state } = useGlobalContext();

  const onClick = () => {
    setOpen(!open);
  };

  return (
    <header className={classes.Header}>
      <Navigation onClick={onClick} open={open} />
      {state.auth && <Nav onClick={onClick} open={open} />}
    </header>
  );
};

export default Header;
