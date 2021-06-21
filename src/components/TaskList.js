import React, { useState, useEffect } from "react";
//Componentes
import TaskForm from "./TaskForm";
import Task from "./Task";
//Api
import { getTaskApi, deleteTaskApi } from "../api/main";

import "../style/TaskForm.scss";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [reloadTask, setReloadTask] = useState(false);

  //Conusme la Api
  useEffect(() => {
    getTaskApi().then((response) => {
      setTasks(response);
      setReloadTask(false);
    });
  }, [reloadTask]);

  //Consume la APi
  const removeTask = (id) => {
    deleteTaskApi(id).then((response) => {
      console.log(response);
    });
    setReloadTask(true);
  };

  return (
    <div className="container-app">
      <h1>Pendientes para hoy</h1>
      <TaskForm setReloadTask={setReloadTask} />
      <Task
        setReloadTask={setReloadTask}
        reloadTask={reloadTask}
        tasks={tasks}
        removeTask={removeTask}
      />
    </div>
  );
}
