import React from "react";
import { useFormikContext } from "formik";
import { AppCheckBox } from "../../components/inputs";

/**
 * @breif Render filter formcheck box
 * @param {String} name Filter form checkbox name
 * @param {String} label Filter form checkbox label
 * @param {String} value Filter form checkbox value
 * @param {String} id Filter form checkbox id
 * @returns
 */
const FilterCheckBox = ({ name, label, value, id }) => {
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
        id={id ?? name}
        name={name}
        checked={values[name].includes(value)}
        onChange={handleChange}
        onBlur={() => setFieldTouched(name)}
        className="filter-form__checkbox"
      />
      <label htmlFor={id ?? name} className="filter-form__label">
        {label}
      </label>
    </div>
  );
};

export default FilterCheckBox;
