import { useState } from "react";
import Task from "../Task/Task";
import "./Tasks.css";

const Tasks = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Hacer la compra",
      completada: true,
    },
    {
      id: 2,
      title: "Ir al cine",
      completada: false,
    },
    {
      id: 3,
      title: "Hacer un todo list pero bien",
      completada: false,
    },
  ]);

  const getCompletadas = () => {
    return tasks.reduce((suma, task) => (task.completada ? suma + 1 : suma), 0);
  };

  return (
    <div className="checklist">
      <h2>My checklist</h2>
      <div className="tasks">
        {!tasks.length && <p>What is your next challenge?</p>}
        {tasks.map((task, index) => (
          <Task
            task={task}
            key={task.id}
            posicion={index}
            setTasks={setTasks}
            tasks={tasks}
          />
        ))}
      </div>
      <div className="checklist-footer">
        <p>{`completado ${getCompletadas()} de ${tasks.length}`}</p>
        <button className="addTask">+ Add task</button>
      </div>
    </div>
  );
};

export default Tasks;