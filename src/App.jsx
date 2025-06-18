import { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import AddTaskToggle from "./components/AddTaskToggle";
import Tasks from "./components/Tasks";

function ToDoList() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      return JSON.parse(savedTasks);
    } else {
      return [
        {
          id: 1,
          title: "Estudar React",
          description: "Estudar os conceitos básicos do React",
          completed: false,
        },
        {
          id: 2,
          title: "Fazer exercícios",
          description: "Praticar com exercícios de fixação",
          completed: true,
        },
        {
          id: 3,
          title: "Criar um projeto",
          description: "Desenvolver um projeto simples usando React",
          completed: false,
        },
      ];
    }
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <header className="flex items-center justify-center space-x-4 mb-6">
        <h2 className="text-6xl font-bold text-shadow-lg">Lista de tarefas</h2>
        <img
          src="src/assets/img/react.svg"
          alt="Logo do React"
          className="w-10 h-10"
        />
      </header>

      <AddTaskToggle setTasks={setTasks} />

      <Tasks tasks={tasks} setTasks={setTasks} onTaskClick={onTaskClick} />
    </div>
  );
}

export default ToDoList;
