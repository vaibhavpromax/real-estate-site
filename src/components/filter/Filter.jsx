import "./filter.scss";

import Button from "../button/Button";
import { HouseContext } from "../../HouseContext";
import { useContext } from "react";
import { prices } from "../../data";
const Filter = () => {
  const {
    countries,
    years,
    setSelectedValues,
    clearFilter,
    applyFilter,
    properties,
  } = useContext(HouseContext);
  return (
    <div className="filters">
      <div className="title">Search Your Properties</div>
      <div className="filter">
        <div className="filter-wrapper">
          <label>Location</label>
          <select
            name=""
            id=""
            onChange={(e) =>
              setSelectedValues((prevState) => {
                // if (e.target.value === "Location (any)")
                //   return { ...prevState, country: "" };
                return { ...prevState, country: e.target.value };
              })
            }
          >
            {countries.map((country, index) => (
              <option value={country} key={index}>
                {country}
              </option>
            ))}
          </select>
        </div>
        <div className="filter-wrapper">
          <label>Year</label>
          {/* <select name="" id="" onChange={(e) => setYear(e.target.value)}> */}
          <select
            name=""
            id=""
            onChange={(e) =>
              setSelectedValues((prevState) => {
                // if (e.target.value === "Year (any)")
                //   return { ...prevState, year: "" };
                return { ...prevState, year: e.target.value };
              })
            }
          >
            {years.map((year, index) => (
              <option value={year} key={index}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div className="filter-wrapper">
          <label>Price</label>
          {/* <select name="" id="" onChange={(e) => setPrice(e.target.value)}> */}
          <select
            name=""
            id=""
            onChange={(e) =>
              setSelectedValues((prevState) => {
                // if (e.target.value === "Price range (any)")
                //   return { ...prevState, price: "" };
                return { ...prevState, price: e.target.value };
              })
            }
          >
            {prices.map((price, index) => (
              <option value={price.value} key={index}>
                {price.value === "Price range (any)" ? " " : " ₹"} {price.value}
              </option>
            ))}
          </select>
        </div>
        <div className="filter-wrapper">
          <label>Property Type</label>
          {/* <select name="" id="" onChange={(e) => setProperty(e.target.value)}> */}
          <select
            name=""
            id=""
            onChange={(e) =>
              setSelectedValues((prevState) => {
                // if (e.target.value === "Property type (any)")
                //   return { ...prevState, property: "" };
                return { ...prevState, property: e.target.value };
              })
            }
          >
            {/* {properties.map((property, index) => (
              <option value={property} key={index}>
                {property}
              </option>
            ))} */}
            <option value="Property type (any)">Property type (any)</option>
            <option value="Apartament">Apartament</option>
            <option value="House">House</option>
          </select>
        </div>
        <Button onClick={applyFilter} className="search">
          Search
        </Button>
        <Button onClick={clearFilter} className="reset">
          Clear
        </Button>
      </div>
    </div>
  );
};

export default Filter;
