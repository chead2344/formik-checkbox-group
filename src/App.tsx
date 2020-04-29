import React from "react";
import { Formik, Form } from "formik";
import CheckboxGroup from "./CheckboxGroup";

type Topping = "pepperoni" | "sausage" | "mushroom" | "pineapple";
interface IFormValues {
  toppings: Topping[];
}

export default function App() {
  return (
    <Formik<IFormValues>
      initialValues={{ toppings: [] }}
      onSubmit={values => alert(JSON.stringify(values, null, 2))}
      validate={values => {
        if (!values.toppings.length) {
          return { toppings: "Please choose at least one topping" };
        }

        if (values.toppings.find(_ => _ === "pineapple")) {
          return { toppings: "Urgh! Who eats pineapple on pizza?" };
        }

        return {};
      }}
    >
      {() => (
        <Form>
          <CheckboxGroup
            name="toppings"
            label="What pizza toppings do you like?"
          >
            <CheckboxGroup.Checkbox label="Pepperoni" value="pepperoni" />
            <CheckboxGroup.Checkbox label="Sausage" value="sausage" />
            <CheckboxGroup.Checkbox label="Mushroom" value="mushroom" />
            <CheckboxGroup.Checkbox label="Pineapple" value="pineapple" />
          </CheckboxGroup>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}
