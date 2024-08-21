import React from "react";

const Filters = () => {
  return (
    <div className="filters flex between">
      <span className="items-left"></span>
      <div className="filter-btn">
        <button className="all">All</button>
        <button className="active">Active</button>
        <button className="completed">Completed</button>
      </div>
      <button className="clear-completed">Clear Completed</button>
    </div>
  );
};

export default Filters;
