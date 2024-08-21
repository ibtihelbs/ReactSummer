const SingleTask = ({ value, setTasks, Tasks, index }) => {
  return (
    <div className="single-task flex between" key={index}>
      <div className="flex">
        <form className="checked">
          <input
            type="checkbox"
            onChange={(e) => {}}
            checked={value.done}
            className="state"
          />
        </form>
        <p className={value.done == true ? "lined" : ""}> {value.task} </p>
      </div>
      <button className="delete">
        <img src="./images/icon-cross.svg" alt="icon-cross" />
      </button>
    </div>
  );
};

export default SingleTask;
