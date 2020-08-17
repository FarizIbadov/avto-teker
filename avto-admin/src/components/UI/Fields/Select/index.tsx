import React from "react";
import Field from "../../../../packages/Formidable/Field";
import FieldMessage from "../../FieldMessage";
import { FormChange } from "../../../../packages/Formidable/types";

interface Props {
  name: string;
  placeholder?: string;
  className?: string;
  onChange?: (form: FormChange) => void;
}

const Select: React.FC<Props> = (props) => {
  const fieldProps = { ...props };
  delete fieldProps.className;
  return (
    <div className={props.className}>
      <Field {...fieldProps} type="select">
        <option value="">{props.placeholder}</option>
        {props.children}
      </Field>
      <FieldMessage name={props.name} />
    </div>
  );
};

export default Select;
