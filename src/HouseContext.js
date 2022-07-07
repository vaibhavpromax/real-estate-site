import React, { createContext, useState } from "react";
import { useEffect } from "react";
import { housesData, prices } from "./data";

export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [countries, setCountries] = useState([]);
  const [years, setYears] = useState([]);
  const [selectedValues, setSelectedValues] = useState({
    country: "Location (any)",
    property: "Property type (any)",
    price: "Price range (any)",
    year: "Year (any)",
  });

  useEffect(() => {
    //get unique years
    const allCountries = houses.map((house) => {
      return house.country;
    });
    const uniqueCountries = ["Location (any)", ...new Set(allCountries)];
    setCountries(uniqueCountries);

    // get uniqute years
    const allYears = houses.map((house) => {
      return house.year;
    });
    const uniqueYears = ["Year (any)", ...new Set(allYears)];
    setYears(uniqueYears);
  }, []);

  const properties = ["Property type (any)", "Apartament", "House"];
  const isDefaultOption = (option) => {
    return (
      option === "Location (any)" ||
      option === "Property type (any)" ||
      option === "Year (any)" ||
      option === "Price range (any)"
    );
  };

  const clearFilter = () => {
    console.log("filter Cleared");
    setHouses(housesData);
  };

  const applyFilter = () => {
    console.log(selectedValues);
    const minPrice = parseInt(selectedValues.price.split(" ")[0]);
    const maxPrice = parseInt(selectedValues.price.split(" ")[2]);
    const filteredHouses = houses.filter((house) => {
      if (
        isDefaultOption(selectedValues.country) &&
        isDefaultOption(selectedValues.property) &&
        isDefaultOption(selectedValues.year) &&
        isDefaultOption(selectedValues.price)
      ) {
        return housesData;
      }

      if (
        house.country === selectedValues.country &&
        house.type === selectedValues.property &&
        house.year === selectedValues.year &&
        house.price >= minPrice &&
        house.price <= maxPrice
      ) {
        return house;
      }
      // 1 is default
      if (
        isDefaultOption(selectedValues.country) &&
        house.year === selectedValues.year &&
        house.type === selectedValues.property &&
        house.price >= minPrice &&
        house.price <= maxPrice
      ) {
        return house;
      }
      if (
        isDefaultOption(selectedValues.year) &&
        house.country === selectedValues.country &&
        house.type === selectedValues.property &&
        house.price >= minPrice &&
        house.price <= maxPrice
      ) {
        return house;
      }
      if (
        isDefaultOption(selectedValues.property) &&
        house.country === selectedValues.country &&
        house.year === selectedValues.year &&
        house.price >= minPrice &&
        house.price <= maxPrice
      ) {
        return house;
      }
      if (
        isDefaultOption(selectedValues.price) &&
        house.country === selectedValues.country &&
        house.type === selectedValues.property &&
        house.year === selectedValues.year
      ) {
        return house;
      }
      //2 are default

      if (
        isDefaultOption(selectedValues.country) &&
        isDefaultOption(selectedValues.price) &&
        house.type === selectedValues.property &&
        house.year === selectedValues.year
      ) {
        return house;
      }
      if (
        isDefaultOption(selectedValues.price) &&
        isDefaultOption(selectedValues.year) &&
        house.country === selectedValues.country &&
        house.proprety === selectedValues.property
      ) {
        return house;
      }
      if (
        isDefaultOption(selectedValues.price) &&
        isDefaultOption(selectedValues.property) &&
        house.location === selectedValues.location &&
        house.year === selectedValues.year
      ) {
        return house;
      }
      if (
        isDefaultOption(selectedValues.country) &&
        isDefaultOption(selectedValues.property) &&
        house.year === selectedValues.year &&
        house.price >= minPrice &&
        house.price <= maxPrice
      ) {
        return house;
      }
      if (
        isDefaultOption(selectedValues.property) &&
        isDefaultOption(selectedValues.year) &&
        house.country === selectedValues.country &&
        house.price >= minPrice &&
        house.price <= maxPrice
      ) {
        return house;
      }
      if (
        isDefaultOption(selectedValues.country) &&
        isDefaultOption(selectedValues.year) &&
        house.type === selectedValues.property &&
        house.price >= minPrice &&
        house.price <= maxPrice
      ) {
        return house;
      }
      // 1 is default
      if (
        isDefaultOption(selectedValues.country) &&
        isDefaultOption(selectedValues.price) &&
        isDefaultOption(selectedValues.year) &&
        house.type === selectedValues.property
      ) {
        return house;
      }
      if (
        isDefaultOption(selectedValues.country) &&
        isDefaultOption(selectedValues.price) &&
        isDefaultOption(selectedValues.property) &&
        house.year === selectedValues.year
      ) {
        return house;
      }
      if (
        isDefaultOption(selectedValues.country) &&
        isDefaultOption(selectedValues.year) &&
        isDefaultOption(selectedValues.property) &&
        house.price >= minPrice &&
        house.price <= maxPrice
      ) {
        return house;
      }
      if (
        isDefaultOption(selectedValues.year) &&
        isDefaultOption(selectedValues.property) &&
        isDefaultOption(selectedValues.price) &&
        house.country === selectedValues.country
      ) {
        return house;
      }
      // return houses;
    });
    setHouses(filteredHouses);
  };

  return (
    <HouseContext.Provider
      value={{
        houses,
        setHouses,
        countries,
        setCountries,
        years,
        properties,
        setYears,
        clearFilter,
        applyFilter,
        setSelectedValues,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
