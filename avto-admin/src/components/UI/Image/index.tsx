import React from "react";
import classes from "./style.module.scss";

interface Props {
  src: string;
  alt: string;
  className?: string;
}

const Image: React.FC<Props> = (props) => {
  const cls = [classes.Image, props.className].join(" ");
  return <img className={cls} src={props.src} alt={props.alt} />;
};

export default Image;
