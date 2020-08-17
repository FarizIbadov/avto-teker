import React from "react";
import Field from "../../../../packages/Formidable/Field";
import { useFieldDataContext } from "../../../../packages/Formidable/context";
import Icon from "../../Icon";
import classes from "./style.module.scss";
import Image from "../../Image";
import FieldMessage from "../../FieldMessage";

interface Props {
  name: string;
  className?: string;
}

export const FileUpload: React.FC<Props> = (props) => {
  const { value } = useFieldDataContext(props.name);
  const file = value as File;
  const cls = [classes.FileUpload, props.className].join(" ");
  const btnCls = [classes.Button];

  if (file) {
    btnCls.push(classes.active);
  }

  return (
    <React.Fragment>
      <div className={cls}>
        <Field
          type="file"
          name={props.name}
          id={props.name}
          className={classes.Field}
          accept="image/png,image/jpeg"
        />
        <label className={btnCls.join(" ")} htmlFor={props.name}>
          <Icon id="download" />
        </label>

        {file ? (
          <Image
            className={classes.Image}
            src={URL.createObjectURL(file)}
            alt={file.name}
          />
        ) : null}
      </div>
      <FieldMessage name={props.name} />
    </React.Fragment>
  );
};
