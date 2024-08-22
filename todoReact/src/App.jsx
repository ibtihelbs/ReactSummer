import { useState, useEffect } from "react";
import "./App.css";
import Filters from "./componants/Filters";
import Form from "./componants/Form";
import TaskWrap from "./componants/TaskWrap";
import Theme from "./componants/Theme";

function App() {
  const [Tasks, setTasks] = useState([]);
  const [toDisplay, setToDisplay] = useState(null);
  /*const [completed, setCompleted] = useState([]);
  const [unDone, setUnDone] = useState([]);
  useEffect(() => {
    setCompleted(Tasks.filter((v) => v.done == true));
    setUnDone(Tasks.filter((v) => v.done == false));
  }, [Tasks]);*/
  return (
    <div className="center">
      <Theme />
      <main>
        <Form setTasks={setTasks} Tasks={Tasks} />
        <section id="tasks-management">
          <TaskWrap Tasks={Tasks} setTasks={setTasks} toDisplay={toDisplay} />
          <hr />
          <Filters setToDisplay={setToDisplay} />
        </section>
      </main>
    </div>
  );
}

export default App;
