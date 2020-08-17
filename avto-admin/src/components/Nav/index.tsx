import React from "react";
import classes from "./style.module.scss";
import { NavLink, Link } from "react-router-dom";
import NavList from "./NavList";
import { useGlobalContext } from "../../globalStore/context";

interface Props {
  open: boolean;
  onClick: () => void;
}

const Nav: React.FC<Props> = (props) => {
  const { action } = useGlobalContext();
  const cls = [classes.Nav];
  props.open && cls.push(classes.active);

  const onLogoutFunc = [props.onClick, action.onLogout];
  const onLogout = () => {
    for (const func of onLogoutFunc) {
      func();
    }
  };

  return (
    <div className={cls.join(" ")}>
      {NavList.map((item, index) => (
        <NavLink
          key={index}
          {...item}
          className={classes.NavLink}
          activeClassName={classes.active}
          onClick={props.onClick}
        />
      ))}
      <Link
        to="/"
        className={[classes.NavLink, classes.Logout].join(" ")}
        onClick={onLogout}
      >
        Logout
      </Link>
    </div>
  );
};

export default Nav;
