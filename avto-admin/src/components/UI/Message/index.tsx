import React from "react";
import classes from "./style.module.scss";
import { useGlobalContext } from "../../../globalStore/context";

interface Props {
  className?: string;
}

const Message: React.FC<Props> = (props) => {
  const { state } = useGlobalContext();
  const { failed, message } = state;
  const cls = [
    classes.Message,
    failed && message ? classes.Error : message ? classes.Success : "",
    props.className,
  ].join(" ");
  return <p className={cls}>{message}</p>;
};

export default Message;
