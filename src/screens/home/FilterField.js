import React from "react";
import { useFormikContext } from "formik";
import { AppInput } from "../../components/inputs";

/**
 * @breif Render filter form input field
 * @param {String} name The name of the filter field
 * @param {String} placeholder The input field placeholder
 * @returns
 */
const FilterField = ({ name, placeholder }) => {
  const { values, setFieldValue, setFieldTouched } = useFormikContext();
  return (
    <div className="filter-form__group">
      <AppInput
        id={name}
        name={name}
        value={values[name]}
        placeholder={placeholder}
        onChange={(e) => setFieldValue(name, e.target.value)}
        onBlur={() => setFieldTouched(name)}
        type="number"
        className="filter-form__input"
      />
    </div>
  );
};

export default FilterField;
