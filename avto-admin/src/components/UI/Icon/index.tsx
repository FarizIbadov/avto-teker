import React from "react";
import classes from "./style.module.scss";
import icon from "../../../assets/icons/icon.svg";
import logo from "../../../assets/logo/logo.svg";

interface Props {
  id: string;
  className?: string;
}

const Icon: React.FC<Props> = (props) => {
  const { id } = props;
  const xlinkHref = id === "Logo" ? logo + "#Logo" : icon + "#" + id;
  const cls = [classes.Icon, props.className].join(" ");
  return (
    <svg className={cls}>
      <use xlinkHref={xlinkHref} />
    </svg>
  );
};

export default Icon;
