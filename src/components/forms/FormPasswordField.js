import React, { useState } from "react";
import { useFormikContext } from "formik";

import FormErrorMessage from "./FormErrorMessage";
import FormIcon from "./FormIcon";
import { AppInput } from "../inputs";

/**
 *@breif Display a form group password field and label
 * @param {String} label Form label
 * @param {String} name Form field name
 * @param {String} placeholder Form placeholder
 * @returns {JSX}
 */
const FormPasswordField = ({ label, name, placeholder }) => {
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState("eye-blocked");
  const handleClick = (e) => {
    e.preventDefault();
    type === "password" ? setType("text") : setType("password");
    icon === "eye-blocked" ? setIcon("eye") : setIcon("eye-blocked");
  };
  const { values, errors, touched, setFieldTouched, setFieldValue } =
    useFormikContext();
  return (
    <div className="form__group">
      <label className="form__label" htmlFor={name}>
        {label}
      </label>
      <div className="form__input-group">
        <AppInput
          type={type}
          name={name}
          value={values[name]}
          placeholder={placeholder}
          onBlur={() => setFieldTouched(name)}
          onChange={(e) => setFieldValue(name, e.target.value)}
          className="form__input"
          autoComplete="off"
        />
        {icon && <FormIcon name={icon} onClick={handleClick} />}
      </div>
      <FormErrorMessage error={errors[name]} visible={touched[name]} />
    </div>
  );
};

export default FormPasswordField;
