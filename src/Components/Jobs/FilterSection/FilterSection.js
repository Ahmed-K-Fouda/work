import React from "react";
import "./FilterSection.css";
const FilterSection = ({ title, options }) => {
  return (
    <div className="job__type">
      <p>{title}</p>
      {options.map((option, index) => (
        <div key={index} className="job__label">
          <input type="checkbox" />
          <label>{option}</label>
        </div>
      ))}
    </div>
  );
};

export default FilterSection;
