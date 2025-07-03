import { useState } from "react";
import "./TaskList.css";

export const TaskList = () => {
  const [taskList, setTaskList] = useState([]);
  const [taskText, setTaskText] = useState("");

  const handleAddTask = () => {
    if (taskText != "") {
      setTaskList([...taskList, taskText]);
      setTaskText("");
    }

    console.log(taskList);
  };

  return (
    <div>
      <h2>Lista de tareas</h2>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Añade una tarea..."
      />
      <button onClick={handleAddTask}>Añadir Tarea</button>
      <ul className="task-list">
        {taskList.map((item) => <li>{item}</li> )}
      </ul>
    </div>
  );
};
