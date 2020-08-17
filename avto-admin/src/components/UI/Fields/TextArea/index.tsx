import React from "react";
import Field from "../../../../packages/Formidable/Field";
import FieldMessage from "../../FieldMessage";

interface Props {
  name: string;
  placeholder?: string;
  className?: string;
}

const TextArea: React.FC<Props> = (props) => {
  const fieldProps = { ...props };
  delete fieldProps.className;
  return (
    <div className={props.className}>
      <Field {...fieldProps} type="textarea" />
      <FieldMessage name={props.name} />
    </div>
  );
};

export default TextArea;
