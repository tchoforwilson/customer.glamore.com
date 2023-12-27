import React from "react";
import { useFormikContext } from "formik";

/**
 * @brief A simple submit button
 * @param {String} name -> Name of button
 * @param {Boolean} loading -> Loading spinner
 * @param {Any} otherProps -> Other properties
 * @return {JSX}
 */
const SubmitButton = ({ title, loading, ...otherProps }) => {
  const { handleSubmit } = useFormikContext();
  return (
    <button
      disabled={loading}
      type="submit"
      {...otherProps}
      onClick={handleSubmit}
    >
      {/**TODO: Remember to add spinner */}
      <span className="btn-submit__title">{title}</span>
    </button>
  );
};

export default SubmitButton;
