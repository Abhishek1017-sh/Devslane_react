import { useField } from "formik";
import React from "react";

function FormikHOC(InputComponent) {
  return function OutputComponent({ name, ...rest }) {
    const [field, meta] = useField(name);
    const { value, onBlur, onChange } = field;
    const { error, touched } = meta;

    let borderClass =
      "border-gray-300 focus:border-indigo-500 focus:ring-indigo-500";
    if (error && touched) {
      borderClass = "border-red-500 focus:border-red-500 focus:ring-red-500";
    }

    return (
      <InputComponent
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        error={error}
        touched={touched}
        name={name}
        className={`w-full ${borderClass}`}
        {...rest}
      />
    );
  };
}

export default FormikHOC;