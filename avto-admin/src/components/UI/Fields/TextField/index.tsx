import React from "react";
import Field from "../../../../packages/Formidable/Field";
import FieldMessage from "../../FieldMessage";

interface Props {
  name: string;
  type?: "text" | "password";
  placeholder?: string;
  className?: string;
}

export const TextField: React.FC<Props> = (props) => {
  const fieldProps = { ...props };
  delete fieldProps.className;

  return (
    <div className={props.className}>
      <Field {...fieldProps} autoComplete="off" />
      <FieldMessage name={props.name} />
    </div>
  );
};
