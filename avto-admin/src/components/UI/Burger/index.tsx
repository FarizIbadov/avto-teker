import React from "react";
import classes from "./style.module.scss";

interface Props {
  open: boolean;
  onClick: () => void;
}

const Burger: React.FC<Props> = (props) => {
  const cls = [classes.Burger];
  props.open && cls.push(classes.active);

  return (
    <button className={cls.join(" ")} onClick={props.onClick}>
      <span className={classes.Bar}></span>
    </button>
  );
};

export default Burger;
