import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const Header = (props) => {
  const setOrder = (e) => {
    props.changeOrder(e.value);
  };

  const options = [
    { value: true, label: "Most Recent" },
    { value: false, label: "Least Recent" },
  ];

  const displayOrder = options[props.displayDesc ? 0 : 1];

  return (
    <section className="resource-listing__header">
      <button className="hide-filters" onClick={props.filterToggle}>
        {props.filtersVisible ? "Hide" : "Show"} filters
      </button>
      <Dropdown options={options} onChange={(e) => setOrder(e)} value={displayOrder} />
    </section>
  );
};

export default Header;
