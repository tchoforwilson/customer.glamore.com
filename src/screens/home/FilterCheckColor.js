import React from "react";
import { useFormikContext } from "formik";
import { AppCheckBox } from "../../components/inputs";

/**
 * @breif Render filter formcheck box
 * @param {String} name Filter form checkbox name
 * @param {String} value Filter form checkbox value
 * @returns
 */
const FilterCheckColor = ({ name, value }) => {
  const { values, setFieldValue, setFieldTouched } = useFormikContext();

  const handleChange = () => {
    setFieldValue(
      name,
      values[name].includes(value)
        ? values[name].filter((item) => item !== value)
        : [...values[name], value]
    );
  };

  return (
    <div className="filter-form__group">
      <AppCheckBox
        name={name}
        checked={values[name].includes(value)}
        onChange={handleChange}
        onBlur={() => setFieldTouched(name)}
        className="filter-form__checkbox-color"
        style={{ appearance: "none", backgroundColor: value }}
      />
    </div>
  );
};

export default FilterCheckColor;
