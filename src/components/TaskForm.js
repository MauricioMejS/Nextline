import moment from "moment";
import React, { useState } from "react";
import { addTaskApi } from "../api/main";

export default function FromTask({ setReloadTask }) {
  const [input, setInput] = useState({
    title: "",
    comments: "Prueba",
    description: "Prueba",
    tags: "Prueba",
    is_completed: "0",
    due_date: moment().format("YYYY-MM-DD"),
  });

  const addTask = (e) => {
    e.preventDefault();
    addTaskApi(input).then((response) => {
      console.log(response.task);
      if (response.task) {
        setReloadTask(true);
      }
    });
  };

  const handleSubmit = () => {
    setInput("");
  };
  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        placeholder="Agregar Titulo"
        value={input.title}
        onChange={(e) => setInput({ ...input, title: e.target.value })}
        name="text"
        className="task-input"
      />
      <button onClick={addTask} className="task-button">
        Agregar
      </button>
    </form>
  );
}
