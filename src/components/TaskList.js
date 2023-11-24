import React, { useState, useEffect } from "react";
import TaskForm from "./TaskForm";
import "../css/TaskList.css";
import Tarea from "./TaskItem";

function TaskList() {
  // Recuperar las tareas almacenadas en localStorage al inicializar el componente
  const initialTareas = JSON.parse(localStorage.getItem("tareas")) || [];
  const [tareas, setTareas] = useState(initialTareas);

  // Actualizar localStorage cada vez que las tareas cambien
  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  const addTask = (tarea) => {
    if (tarea.text.trim()) {
      tarea.text = tarea.text.trim();
      const newTareas = [...tareas, tarea];
      setTareas(newTareas);
    }
  };

  const taskDelete = (id) => {
    const newTareas = tareas.filter((tarea) => tarea.id !== id);
    setTareas(newTareas);
  };

  const taskComplete = (id) => {
    const newTareas = tareas.map((tarea) => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(newTareas);
  };

  return (
    <>
      <TaskForm onSubmit={addTask} />
      <div className="TaskListContainer">
        {tareas.map((tarea) => (
          <Tarea
            key={tarea.id}
            id={tarea.id}
            text={tarea.text}
            complete={tarea.completada}
            taskComplete={taskComplete}
            taskDelete={taskDelete}
          />
        ))}
      </div>
    </>
  );
}

export default TaskList;