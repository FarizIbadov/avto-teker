import React from "react";
import classes from "./style.module.scss";
import { Link } from "react-router-dom";
import Icon from "../UI/Icon";
import Burger from "../UI/Burger";
import { useGlobalContext } from "../../globalStore/context";

interface Props {
  open: boolean;
  onClick: () => void;
}

const Navigation: React.FC<Props> = (props) => {
  const { state } = useGlobalContext();
  const onClickArray: Function[] = [];

  const navCls = [classes.Navigation, state.auth ? classes.active : ""];
  const logoCls = [classes.Logo, state.auth ? classes.active : ""];

  props.open && onClickArray.push(props.onClick);

  const onClick = () => {
    for (const func of onClickArray) {
      func();
    }
  };
  return (
    <nav className={navCls.join(" ")}>
      <Link to="/" className={logoCls.join(" ")} onClick={onClick}>
        <Icon id="Logo" />
      </Link>
      {state.auth && <Burger {...props} />}
    </nav>
  );
};

export default Navigation;
