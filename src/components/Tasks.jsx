import { useState } from "react";
import { FaTrashAlt, FaCheckCircle, FaRegCircle } from "react-icons/fa";

function Tasks({ tasks, setTasks }) {
  const [openTaskId, setOpenTaskId] = useState(null);

  const toggleDescription = (id) => {
    setOpenTaskId((prev) => (prev === id ? null : id));
  };

  const toggleStatus = (id) => {
    const updated = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updated);
  };

  const deleteTask = (id) => {
    const updated = tasks.filter((task) => task.id !== id);
    setTasks(updated);
  };

  return (
    <div className="flex flex-col gap-4 mt-6">
      {tasks.map((task) => (
        <div
          key={task.id}
          className={`p-6 rounded-lg shadow-md border cursor-pointer transition duration-300 relative group ${
            task.completed
              ? "bg-green-100 border-green-300"
              : "bg-white border-gray-300"
          }`}
          onClick={() => toggleDescription(task.id)}
        >
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-4xl font-bold text-blue-700">{task.title}</h3>
            <div className="flex gap-3">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleStatus(task.id);
                }}
                className="text-green-600 hover:text-green-800 text-3xl"
                title="Alterar status"
              >
                {task.completed ? <FaCheckCircle /> : <FaRegCircle />}
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  deleteTask(task.id);
                }}
                className="text-red-600 hover:text-red-800 text-3xl"
                title="Excluir tarefa"
              >
                <FaTrashAlt />
              </button>
            </div>
          </div>

          {openTaskId === task.id && (
            <p className="text-gray-700 mb-2">{task.description}</p>
          )}

          <span
            className={`text-sm font-semibold px-3 py-1 rounded-full ${
              task.completed
                ? "bg-green-200 text-green-800"
                : "bg-red-200 text-red-800"
            }`}
          >
            {task.completed ? "Concluída" : "Pendente"}
          </span>
        </div>
      ))}
    </div>
  );
}

export default Tasks;
