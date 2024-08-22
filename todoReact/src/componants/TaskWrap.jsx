import { useEffect, useState } from "react";
import SingleTask from "./SingleTask";
useState;
const TaskWrap = ({ Tasks, setTasks, toDisplay }) => {
  const [arr, setArr] = useState([...Tasks]);
  useEffect(() => {
    if (toDisplay !== null) {
      const arrFilter = Tasks.filter((v) => v.done == toDisplay);
      setArr([...arrFilter]);
    } else {
      setArr([...Tasks]);
    }
  }, [Tasks, toDisplay]);

  return (
    <div id="tasks-wrap">
      {arr.map((v, i) => (
        <SingleTask value={v} setTasks={setTasks} Tasks={Tasks} index={i} />
      ))}
    </div>
  );
};

export default TaskWrap;
