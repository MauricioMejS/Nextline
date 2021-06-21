import React, { useState } from "react";
//Iconos
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { RiTaskLine } from "react-icons/ri";
//Api
import { updateTaskApi } from "../api/main";
//Estilos
import "../style/Task.scss";

export default function Task({ tasks, removeTask, setReloadTask, reloadTask }) {
  //Estados para la edicion
  const [edit, setEdit] = useState("");
  const [status, setStatus] = useState(0);
  const [onEditing, setOnEditing] = useState(false);

  return tasks.map((tasks) => (
    <div className={tasks.isComplete ? "task-row complete" : "task-row"}>
      <div
        key={tasks.id}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <text>{tasks.title}</text>
        <text>{tasks.is_completed}</text>
        <text>{tasks.due_date.replace(" 00:00:00", "")}</text>
        <text>{tasks.comments}</text>
        <text>{tasks.description}</text>
        <text>{tasks.tags}</text>
      </div>
      <div className="icons">
        <RiCloseCircleLine
          onClick={() => removeTask(tasks.id)}
          className="delete-icon"
        />
        <TiEdit onClick={() => setOnEditing(true)} className="edit-icon" />
        <RiTaskLine
          onClick={() => {
            if (status === 0) {
              setStatus(1);
            } else {
              setStatus(0);
            }

            let newTask = tasks;
            newTask = {
              ...newTask,
              due_date: newTask.due_date.replace(" 00:00:00", ""),
              is_completed: status,
            };

            console.log(newTask);

            updateTaskApi(newTask).then((response) => {
              console.log(response);
              setReloadTask(true);
            });

            console.log(reloadTask);
          }}
          className="edit-icon"
        />
        {onEditing ? (
          <EditingModal
            setEdit={setEdit}
            tasks={tasks}
            edit={edit}
            setReloadTask={setReloadTask}
            reloadTask={reloadTask}
            setOnEditing={setOnEditing}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  ));
}

function EditingModal({
  setEdit,
  tasks,
  edit,
  setReloadTask,
  reloadTask,
  setOnEditing,
}) {
  return (
    <>
      <div className="view-task">
        <input
          type="text"
          placeholder="Actualizar"
          className="task-input-update"
          onChange={(e) => setEdit(e.target.value)}
        />
        <button
          onClick={() => {
            let newTask = tasks;
            newTask = {
              ...newTask,
              title: edit,
              due_date: newTask.due_date.replace(" 00:00:00", ""),
            };

            console.log(newTask);
            
            updateTaskApi(newTask).then((response) => {
              console.log(response);
              setReloadTask(true);
            });

            setOnEditing(false);
            console.log(reloadTask);
          }}
          className="task-button-update"
        >
          Agregar
        </button>
      </div>
    </>
  );
}
