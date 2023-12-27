import React from "react";
import { useFormikContext } from "formik";
import FormErrorMessage from "./FormErrorMessage";
import FormIcon from "./FormIcon";
import { AppInput } from "../inputs";

/**
 *@breif Display an input group form field
 * @param {String} label Form field label
 * @param {String} name Form field name
 * @param {String} placeholder Form field placeholder
 * @param {String} type Form field type
 * @param {String} icon Form field icon
 * @returns {JSX}
 */
const FormField = ({ name, label, placeholder, type, icon }) => {
  const { values, errors, touched, setFieldValue, setFieldTouched } =
    useFormikContext();
  return (
    <div className="form__group">
      <label htmlFor={name} className="form__label">
        {label}
      </label>
      <div className="form__input-group">
        <AppInput
          name={name}
          id={name}
          placeholder={placeholder}
          type={type}
          value={values[name]}
          onChange={(e) => setFieldValue(name, e.target.value)}
          onBlur={() => setFieldTouched(name)}
          className="form__input"
          autoComplete="off"
        />
        {icon && <FormIcon name={icon} onClick={(e) => e.preventDefault()} />}
      </div>
      <FormErrorMessage error={errors[name]} visible={touched[name]} />
    </div>
  );
};

export default FormField;
