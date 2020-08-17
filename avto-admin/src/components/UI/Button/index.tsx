import React from "react";
import classes from "./style.module.scss";
import FormBtn from "../../../packages/Formidable/FormBtn";

interface Props {
  type: "submit" | "reset" | "button";
  color?: "primary" | "secondary" | "danger";
  size?: "small" | "medium" | "large";
  btnType?: "contained" | "outlined" | "text";
  className?: string;
  onClick?: (e: React.MouseEvent) => void | Promise<void>;
  disabled?: boolean;
}

const Button: React.FC<Props> = (props) => {
  const cls = [
    classes.Button,
    props.color ? classes[props.color] : "",
    props.size ? classes[props.size] : "",
    props.btnType ? classes[props.btnType] : "",
    props.className,
  ];

  const btnProps = {
    className: cls.join(" "),
    type: props.type,
    children: props.children,
    disabled: props.disabled,
    onClick: props.onClick,
  };
  const btn =
    props.type === "submit" ? (
      <FormBtn {...btnProps} />
    ) : (
      <button {...btnProps} />
    );
  return btn;
};

export default Button;
