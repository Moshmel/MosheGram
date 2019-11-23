import React from "react";
export default props => {
  const { img, filter, handleClick } = props;
  return (
    <section className="filter-preview">
      <label>{filter.label}</label>
      <div className="img-container">
        <img src={img} alt="..."/>
      </div>
    </section>
  );
};
