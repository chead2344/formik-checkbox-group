import { FieldHelperProps, FieldInputProps } from "formik";
import { createContext, useContext } from "react";

interface IContext {
  field: FieldInputProps<string[]>;
  helpers: FieldHelperProps<string[]>;
}

const CheckboxContext = createContext<IContext | null>(null);

export function useCheckboxContext() {
  const context = useContext(CheckboxContext);
  if (!context) {
    throw new Error("Must be used in scope of a CheckboxProvider");
  }

  return context;
}

export const CheckboxProvider = CheckboxContext.Provider;
