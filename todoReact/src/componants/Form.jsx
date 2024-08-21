import { useState } from "react";

const Form = ({ Tasks, setTasks }) => {
  const [task, setTask] = useState("");
  return (
    <form
      className="flex"
      onSubmit={(ev) => {
        ev.preventDefault();
        setTasks([...Tasks, { task, done: false }]);
        setTask("");
      }}
    >
      <span></span>
      <input
        value={task}
        type="text"
        id="add"
        placeholder="Create new todo ...."
        onChange={(e) => {
          setTask(e.target.value);
        }}
      />
    </form>
  );
};

export default Form;
