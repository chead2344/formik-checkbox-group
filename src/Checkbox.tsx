import React from "react";
import { useCheckboxContext } from "./CheckboxContext";

interface IProps {
  value: string;
  label: string;
}

const Radio: React.FC<IProps> = ({ value, label }) => {
  const { field, helpers } = useCheckboxContext();
  const checked = Boolean(field.value && field.value.find(_ => _ === value));
  return (
    <label style={{ display: "block" }}>
      <input
        type="checkbox"
        value={value}
        checked={checked}
        onChange={() => {
          if (checked) {
            helpers.setValue(field.value.filter(_ => _ !== value));
          } else {
            helpers.setValue([...field.value, value]);
          }
        }}
      />
      {label}
    </label>
  );
};

export default Radio;
