import React from "react";
import classes from "./style.module.scss";
import { useFieldDataContext } from "../../../packages/Formidable/context";

interface Props {
  name: string;
}

const FieldMessage: React.FC<Props> = (props) => {
  const { error } = useFieldDataContext(props.name);
  const errorCls = [classes.ErrorMessage, error ? classes.active : ""].join(
    " "
  );
  return <small className={errorCls}>{error}</small>;
};

export default FieldMessage;
