import "./filter.scss";

import React from "react";

const Filter = () => {
  return (
    <div className="filters">
      <div className="title">Search Your Properties</div>
      <div className="filter">
        <div className="filter-wrapper">
          <label>Location</label>
          <input type="text" />
        </div>
        <div className="filter-wrapper">
          <label>Area</label>
          <select name="" id="">
            <option value=""></option>
          </select>
        </div>
        <div className="filter-wrapper">
          <label>Price</label>
          <select name="" id="">
            <option value=""></option>
          </select>
        </div>
        <div className="filter-wrapper">
          <label>Property Type</label>
          <select name="" id="">
            <option selected value="">
              Any
            </option>
            <option value="">House</option>
            <option value="">Apartment</option>
          </select>
        </div>
        <div className="search">Search</div>
        <div className="remove-filter">Clear</div>
      </div>
    </div>
  );
};

export default Filter;
