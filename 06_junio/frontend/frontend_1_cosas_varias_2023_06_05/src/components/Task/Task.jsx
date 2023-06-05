import "./Task.css";

const Task = ({ task, tasks, setTasks, posicion }) => {

  const cambiar = () => {
    const newTasks = [...tasks];

    newTasks[posicion] = { ...task, completada: !task.completada };

    setTasks(newTasks);
  };

  return (
    <div className="task">
      <input
        id={task.id}
        type="checkbox"
        defaultChecked={task.completada}
        onChange={cambiar}
      />
      <label htmlFor={task.id} className={task.completada ? "completada" : "title"}>{task.title}</label>
    </div>
  );
};

export default Task;
