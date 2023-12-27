import React, { useState } from "react";
import { AppScreenLayout } from "../../layouts";
import { FormContainer } from "../../components/forms";
import { AppSelect } from "../../components/inputs";
import FilterField from "./FilterField";
import FilterCheckBox from "./FilterCheckBox";
import FilterCheckColor from "./FilterCheckColor";

import {
  dates,
  sizes,
  brands,
  colors,
  genders,
  deals,
  materials,
} from "./FilterValues";

const categories = [
  "All Products",
  "Baselayer",
  "Jackets",
  "Overshirts",
  "Underwear",
  "Tops",
];

const best_sellers = ["Best Sellers"];

const HomeScreen = () => {
  const [activeCategory] = useState("All Products");
  const handleFilterSubmit = (values) => {
    console.log(values);
  };

  return (
    <AppScreenLayout>
      <section className="home-categories">
        <div className="home-categories__filter">
          {/** TODO: Match this with the design */}
          <AppSelect
            name="best-sellers"
            items={best_sellers}
            className="home-categories__select"
          />
          <menu className="home-categories__categories">
            {categories.map((category) => (
              <li
                key={category}
                className={`home-categories__category ${
                  activeCategory === category ? "active" : ""
                }`}
              >
                {category}
              </li>
            ))}
          </menu>
        </div>
        <div className="home-categories__line"></div>
      </section>
      <section className="home-products">
        <aside className="filter">
          <h4 className="filter__header">filter</h4>
          <FormContainer
            initialValues={{
              price: { min: "", max: "" },
              dates: [],
              genders: [],
              brands: [],
              sizes: [],
              colors: [],
              deals: [],
              materials: [],
            }}
            onSubmit={handleFilterSubmit}
          >
            <div className="filter-form">
              <div className="flex flex-col items-start gap-7 filter-form__price">
                <span className="filter-form__item">price range</span>
                <div className="flex items-start gap-10">
                  <FilterField name="price.min" placeholder="min" />
                  <FilterField name="price.max" placeholder="max" />
                </div>
              </div>
              {/* Date and Gender */}
              <div className="flex items-start gap-14">
                {/* DATES */}
                <div className="flex flex-col gap-4">
                  <span className="filter-form__item">date</span>
                  {dates.map((date) => (
                    <FilterCheckBox
                      key={date.name + date.value}
                      name="dates"
                      label={date.name}
                      value={date.value}
                      id={date.name + date.value}
                    />
                  ))}
                </div>
                {/* GENDERS */}
                <div className="flex flex-col gap-4">
                  <span className="filter-form__item">gender</span>
                  {genders.map((gender) => (
                    <FilterCheckBox
                      key={gender.name + gender.value}
                      name="genders"
                      label={gender.name}
                      value={gender.value}
                      id={gender.name + gender.value}
                    />
                  ))}
                </div>
              </div>
              {/** Brand and Body Size */}
              <div className="flex items-start gap-14">
                {/* BRAND */}
                <div className="flex flex-col gap-4">
                  <span className="filter-form__item">brands</span>
                  {brands.map((brand) => (
                    <FilterCheckBox
                      key={brand.name + brand.value}
                      name="brands"
                      label={brand.name}
                      value={brand.value}
                      id={brand.name + brand.value}
                    />
                  ))}
                </div>
                {/* BODY SIZE */}
                <div className="flex flex-col gap-4">
                  <span className="filter-form__item">body size</span>
                  {sizes.map((size) => (
                    <FilterCheckBox
                      key={size.name + size.value}
                      name="sizes"
                      label={size.name}
                      value={size.value}
                      id={size.name + size.value}
                    />
                  ))}
                </div>
              </div>
              {/* Sales and Materials */}
              <div className="flex flex-col gap-6">
                <span className="filter-form__item">colors</span>
                <div className="flex items-start gap-2">
                  {colors.map((color) => (
                    <FilterCheckColor
                      key={color.name + color.value}
                      name="colors"
                      value={color.value}
                      id={color.name + color.value}
                    />
                  ))}
                </div>
              </div>
              {/**  Deals and Materials */}
              <div className="flex items-start gap-14">
                <div className="flex flex-col gap-4">
                  <span className="filter-form__item">deals</span>
                  {deals.map((deal) => (
                    <FilterCheckBox
                      key={deal.name + deal.value}
                      name="deals"
                      label={deal.name}
                      value={deal.value}
                      id={deal.name + deal.value}
                    />
                  ))}
                </div>
                <div className="flex flex-col gap-4">
                  <span className="filter-form__item">materials</span>
                  {materials.map((material) => (
                    <FilterCheckBox
                      key={material.name + material.value}
                      name="materials"
                      label={material.name}
                      value={material.value}
                      id={material.name + material.value}
                    />
                  ))}
                </div>
              </div>
            </div>
          </FormContainer>
        </aside>
      </section>
    </AppScreenLayout>
  );
};

export default HomeScreen;
