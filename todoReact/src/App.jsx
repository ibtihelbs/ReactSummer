import { useState } from "react";
import "./App.css";
import Filters from "./componants/Filters";
import Form from "./componants/Form";
import TaskWrap from "./componants/TaskWrap";
import Theme from "./componants/Theme";

function App() {
  const [Tasks, setTasks] = useState([]);
  return (
    <div className="center">
      <Theme />
      <main>
        <Form setTasks={setTasks} Tasks={Tasks} />
        <section id="tasks-management">
          <TaskWrap Tasks={Tasks} setTasks={setTasks} />
          <hr />
          <Filters />
        </section>
      </main>
    </div>
  );
}

export default App;
