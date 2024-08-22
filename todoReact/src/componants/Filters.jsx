const Filters = ({ setToDisplay }) => {
  return (
    <div className="filters flex between">
      <span className="items-left"></span>
      <div className="filter-btn">
        <button onClick={() => setToDisplay(null)} className="all">
          All
        </button>
        <button onClick={() => setToDisplay(false)} className="active">
          Active
        </button>
        <button onClick={() => setToDisplay(true)} className="completed">
          Completed
        </button>
      </div>
      <button className="clear-completed">Clear Completed</button>
    </div>
  );
};

export default Filters;
