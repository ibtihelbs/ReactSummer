import SingleTask from "./SingleTask";

const TaskWrap = ({ Tasks, setTasks }) => {
  return (
    <div id="tasks-wrap">
      {Tasks.map((v, i) => (
        <SingleTask value={v} setTasks={setTasks} Tasks={Tasks} index={i} />
      ))}
    </div>
  );
};

export default TaskWrap;
