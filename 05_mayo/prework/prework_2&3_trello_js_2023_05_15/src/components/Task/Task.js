import "./Task.css";

export const renderTasks = (tasks) => {
  let tasksHTML = ``;

  for (const task of tasks) {
    tasksHTML += `<div class="task" id="${task.id}" draggable="true">${
      task.name
    }${printSubTasks(task.tasks)}</div>`;
  }

  return tasksHTML;
};

const printSubTasks = (subTasks) => {

  let subTasksHTML = ``;

  if (subTasks) {
    for (const subTask of subTasks) {
      subTasksHTML += `<div class="task" id="${subTask.id}" draggable="true">${subTask.name}</div>`;
    }
  }

  return subTasksHTML;
};
