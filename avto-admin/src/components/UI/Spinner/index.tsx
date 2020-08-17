import React from "react";
import classes from "./style.module.scss";
import Icon from "../Icon";

interface Props {
  className?: string;
}

const Spinner: React.FC<Props> = (props) => {
  return (
    <Icon
      id="spinner"
      className={[classes.Spinner, props.className].join(" ")}
    />
  );
};

export default Spinner;
