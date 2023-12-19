import React from "react";
import { AppInput } from "../inputs";

const SearchWidgetInput = () => {
  return (
    <form className="search-widget__form">
      <AppInput
        name="name"
        placeholder="Search products..."
        className="search-widget__input"
      />
    </form>
  );
};

export default SearchWidgetInput;
