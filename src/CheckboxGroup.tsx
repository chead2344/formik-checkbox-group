import { useField } from "formik";
import React from "react";
import { CheckboxProvider } from "./CheckboxContext";
import Checkbox from "./Checkbox";

interface IProps {
  name: string;
  label: string;
}

type TCheckboxGroup = React.FC<IProps> & {
  Checkbox: typeof Checkbox;
};

const CheckboxGroup: TCheckboxGroup = ({ name, label, children }) => {
  const [field, meta, helpers] = useField<string[]>(name);
  const hasError = Boolean(meta.touched && meta.error);
  return (
    <fieldset>
      <legend>{label}</legend>
      {hasError && <span style={{ color: "red" }}>{meta.error}</span>}
      <CheckboxProvider value={{ field, helpers }}>{children}</CheckboxProvider>
    </fieldset>
  );
};

CheckboxGroup.Checkbox = Checkbox;
export default CheckboxGroup;
